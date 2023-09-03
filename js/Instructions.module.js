import { Display } from "./Display.module.js";

export class Instructions extends Display {
  constructor() {
    super();
    this.mealsShowEl = document.querySelectorAll("#mealsShow");
    this.instructionsBtnEl = document.getElementById("instructionsBtn");
    this.instructionsBtnEl.addEventListener(
      "click",
      this.getInstrData.bind(this)
    );
    this.instrShowEvent();
  }
  async getInstrData() {
    try {
      $(".inner-spinner").fadeIn(500);
      const url = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Falied to fatch API");
      const data = await res.json();
      this.displayInstr(data.meals.slice(0, 20), "#instructions #mealsShow");
    } catch (err) {
      $(".meals").html(`<p class="err-pag">${err}</p>`);
      console.error(err);
    } finally {
      $(".inner-spinner").fadeOut(500);
    }
  }
  displayInstr(data, location) {
    let box = ``;
    data.forEach((el) => {
      box += `
        <div class="col-md-3">
          <div class="rounded-3 area text-center " data-instr=${
            el.strIngredient
          }>
            <i class="fa-solid fa-drumstick-bite icon-home mb-2" data-instr=${
              el.strIngredient
            }></i>
            <h2 data-instr=${el.strIngredient}>${el.strIngredient}</h2>
            <p data-instr=${el.strIngredient}>${el.strDescription
        .split(" ")
        .slice(0, 18)
        .join(" ")}</p>
          </div>
        </div>
      `;
    });
    let el = document.querySelector(`${location}`);
    el.innerHTML = box;
  }
  instrShowEvent() {
    let row = [...this.mealsShowEl];
    row.forEach((el) => {
      el.addEventListener("click", this.getNInstrDetails.bind(this));
    });
  }
  getNInstrDetails(e) {
    let instrName = e.target.dataset.instr;
    if (instrName !== undefined) {
      this.getInstrMeals(instrName);
    }
  }
  async getInstrMeals(instrName) {
    try {
      $(".inner-spinner").fadeIn(500);
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${instrName}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Falied to fatch API");
      const data = await res.json();
      this.displayMeals(data.meals, "#instructions #mealsShow");
    } catch (err) {
      $(".meals").html(`<p class="err-pag">${err}</p>`);
      console.error(err);
    } finally {
      $(".inner-spinner").fadeOut(500);
    }
  }
}
