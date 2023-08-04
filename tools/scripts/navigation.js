// slider-nav
// const navigation = document.querySelector("nav");
function widthChange() {
  if (document.body.offsetWidth > 568) {
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
// x //
// page button-links
const home = document.querySelector(".home");
const entertainment = document.querySelector(".entertainment");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
//page links-hidden
const homeLink = document.querySelector(".homeLink");
const entertainmentLink = document.querySelector(".entertainmentLink");
const aboutLink = document.querySelector(".aboutLink");
const contactLink = document.querySelector(".contactLink");
//

// button-link connect
home.onclick = () => {
  curtainLeft.style.right = "50%";
  curtainRight.style.left = "50%";

  setTimeout(() => {
    homeLink.click();
  }, 900);
};
entertainment.onclick = () => {
  window.scrollTo(0, 0);

  setTimeout(() => {
    curtainLeft.style.right = "50%";
    curtainRight.style.left = "50%";
  }, 200);

  setTimeout(() => {
    entertainmentLink.click();
  }, 1000);
};

// Change
const aboutModal = document.querySelector('.modal-about');
const aboutText = document.querySelector('.about-text');
about.onclick = () => {
aboutModal.style.transform = "translateX(0%)";

  // setTimeout(() => {
  //   aboutLink.click();
  // }, 1000);
};
aboutModal.addEventListener("click", (event) => {
  if (!aboutText.contains(event.target)) {
    aboutModal.style.transform = "translateX(100%)";
  }
})


// contact.onclick = () => {
//   curtainLeft.style.right = "50%";
//   curtainRight.style.left = "50%";

//   setTimeout(() => {
//     contactLink.click();
//   }, 1000);
// };
