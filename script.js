"use strict";

// var new_user = {
//   first: "",
//   last: "",
//   Email: "",
//   Pass: "",
// };
const gallerybtn = document.querySelector(".gallery-btn");
const main = document.querySelector(".main");
const main1 = document.getElementById("main");
const aboutus = document.querySelector(".aboutus");
const swiper1 = document.querySelector(".swiper");
const h1 = document.querySelector(".h1");
const next = document.querySelector(".swiper-button-next");
const prev = document.querySelector(".swiper-button-prev");
const img = document.querySelector(".img");
const buttonclose = document.querySelector(".buttonclose");
let eml_check = new RegExp("[a-z0-9]+@hijjawi.com");

var neweml_chk =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var upper_case_chk = /(?=.*?[A-Z])/;
var lower_case_chk = /(?=.*?[a-z])/;
var one_num_chk = /(?=.*?[0-9])/;
var one_special_char = /(?=.*?[#?!@$%^&*-])/;
var new_pass_ok =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const oneNumber = document.getElementById("one_num");
const oneChar = document.getElementById("one_spc_chr");
const length = document.getElementById("length_pass");
const email = document.getElementById("emailinput");
const password = document.getElementById("passinput");
const signin = document.querySelector(".signbtn");
const signupbtn = document.getElementById("signupbtn");
const emailwarning = document.getElementById("emailwarning");
const passwarning = document.getElementById("passwordwarning");
const emailchk = document.getElementById("emailchk");
const passchk = document.getElementById("passchk");
const loginpop = document.querySelector(".loginpop");
const closepop = document.querySelector(".close");
const profile = document.querySelector(".profile");
const notreg = document.getElementById("notreg");
const signok = document.getElementById("signok");
const logout = document.getElementById("logoutbtn");
const slogan = document.querySelector(".slogan");
const warning = document.querySelectorAll(".warning");
const submit = document.querySelector(".subbtn");
const closesignup = document.querySelector(".closesignup");
const signup = document.querySelector(".signup");
const signupwarning = document.querySelectorAll(".signupwarning");
const newmail = document.getElementById("newmail");
const newmailwarn = document.getElementById("newemailwarn");
const newpass = document.getElementById("newpass");
const newpasswarn = document.getElementById("newpasswarn");
const passreapetbox = document.getElementById("passreapetbox");
const passreapet = document.getElementById("passreapet");
const passvalid = document.getElementById("passvalid");
const allinput = document.querySelectorAll(".loginbox");
const user = document.getElementById("username");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const a = "ahmad@hijjawi.com";
const splitted = a.split("@");
var users = Array();
const stopsign = function () {
  notreg.textContent = "Not Registered? ";
  signok.style.display = "";
  email.style.display = "";
  password.style.display = "";
  signin.style.display = "";
  signupbtn.style.display = "";
  password.value = "";
  email.value = "";
  logout.style.display = "none";
  notreg.style.top = "";
  notreg.style.transition = "0";
  slogan.style.bottom = "950px";
};
// box.addEventListener("click", warning_off());

gallerybtn.addEventListener("click", function (e) {
  h1.style.opacity = "0";
  swiper1.style.opacity = "1";
  aboutus.style.background = "black ";
  gallerybtn.style.opacity = "0";
});

buttonclose.addEventListener("click", function (e) {
  aboutus.style.background = "url(pistons1.jpg)";
  swiper1.style.opacity = "0";
  h1.style.opacity = "1";
  gallerybtn.style.opacity = "1";

  e.stopPropagation();
});

email.addEventListener("click", function () {
  emailwarning.style.opacity = "0";
  passwarning.style.opacity = "0";
});
password.addEventListener("click", function () {
  passwarning.style.opacity = "0";
});
signin.addEventListener("click", function () {
  if (!eml_check.test(email.value)) {
    emailwarning.style.opacity = "1";
  }

  if (password.value !== "1234" || !eml_check.test(email.value)) {
    passwarning.style.opacity = "1";
  }
  if (eml_check.test(email.value) && password.value === "1234") {
    notreg.textContent = "Hello, welcome back! ";
    notreg.style.top = "-18px";
    signok.style.display = "none";
    email.style.display = "none";
    password.style.display = "none";
    signin.style.display = "none";
    signupbtn.style.display = "none";
    logout.style.display = "block";
    logout.style.top = "7px";
    logout.style.opacity = "1";
    slogan.style.bottom = "847px";
    setTimeout(
      () => (
        (loginpop.style.opacity = "0"), (loginpop.style.transform = "scale(0)")
      ),
      3000
    );
  }
});

logout.addEventListener("click", stopsign);

closepop.addEventListener("click", function () {
  loginpop.style.opacity = "0";
  loginpop.style.transform = "scale(0)";
  email.value = "";
  password.value = "";
});
profile.addEventListener("click", function () {
  loginpop.style.opacity = "1";
  loginpop.style.transform = "scale(1)";
});
signupbtn.addEventListener("click", function () {
  signup.style.transform = "scale(1)";
  signup.style.opacity = "1";
  loginpop.style.transform = "scale(0)";
  slogan.style.bottom = "950px";
  signup.style.top = "-150px";
});
closesignup.addEventListener("click", function () {
  loginpop.style.opacity = "0";
  loginpop.style.transform = "scale(0)";
  slogan.style.bottom = "950px";
  signup.style.opacity = "0";
  signup.style.transform = "scale(0)";
  allinput.forEach((element) => {
    element.value = "";
  });
  warning.forEach((element) => {
    element.style.opacity = "0";
  });
});

newmail.addEventListener("keyup", function (e) {
  if (!neweml_chk.test(e.target.value)) {
    newmailwarn.style.opacity = "1";
    newmailwarn.innerHTML = "email don't exist";
    newmailwarn.style.color = "red";
  } else if (neweml_chk.test(e.target.value)) {
    newmailwarn.style.opacity = "1";
    newmailwarn.style.color = "green";
    newmailwarn.innerHTML = "email exist";
  }
});

newpass.addEventListener("input", function (e) {
  newpass.addEventListener("click", function (e) {
    if (e.target.value === "") {
      passvalid.style.opacity = "1";

      oneNumber.style.color = "red";
      lower.style.color = "red";
      upper.style.color = "red";
      length.style.color = "red";
    }
  });

  passvalid.style.opacity = "1";
  if (e.target.value.length > 7) {
    length.style.color = "green";
    newpasswarn.style.opacity = "1";
    passvalid.style.opacity = "1";
  } else if (e.target.value.length < 7) {
    length.style.color = "red";
  }

  if (e.target.value.match(one_num_chk)) {
    oneNumber.style.color = "green";
    newpasswarn.style.opacity = "1";
    passvalid.style.opacity = "1";
  } else if (!e.target.value.match(one_num_chk) || e.target.value === "") {
    oneNumber.style.color = "red";
  }

  if (e.target.value.match(one_special_char)) {
    oneChar.style.color = "green";
    newpasswarn.style.opacity = "1";
  } else if (!e.target.value.match(one_special_char) || e.target.value === "") {
    oneChar.style.color = "red";
  }

  if (e.target.value.match(lower_case_chk)) {
    lower.style.color = "green";
    newpasswarn.style.opacity = "1";
  } else if (!e.target.value.match(lower_case_chk) || e.target.value === "") {
    lower.style.color = "red";
  }
  if (e.target.value.match(upper_case_chk)) {
    upper.style.color = "green";
    newpasswarn.style.opacity = "1";
  } else if (!e.target.value.match(upper_case_chk || e.target.value === "")) {
    upper.style.color = "red";
  }

  if (e.target.value === "") {
    newpasswarn.style.opacity = "0";
    passvalid.style.opacity = "0";
    passvalid.style.color = "red";
    newpasswarn.innerHTML = "password don't match requirements";
  }
  if (
    e.target.value.match(upper_case_chk) &&
    e.target.value.match(lower_case_chk) &&
    e.target.value.match(one_special_char) &&
    e.target.value.length > 7
  ) {
    newpasswarn.innerHTML = "password match requirements";
    newpasswarn.style.color = "green";
  } else if (
    !e.target.value.match(upper_case_chk) ||
    !e.target.value.match(lower_case_chk) ||
    !e.target.value.match(one_special_char) ||
    !e.target.value.length > 7
  ) {
    newpasswarn.innerHTML = "password don't match requirements";
    newpasswarn.style.color = "red";
  }
});
passreapetbox.addEventListener("input", function (e) {
  if (e.target.value === newpass.value && newpass.value !== "") {
    passreapet.innerHTML = "password match";
    passreapet.style.color = "green";
    passreapet.style.opacity = "1";
  }
  if (newpass.value === "") {
    passreapet.innerHTML = "please enter password first";
    passreapet.style.color = "red";
  }
  if (e.target.value !== newpass.value && newpass.value !== "") {
    passreapet.innerHTML = "password don't match";
    passreapet.style.color = "red";
  }
});
submit.addEventListener("click", function () {
  if (
    newmailwarn.innerHTML === "email not exist" ||
    passreapet.innerHTML === "Passwords don't match"
  ) {
    alert("please fill all the fields below with the requirements!!");
  } else {
    signup.style.opacity = "0";
    signup.style.transform = "scale(0)";
    loginpop.style.opacity = "1";
    loginpop.style.transform = "scale(1)";
    notreg.textContent = "Hello, welcome! ";
    notreg.style.top = "-18px";
    signok.style.display = "none";
    email.style.display = "none";
    password.style.display = "none";
    signin.style.display = "none";
    signupbtn.style.display = "none";
    logout.style.display = "block";
    logout.style.top = "7px";
    logout.style.opacity = "1";
    slogan.style.bottom = "847px";
    setTimeout(
      () => (
        (loginpop.style.opacity = "0"), (loginpop.style.transform = "scale(0)")
      ),
      3000
    );
    var new_user = user.value;
    new_user = {
      first_name: firstName.value,
      last_name: lastName.value,
      Email: newmail.value,
      Pass: newpass.value,
    };

    users.push(new_user);
  }
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// export { new_user };
