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

  setTimeout(() => {
    document.querySelector("body").style.overflow = "scroll";
  }, 1500);
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

const gameboy = new Arcade("Virtual Reality", 15, "image-2.jpg");
const pinball = new Arcade("Sports", 10, "image-3.jpg");
const pacman = new Arcade("Consoles", 20, "image-4.jpg");
const donkeyKong = new Arcade("Arcade machines", 30, "image-6.jpg");
const x = new Arcade("Virtual Reality", 15, "image-7.jpg");
const y = new Arcade("Sports", 10, "image-8.jpg");
const z = new Arcade("Consoles", 20, "image-9.jpg");
const donkeyKongs = new Arcade("Arcade machines", 30, "image-5.jpg");
const a = new Arcade("Virtual Reality", 15, "image-10.jpg");
const b = new Arcade("Sports", 10, "image-11.jpg");
const c = new Arcade("Consoles", 20, "image-12.jpg");
const d = new Arcade("Arcade machines", 30, "image-5.jpg");

let products = [
  gameboy,
  pinball,
  pacman,
  donkeyKong,
  x,
  y,
  z,
  donkeyKongs,
  a,
  b,
  c,
  d,
];

let section = document.querySelector("section");

for (let i = 0; i < products.length; i++) {
  let html = `
  <img src="tools/images/${products[i].picture}" class="image-${i}" alt="product-image"/>
`;
  let productContainer = document.createElement("div");
  productContainer.innerHTML = html;

  section.appendChild(productContainer);
}

// article

let article = ` Embrace the golden era of gaming as we proudly showcase a delightful
collection of retro classics like Pac-Man, Donkey Kong, and more.
Immerse yourself in pixelated adventures, relive the thrill of high
scores, and challenge your skills to conquer these beloved legends!`;

let splitArticle = article.split("");

let articleHeading = document.querySelector(".article-heading");

setTimeout(function executeArticle() {
  const intervalArticle = setInterval(add, 50);
  let counter = 0;
  function add() {
    articleHeading.innerHTML += splitArticle[counter];
    counter++;

    if (counter == splitArticle.length) {
      clearInterval(intervalArticle);
    }
  }
}, 2000);

console.log(splitArticle.length);

const header = document.querySelector("header");

setTimeout(() => {
  header.style.transform = "translateY(0px)";
}, 500);

// test
const imageOne = document.querySelector(".image-1");

imageOne.onclick = () => {
  imageOne.style.height = "50%";
};
