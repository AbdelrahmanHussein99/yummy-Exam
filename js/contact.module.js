export class Contant {
  constructor() {
    this.userNameEl = document.getElementById("userName");
    this.userEmailEl = document.getElementById("userEmail");
    this.userPhoneEl = document.getElementById("userPhone");
    this.userAgeEl = document.getElementById("userAge");
    this.userPasswordEl = document.getElementById("userPassword");
    this.repasswordEl = document.getElementById("repassword");
    this.alertDisplay();
    this.userNameEl.addEventListener("input", this.isValidName.bind(this));
    this.userEmailEl.addEventListener("input", this.isValidEmail.bind(this));
    this.userPhoneEl.addEventListener("input", this.isValidPhone.bind(this));
    this.userAgeEl.addEventListener("input", this.isValidName.bind(this));
    this.userPasswordEl.addEventListener("input", this.isValidName.bind(this));
    this.repasswordEl.addEventListener("input", this.isValidName.bind(this));
  }
  alertDisplay() {
    $("#nameErr").hide();
    $("#emailErr").hide();
    $("#phoneErr").hide();
    $("#ageErr").hide();
    $("#passwordErr").hide();
    $("#repasswordErr").hide();
  }
  isValidName() {
    const nameRagex = /^\w{3,16}$/;
    const nameInpVal = this.userNameEl.value;
    if (nameRagex.test(nameInpVal)) {
      $("#nameErr").hide();
    } else {
      $("#nameErr").show();
    }
  }
  isValidEmail() {
    const emailRagex = /^[a-z0-9]+@(gmail|outlook)(\.com)$/;
    const emailInpVal = this.userEmailEl.value;
    if (emailRagex.test(emailInpVal)) {
      $("#emailErr").hide();
    } else {
      $("#emailErr").show();
    }
  }
  isValidPhone() {
    console.log(this.userPhoneEl.value);
    const phoneRagex = /^(011|012|010|015)[0-9]{8}$/;
    const phoneInpVal = this.userPhoneEl.value;
    if (phoneRagex.test(phoneInpVal)) {
      $("#phoneErr").hide();
    } else {
      $("#phoneErr").show();
    }
  }
  isValidName() {
    console.log(this.userNameEl.value);
    const nameRagex = /^\w{3,16}$/;
    const nameInpVal = this.userNameEl.value;
    if (nameRagex.test(nameInpVal)) {
      $("#nameErr").hide();
    } else {
      $("#nameErr").show();
    }
  }
  isValidName() {
    console.log(this.userNameEl.value);
    const nameRagex = /^\w{3,16}$/;
    const nameInpVal = this.userNameEl.value;
    if (nameRagex.test(nameInpVal)) {
      $("#nameErr").hide();
    } else {
      $("#nameErr").show();
    }
  }
  isValidName() {
    console.log(this.userNameEl.value);
    const nameRagex = /^\w{3,16}$/;
    const nameInpVal = this.userNameEl.value;
    if (nameRagex.test(nameInpVal)) {
      $("#nameErr").hide();
    } else {
      $("#nameErr").show();
    }
  }
}
