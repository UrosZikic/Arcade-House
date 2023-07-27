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

// OOP test
class Arcade {
  constructor(product, price, picture) {
    this.product = product;
    this.price = price;
    this.picture = picture;
  }

  set price(price) {
    if (typeof price == "number") {
      this._price = price;
    } else {
      alert(`${price} is not a number`);
    }
  }

  get price() {
    return this._price;
  }

  set product(name) {
    if (typeof name == "string") {
      this._name = name;
    } else {
      alert(`${name} is not a name`);
    }
  }
  get product() {
    return this._name;
  }

  set picture(source) {
    if (typeof source == "string") {
      this._picture = source;
    } else {
      alert(`${this.picture} is not a name`);
    }
  }
  get picture() {
    return this._picture;
  }

  // calcTotalPrice() {
  //   console.log(this.price + 2);
  // }
}

const gameboy = new Arcade("Gameboy", 15, "image-2.jpg");
const pinball = new Arcade("Pinball", 10, "image-3.jpg");
const pacman = new Arcade("Pac-man", 20, "image-4.jpg");
const donkeyKong = new Arcade("Donkey Kong", 30, "image-5.jpg");

let products = [gameboy, pinball, pacman, donkeyKong];

// const nameOne = document.querySelector(".name-one");
// nameOne.innerHTML = products[0].product;

// const nameTwo = document.querySelector(".name-two");
// nameTwo.innerHTML = products[1].product;

let section = document.querySelector("section");

for (let i = 0; i < products.length; i++) {
  let html = `
  <img src="tools/images/${products[i].picture}" alt="product-image"/>
  <p>${products[i].product}</p>
  <p>${products[i].price}$</p>
`;
  let productContainer = document.createElement("div");
  productContainer.innerHTML = html;

  // Append the newly created DOM element to the section
  section.appendChild(productContainer);
}
