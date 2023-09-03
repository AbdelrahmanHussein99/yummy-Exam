export class Contant {
  constructor() {
    // selector
    this.userNameEl = document.getElementById("userName");
    this.userEmailEl = document.getElementById("userEmail");
    this.userPhoneEl = document.getElementById("userPhone");
    this.userAgeEl = document.getElementById("userAge");
    this.userPasswordEl = document.getElementById("userPassword");
    this.repasswordEl = document.getElementById("repassword");
    this.submitBtn = document.getElementById("submitBtn");
    // events
    this.userNameEl.addEventListener("input", this.isValidName.bind(this));
    this.userEmailEl.addEventListener("input", this.isValidEmail.bind(this));
    this.userPhoneEl.addEventListener("input", this.isValidPhone.bind(this));
    this.userAgeEl.addEventListener("input", this.isValidAge.bind(this));
    this.userPasswordEl.addEventListener("input", this.isValidPass.bind(this));
    this.repasswordEl.addEventListener("input", this.isValidRepass.bind(this));
    // flags
    this.nameFlag = false;
    this.emailFlag = false;
    this.phoneFlag = false;
    this.ageFlag = false;
    this.passFlag = false;
    this.repassFlag = false;

    this.alertDisplay();
  }
  // hide inputs alert

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
      this.nameFlag = true;
      $("#nameErr").hide();
    } else {
      this.nameFlag = false;
      $("#nameErr").show();
    }
    this.submit();
  }

  isValidEmail() {
    const emailRagex = /^[a-z0-9]+@(gmail|outlook)(\.com)$/;
    const emailInpVal = this.userEmailEl.value;
    if (emailRagex.test(emailInpVal)) {
      this.emailFlag = true;
      $("#emailErr").hide();
    } else {
      this.emailFlag = false;
      $("#emailErr").show();
    }
    this.submit();
  }

  isValidPhone() {
    const phoneRagex = /^(011|012|010|015)[0-9]{8}$/;
    const phoneInpVal = this.userPhoneEl.value;
    if (phoneRagex.test(phoneInpVal)) {
      this.phoneFlag = true;
      $("#phoneErr").hide();
    } else {
      this.phoneFlag = false;
      $("#phoneErr").show();
    }
    this.submit();
  }

  isValidAge() {
    const ageRagex = /^[1-9][0-9]?$/;
    const ageInpVal = this.userAgeEl.value;
    if (ageRagex.test(ageInpVal)) {
      this.ageFlag = true;
      $("#ageErr").hide();
    } else {
      this.ageFlag = false;
      $("#ageErr").show();
    }
    this.submit();
  }

  isValidPass() {
    const passRagex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,14}$/;
    const passInpVal = this.userPasswordEl.value;
    if (passRagex.test(passInpVal)) {
      this.passFlag = true;
      $("#passwordErr").hide();
    } else {
      this.passFlag = false;
      $("#passwordErr").show();
    }
    this.submit();
  }

  isValidRepass() {
    const passInpVal = this.userPasswordEl.value;
    const repassInpVal = this.repasswordEl.value;
    if (passInpVal === repassInpVal) {
      this.repassFlag = true;
      $("#repasswordErr").hide();
    } else {
      this.repassFlag = false;
      $("#repasswordErr").show();
    }
    this.submit();
  }

  submit() {
    if (
      this.nameFlag &&
      this.emailFlag &&
      this.phoneFlag &&
      this.ageFlag &&
      this.passFlag &&
      this.repassFlag
    ) {
      this.submitBtn.removeAttribute("disabled");
    } else {
      this.submitBtn.setAttribute("disabled", true);
    }
  }
}
