// slider-nav

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
