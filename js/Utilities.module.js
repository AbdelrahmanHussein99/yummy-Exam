export class Utilities {
  constructor() {
    this.width = $(".left-side").innerWidth();
    this.left = false;
    this.navbarOpenClose();

    this.navbarLinks();
  }
  navbarLinks() {
    $(".links li").click(function () {
      const sec = $(this).attr("data");
      $(sec).show().siblings().hide();
    });
    $(".links li").click(() => {
      this.navClose(this.width);
    });
  }
  navbarOpenClose() {
    $("#openBtn").click(() => {
      if (this.left) {
        this.navClose(this.width);
      } else {
        this.navbarOpen();
      }
    });
  }
  spinnerShow() {
    $(document).ready(() => {
      $(".outer-spinner").fadeIn(500);
    });
  }
  spinnerHide() {
    $(".outer-spinner").fadeOut(500);
  }
  navClose(width) {
    $("#openBtn i").attr("class", "fa-solid fa-bars fa-2xl");
    $(".side-navbar").animate({ left: `-${width}px` }, 500);
    this.left = false;
    this.navbarCloseAnimate();
  }
  navbarOpen() {
    $("#openBtn i").attr("class", "fa-solid fa-xmark fa-2xl");
    $(".side-navbar").animate({ left: "0px" }, 500);
    this.left = true;
    this.navbaropenAnimate();
  }
  navbaropenAnimate() {
    for (let i = 0; i < $(".links li").length; i++) {
      $(".links li")
        .eq(i)
        .animate({ top: `0px` }, (i + 3) * 150);
    }
  }
  navbarCloseAnimate() {
    $(".links li").animate({ top: `210px` }, 500);
  }
}
