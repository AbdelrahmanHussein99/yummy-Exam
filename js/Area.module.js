import { Display } from "./Display.module.js";

export class Area extends Display {
  constructor() {
    super();
    this.mealsShowEl = document.querySelectorAll("#mealsShow");
    this.areaBtnEl = document.getElementById("areaBtn");
    this.areaBtnEl.addEventListener("click", this.getAreaData.bind(this));
    this.areaShowEvent();
  }
  // get areas api data

  async getAreaData() {
    try {
      $(".inner-spinner").fadeIn(500);
      const url = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Falied to fatch API");
      const data = await res.json();
      // send data and location to displat module
      this.displayArea(data.meals, "#area #mealsShow");
    } catch (err) {
      $(".meals").html(`<p class="err-pag">${err}</p>`);
      console.error(err);
    } finally {
      $(".inner-spinner").fadeOut(500);
    }
  }
  // display areas api data

  displayArea(data, location) {
    let box = ``;
    data.forEach((el) => {
      box += `
      <div class="col-md-3">
          <div class="rounded-3 area text-center "data-area=${el.strArea}>
            <i class="fa-solid fa-house-laptop icon-home mb-2" data-area=${el.strArea}></i>
            <h2 data-area=${el.strArea}>${el.strArea}</h2>
          </div>
      </div>`;
    });
    let el = document.querySelector(`${location}`);
    el.innerHTML = box;
  }

  // addEventListener to parent and target children

  areaShowEvent() {
    let row = [...this.mealsShowEl];
    row.forEach((el) => {
      el.addEventListener("click", this.getNAreaDetails.bind(this));
    });
  }
  getNAreaDetails(e) {
    let areaName = e.target.dataset.area;
    if (areaName !== undefined) {
      this.getAreaMeals(areaName);
    }
  }

  // get clicked area api data

  async getAreaMeals(areaName) {
    try {
      $(".inner-spinner").fadeIn(500);
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Falied to fatch API");
      const data = await res.json();
      // send data and location to displat module
      this.displayMeals(data.meals, "#area #mealsShow");
    } catch (err) {
      $(".meals").html(`<p class="err-pag">${err}</p>`);
      console.error(err);
    } finally {
      $(".inner-spinner").fadeOut(500);
    }
  }
}
