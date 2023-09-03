import { Display } from "./Display.module.js";

export class Categories extends Display {
  constructor() {
    super();
    this.mealsShowEl = document.querySelectorAll("#mealsShow");
    this.categoriesBtnEl = document.getElementById("categoriesBtn");
    this.categoriesBtnEl.addEventListener(
      "click",
      this.getCategData.bind(this)
    );
    this.categShowEvent();
  }
  async getCategData() {
    try {
      $(".inner-spinner").fadeIn(500);
      const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Falied to fatch API");
      const data = await res.json();
      this.displayCateg(data.categories, "#categories #mealsShow");
    } catch (err) {
      $(".meals").html(`<p class="err-pag">${err}</p>`);
      console.error(err);
    } finally {
      $(".inner-spinner").fadeOut(500);
    }
  }
  displayCateg(data, location) {
    let box = ``;
    data.forEach((el) => {
      box += `
      <div class="col-md-3">
        <div class="rounded-3 overflow-hidden  meal-box position-relative">
          <img src="${el.strCategoryThumb}" alt="${
        el.strCategory
      } pic" class="w-100 rounded-2" data-cat=${el.strCategory}>
          <div
            class=" layer h-100 d-flex py-2 px-1 align-items-center flex-column justify-content-center w-100 rounded-2 text-center text-black" data-cat=${
              el.strCategory
            }>
            <h2 data-cat=${el.strCategory}>${el.strCategory}</h2>
            <p data-cat=${el.strCategory}>
            ${el.strCategoryDescription.split(" ").slice(0, 18).join(" ")}</p>
          </div>
        </div>
      </div>
      `;
    });
    let el = document.querySelector(`${location}`);
    el.innerHTML = box;
  }

  categShowEvent() {
    let row = [...this.mealsShowEl];
    row.forEach((el) => {
      el.addEventListener("click", this.getNCategDetails.bind(this));
    });
  }
  getNCategDetails(e) {
    let catName = e.target.dataset.cat;
    if (catName !== undefined) {
      this.getCategMeals(catName);
    }
  }

  async getCategMeals(catName) {
    try {
      $(".inner-spinner").fadeIn(500);
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Falied to fatch API");
      const data = await res.json();
      this.displayMeals(data.meals, "#categories #mealsShow");
    } catch (err) {
      $(".meals").html(`<p class="err-pag">${err}</p>`);
      console.error(err);
    } finally {
      $(".inner-spinner").fadeOut(500);
    }
  }
}
