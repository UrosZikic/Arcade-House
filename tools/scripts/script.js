const section = document.querySelector("section");
const slideLink = document.querySelectorAll(".slide");
const dot = document.querySelectorAll(".dot");

// page button-links
const entertainment = document.querySelector(".entertainment");
//page links-hidden
const entertainmentLink = document.querySelector(".entertainmentLink");
//

function slideIn() {
  section.style.transform = "translate(0%)";
  slideLink.forEach((link) => (link.style.transform = "translate(0px, 50px)"));

  setTimeout(() => {
    slideLink.forEach((link) => (link.style.transform = "translate(0px, 0px)"));
    dot.forEach((dot) => (dot.style.opacity = "1"));
    dot.forEach((dot) => (dot.style.opacity = "1"));
  }, 1000);
}

setTimeout(() => {
  slideIn();
}, 500);

//
const timer = document.querySelector(".timer");

const dayMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function timerFunction() {
  const time = new Date();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  let daysLeft = dayMonth[month] - day;
  let hoursLeft = 24 - (hours + 1);
  let minutesLeft = 60 - minutes;
  let secondsLeft = 60 - seconds;
  console.log(hours);
  // setInterval(() => {
  if (secondsLeft > 0) {
    secondsLeft--;
  } else {
    secondsLeft = 59;
    minutesLeft--;
  }
  if (minutesLeft == 0) {
    hoursLeft--;
    minutesLeft = 59;
    secondsLeft = 59;
  }
  if (hoursLeft == 0 && daysLeft !== 0) {
    daysLeft--;
    hoursLeft = 23;
    minutesLeft = 59;
    secondsLeft = 59;
  }
  // }, 1000);

  timer.innerHTML = ` Days ${daysLeft} : Hours ${hoursLeft} : Minutes ${minutesLeft} : Seconds ${secondsLeft}`;
}
setInterval(() => {
  timerFunction();
}, 1000);

//

const header = document.querySelector("header");

setTimeout(() => {
  header.style.transform = "translateY(0px)";
}, 500);

// slider-nav
const navigation = document.querySelector("nav");
const sliderIn = document.querySelector(".slide-in");
const sliderOut = document.querySelector(".slide-out");

function widthChange() {
  if (document.body.offsetWidth > 550) {
    navigation.style.justifyContent = "row";
    navigation.style.position = "unset";
    navigation.style.transform = "translateX(0px)";
    navigation.style.top = "unset";
    navigation.style.left = "unset";
    navigation.style.right = "unset";
    navigation.style.bottom = "unset";
    navigation.style.display = "flex";
    navigation.style.opacity = "1";
    navigation.style.transition = "1s";
  } else {
    navigation.style.justifyContent = "column";
    navigation.style.position = "fixed";
    navigation.style.transform = "translateX(-300px)";
    navigation.style.top = "0";
    navigation.style.left = "0";
    navigation.style.right = "unset";
    navigation.style.bottom = "0";
    navigation.style.transition = "1s";
  }
}

window.addEventListener("resize", widthChange);

sliderIn.onclick = () => {
  navigation.style.display = "flex";
  setTimeout(() => {
    navigation.style.opacity = "1";
    navigation.style.transform = "translateX(0px)";
  }, 50);
};

sliderOut.onclick = () => {
  navigation.style.transform = "translateX(-300px)";
  navigation.style.opacity = "0";

  // setTimeout(() => {
  //   navigation.style.display = "none";
  // }, 4000);
};

// curtain

const curtainLeft = document.querySelector(".curtain-left");
const curtainRight = document.querySelector(".curtain-right");
const infoLink = document.querySelector(".info-link");

// default behavior
window.addEventListener("load", removeCurtain);
// /////////////////////////////////////////////

// button-link connect
entertainment.onclick = () => {
  curtainLeft.style.right = "50%";
  curtainRight.style.left = "50%";

  setTimeout(() => {
    entertainmentLink.click();
  }, 1000);
};

//
function removeCurtain() {
  curtainLeft.style.right = "100%";
  curtainRight.style.left = "100%";
}
window.addEventListener("load", removeCurtain);

infoLink.onclick = () => {
  curtainLeft.style.right = "50%";
  curtainRight.style.left = "50%";

  setTimeout(() => {
    entertainment.click();
  }, 1000);
};

function removeCurtain() {
  curtainLeft.style.right = "100%";
  curtainRight.style.left = "100%";
}
window.addEventListener("load", removeCurtain);
