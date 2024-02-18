import course from "./api.js";
var loginlogoclick2 = document.querySelector(".loginimg2");
var loginlogoclick = document.querySelector(".loginimg");
var mainlogin = document.querySelector(".logindisplay");
var loginbutton = document.querySelector(".b2");
var logintosignup = document.querySelector(".noacc2");
var signup = document.querySelector(".signdisplay");
var logincancel = document.querySelector(".buttonx");
var signupbackbutton = document.querySelector(".backbut");
var next = document.querySelector(".but3");
var backbut = document.querySelector(".backbut");
var signupcanelx = document.querySelector(".signupcancel");
var but2 = document.querySelector(".b2");
var y = document.querySelector(".navbutton");
var x = document.querySelector(".nav2");
var user_name = document.querySelector(".user_name1");
let user_name1 = document.querySelector(".user_name12");
let l1 = document.querySelector(".l");

logintosignup.addEventListener("click", logintosign);
loginlogoclick.addEventListener("click", login);
loginlogoclick2.addEventListener("click", login);
logincancel.addEventListener("click", xcancel);
signupbackbutton.addEventListener("click", signupback);
next.addEventListener("click", nextclick);
backbut.addEventListener("click", butback);
signupcanelx.addEventListener("click", xcancel2);
but2.addEventListener("click", but2click);
y.addEventListener("click", nav);
// menu

function nav() {
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// login()

// x locancel button of login

function xcancel() {
  if (mainlogin.style.display === "block") {
    mainlogin.style.display = "none";
    signup.style.display = "none";
  }
}
function xcancel2() {
  if (signup.style.display === "block") {
    signup.style.display = "none";
  }
}

function signupback() {
  if (signup.style.display === "block") {
    signup.style.display = "none";
  }
}
var user12, user13;
//  next button click
function nextclick() {
  if (document.querySelector(".fn").value == 0) {
    alert("Please Enter First Name !");
  } else if (document.querySelector(".ln").value == 0) {
    alert("Please Enter Last Name!");
  } else if (document.querySelector(".email").value == 0) {
    alert("Enter your email id !");
  } else if (document.querySelector(".pas1").value == 0) {
    alert("Enter password !");
  } else if (document.querySelector(".pas1").value != 0) {
    mainlogin.style.display = "block";
    signup.style.display = "none";
    signupemailid = document.querySelector(".email").value;
    user12 = document.querySelector(".fn").value;
    user13 = document.querySelector(".fn").value;
  }
}

function butback() {
  mainlogin.style.display = "block";
  signup.style.display = "none";
}

function but2click() {
  if (document.querySelector(".in1").value == 0) {
    alert(" Please Enter email id");
  } else if (document.querySelector(".in2").value == 0) {
    alert("Please Enter password");
  } else if (signupemailid != 0) {
    var loginemailid = document.querySelector(".in1").value;
    if (signupemailid == loginemailid) {
      loginlogoclick2.style.display = "none";
      mainlogin.style.display = "none";
      user_name1.style.display = "flex";
      user_name.innerHTML = user12;
      l1.innerHTML = user13;
    } else {
      alert("Please signup..");
    }
  }
}
function login() {
  if (mainlogin.style.display === "none") {
    mainlogin.style.display = "block";
  } else {
    mainlogin.style.display = "none";
  }
}

function logintosign() {
  {
    if (mainlogin.style.display === "block") {
      mainlogin.style.display = "none";
      signup.style.display = "block";
    }
  }
}
