// import { Meals } from "./Meals.module.js";
import { Spinner } from "./Spinner.module.js";

export class Search extends Spinner {
  constructor() {
    super();
    this.x = new Meals();
    this.mealsShow = document.getElementById("mealsShow");
    this.errorParg = document.createElement("p");
    this.searchNameEL = document.getElementById("searchName");
    this.searchLetterEl = document.getElementById("searchLetter");
    this.searchNameEL.addEventListener("keyup", this.getWord.bind(this));
    console.dir(this.searchNameEL);
  }
  getWord() {
    let word = this.searchNameEL.value;
    this.getSearchNdata(word);
  }
  async getSearchNdata(word) {
    try {
      this.spinnerInnerShow();
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Falied to fatch API");
      const data = await res.json();
      console.log(data);
      this.x.displayMeals(data.meals);
      // letMeals.displayMeals(data.meals);
    } catch (err) {
      this.errorParg.innerText = err;
      this.errorParg.setAttribute("class", "err-pag");
      this.mealsShow.append(this.errorParg);
      console.error(err);
    } finally {
      this.spinnerInnerHide();
    }
  }
}
