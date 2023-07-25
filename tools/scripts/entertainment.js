// slider-nav
const navigation = document.querySelector("nav");
const sliderIn = document.querySelector(".slide-in");
const sliderOut = document.querySelector(".slide-out");

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

  setTimeout(() => {
    navigation.style.display = "none";
  }, 4000);
};
//

const curtainLeft = document.querySelector(".curtain-left");
const curtainRight = document.querySelector(".curtain-right");
const padLeft = document.querySelector(".pad-left");
const padRight = document.querySelector(".pad-right");

function removeCurtain() {
  setTimeout(() => {
    curtainLeft.style.right = "100%";
    curtainRight.style.left = "100%";

    // padLeft.style.left = "unset";
    // padRight.style.right = "unset";
  }, 1000);
}

window.addEventListener("load", removeCurtain);
