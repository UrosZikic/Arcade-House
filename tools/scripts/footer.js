// footer

const developer = "Uros Zikic";
let footer = document.querySelector("footer");
let footerHtmlContentLeft = `<p>Developed by: ${developer}</p>`;
let footerHtmlContentCenter = ` <div class="newsletter"> <label for="email">Subscribe to our newsletter</label> <div><input type="email" name="email" class="email" required placeholder="enter your email"> <button class="subscribe">Subscribe</button> </div> <p class="sub-message"></p> </div>`;
let footerHtmlContentRight = `<div class="social-media">
<a href="https://www.linkedin.com/in/uro%C5%A1-%C5%BEiki%C4%87-78010819a/" target="_blank"> 
<ion-icon name="logo-linkedin"></ion-icon>
linkedin
</a>
<a href="https://github.com/UrosZikic" target="_blank"> 
<ion-icon name="logo-github"></ion-icon>
github
</a>
</div>`;
let footerContainerLeft = document.createElement("div");
let footerContainerCenter = document.createElement("div");
let footerContainerRight = document.createElement("div");
footerContainerLeft.innerHTML = footerHtmlContentLeft;
footerContainerCenter.innerHTML = footerHtmlContentCenter;
footerContainerRight.innerHTML = footerHtmlContentRight;

footer.appendChild(footerContainerLeft);
footer.appendChild(footerContainerCenter);
footer.appendChild(footerContainerRight);

const email = document.querySelector(".email");
const subButton = document.querySelector(".subscribe");
const subMessage = document.querySelector(".sub-message");

subButton.onclick = () => {
  const emailValue = email.value;

  if (emailValue.includes("@gmail.com")) {
    email.value = " ";
    subMessage.innerHTML = "You have successfully subscribed!";
    subMessage.style.color = "green";
    subMessage.style.opacity = "1";
  } else {
    email.value = emailValue;
    subMessage.innerHTML = "Please enter a valid email address.";
    subMessage.style.color = "red";
    subMessage.style.opacity = "1";
  }
};
