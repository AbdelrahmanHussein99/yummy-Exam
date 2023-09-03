import { Display } from "./Display.module.js";

export class Search extends Display {
  constructor() {
    super();
    this.searchNameEL = document.getElementById("searchName");
    this.searchLetterEl = document.getElementById("searchLetter");
    this.searchNameEL.addEventListener("keyup", this.getWord.bind(this));
    this.searchLetterEl.addEventListener("keyup", this.getLetter.bind(this));
  }

  getWord() {
    let word = this.searchNameEL.value;
    this.getSearchNdata(word);
  }

  async getSearchNdata(word) {
    try {
      $(".inner-spinner").fadeIn(500);
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Falied to fatch API");
      const data = await res.json();
      this.displayMeals(data.meals, "#search #mealsShow");
    } catch (err) {
      $(".meals").html(`<p class="err-pag">${err}</p>`);
      console.error(err);
    } finally {
      $(".inner-spinner").fadeOut(500);
    }
  }

  getLetter() {
    let letter = this.searchLetterEl.value;
    this.getSearchLdata(letter);
  }
  async getSearchLdata(letter) {
    try {
      $(".inner-spinner").fadeIn(500).css("display", "flex");
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${
        letter ? letter : "a"
      }`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Falied to fatch API");
      const data = await res.json();
      // send data and location to displat module
      this.displayMeals(data.meals, "#search #mealsShow");
    } catch (err) {
      $(".meals").html(`<p class="err-pag">${err}</p>`);
      console.error(err);
    } finally {
      $(".inner-spinner").fadeOut(500);
    }
  }
}
