export class Spinner {
  constructor() {}
  spinnerShow() {
    $(document).ready(() => {
      console.log("sssssssssssssss");
      $(".outer-spinner").fadeIn(500);
    });
  }
  spinnerHide() {
    $(".outer-spinner").fadeOut(500);
  }
  spinnerInnerShow() {
    $(document).ready(() => {
      console.log("sssssssssssssss");
      $(".inner-spinner").fadeIn(500);
    });
  }
  spinnerInnerHide() {
    $(".inner-spinner").fadeOut(500);
  }
}
