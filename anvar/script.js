// Getting all needed elements
const showcaseimgFirst = document.getElementById("showcase-photo-1");
const showcaseimgSecond = document.getElementById("showcase-photo-2");
const showcaseimgThird = document.getElementById("showcase-photo-3");

const btn1 = document.getElementById("photo1");
const btn2 = document.getElementById("photo2");
const btn3 = document.getElementById("photo3");
const body = document.querySelector("body");

// Burger Menu
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

// Loader
const loader = document.querySelector(".loader");

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    body.style.overflow = "auto";
  }, 2000);
}

init();

// Gallery Slider
btn1.addEventListener("click", () => {
  showcaseimgFirst.style.display = "block";
  showcaseimgSecond.style.display = "none";
  showcaseimgThird.style.display = "none";
  btn1.className = "active";
  btn2.classList.remove("active");
  btn3.classList.remove("active");
});
btn2.addEventListener("click", () => {
  showcaseimgFirst.style.display = "none";
  showcaseimgSecond.style.display = "block";
  showcaseimgThird.style.display = "none";
  btn2.className = "active";
  btn1.classList.remove("active");
  btn3.classList.remove("active");
});
btn3.addEventListener("click", () => {
  showcaseimgFirst.style.display = "none";
  showcaseimgSecond.style.display = "none";
  showcaseimgThird.style.display = "block";
  btn3.className = "active";
  btn2.classList.remove("active");
  btn1.classList.remove("active");
});
