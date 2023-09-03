export class Display {
  constructor() {
    this.mealsShowEl = document.querySelectorAll("#mealsShow");
    this.recipeDetails = document.getElementById("recipeDetails");
    this.mealsShowEvent();
  }

  // display data for meals
  displayMeals(data, location) {
    data ? data : (data = []);
    let box = ``;
    data.forEach((el) => {
      box += `
              <div class="col-md-3">
          <div class="rounded-3 overflow-hidden meal-box position-relative">
            <img src="${el.strMealThumb}" alt="" class="w-100 rounded-2" data-id=${el.idMeal}>
            <div class=" layer h-100 d-flex p-2 align-items-center w-100 rounded-2 text-black" data-id=${el.idMeal}>
              <h2>${el.strMeal}</h2>
            </div>
          </div>
        </div>
      `;
    });
    let el = document.querySelector(`${location}`);
    el.innerHTML = box;
  }

  // addEventListener to parent and target children

  mealsShowEvent() {
    let row = [...this.mealsShowEl];
    row.forEach((el) => {
      el.addEventListener("click", this.getIdMealDetails.bind(this));
    });
  }
  getIdMealDetails(e) {
    let id = e.target.dataset.id;
    if (id !== undefined) {
      this.getMealDetails(id);
    }
  }
  // get data for one meal
  async getMealDetails(id) {
    try {
      $(".inner-spinner").fadeIn(500);
      $("#someMeals").hide();
      $("#mealInstructions").show();
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Falied to fatch API");
      const data = await res.json();

      this.displayMealInstructions(data.meals[0]);
    } catch (err) {
      $(".meals").html(`<p class="err-pag">${err}</p>`);
      console.error(err);
    } finally {
      $(".inner-spinner").fadeOut(500);
    }
  }

  // display data for one meal

  displayMealInstructions(data) {
    let recipeInstructions = ``;
    let recipeTags = ``;
    for (let i = 1; i <= 20; i++) {
      if (data[`strIngredient${i}`] !== "") {
        recipeInstructions += `<li class="p-1 m-2 alert alert-info">${
          data[`strMeasure${i}`]
        } ${data[`strIngredient${i}`]}</li>`;
      }
    }
    let tagsArr = [];
    if (data.strTags !== null) {
      tagsArr = data.strTags?.split(",");
    }
    for (let i = 0; i < tagsArr.length; i++) {
      recipeTags += `
      <li class="p-1 m-2 alert alert-danger">${tagsArr[i]}</li>`;
    }
    this.recipeDetails.innerHTML = `
            <div  class="col-md-4">
          <div class="rounded-3 overflow-hidden ">
            <img src="${data.strMealThumb}" alt="meal pic" class="w-100 rounded-2">
            <h2 class="mt-1">${data.strMeal}</h2>
          </div>
        </div>
        <div class="col-md-8">
          <div>
            <h2>Instructions</h2>
            <p>${data.strInstructions}</p>
            <div class="h3">
              <span>Area : </span><span> ${data.strArea}</span>
            </div>
            <div class="h3">
              <span>Category :</span><span> ${data.strCategory}</span>
            </div>
            <div class="h3">
              <span>Recipes :</span>
            </div>
            <ul class="list-unstyled d-flex flex-wrap">
              ${recipeInstructions}
            </ul>
            <div class="h3">
              <span>Tags :</span>
            </div>
            <ul class="Recipes list-unstyled d-flex flex-wrap">
              ${recipeTags}
            </ul>
            <ul class="Recipes list-unstyled d-flex flex-wrap">
              <li class="px-2 py-1 m-2 btn btn-success"><a class=" text-white text-decoration-none" href="${data.strSource}"
                  target="_blank">Source</a></li>
              <li class="px-2 py-1 m-2 btn btn-danger"><a class=" text-white text-decoration-none" href="${data.strYoutube}"
                  target="_blank">Youtube</a></li>
            </ul>
          </div>
        </div>
    `;
    $("#mealInstructions").siblings().hide();
  }
}
