import { Display } from "./Display.module.js";
export class Meals extends Display {
  constructor() {
    super();
    this.getMeals();
  }
  async getMeals() {
    try {
      $(".outer-spinner").fadeIn(300);
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Falied to fatch API");
      const data = await res.json();
      this.displayMeals(data.meals, "#someMeals #mealsShow");
    } catch (err) {
      $(".meals").html(`<p class="err-pag">${err}</p>`);
      console.error(err);
    } finally {
      $(".outer-spinner").fadeOut(500);
    }
  }
}
