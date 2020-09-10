// Interview-ish Class:
// Everyone should try by their own! After we will go over each solution.
// Important: Please don't copy from somewhere. Be responsible and eager to learn and prepared to real interviews.

// STEPS TO TAKE:

// 1. Make sure manual slider works when we press left or right buttons.
// 2. Make sure you see each car's name on top of the each image. The names should change when you click left or right buttons accordingly.

// 3. Then try to implement automatic slider using start/stop buttons. hint: setInterval, clearInterval
var cars = [
  {
    id: 0,
    title: "Mercedes BENZ AMG",
    model: "C 43",
    info: "AMG-enhanced 3.0L V6 biturbo",
    imgUrl: "./img/contBcg-0.jpeg",
  },
  {
    id: 1,
    title: "Mercedes BENZ AMG",
    model: "E 63 S",
    info: "Handcrafted AMG 4.0L V8 biturbo",
    imgUrl: "./img/contBcg-1.jpeg",
  },
  {
    id: 2,
    title: "BMW",
    model: "M550i",
    info: "4.4-liter BMW M TwinPower Turbo V-8 engine",
    imgUrl: "./img/contBcg-2.jpeg",
  },
  {
    id: 3,
    title: "AUDI",
    model: "TT RS Coupe Trims",
    info: "2.5-liter five-cylinder",
    imgUrl: "./img/contBcg-3.jpeg",
  },
  {
    id: 4,
    title: "Dodge Challenger",
    model: "SRT Hellcat",
    info: "6.2-liter v8 OHV",
    imgUrl: "./img/contBcg-4.jpeg",
  },
];

// GET DOM ELEMENTS
var rightBtn = document.querySelector(".btn-right");
var leftBtn = document.querySelector(".btn-left");
var img = document.querySelector(".img-container");
var title = document.querySelector("#car-name");
var model = document.querySelector("#car-model");
var info = document.querySelector("#car-info");
var playBtn = document.querySelector("#playBtn");
var stopBtn = document.querySelector("#stopBtn");
var carousel = document.querySelector(".carousel");

// RENDER CAROUSEL IMAGES
if (cars.length > 0) {
  cars.forEach(function (car) {
    var img = document.createElement("img");
    img.setAttribute("data-id", car.id);
    img.classList.add("carousel-img");
    img.src = car.imgUrl;
    carousel.appendChild(img);
  });
}

var carouselImg = document.querySelectorAll(".carousel-img");

// HELPER FUNCTIONS
function slideShow(data, index) {
  data.forEach(function (car, i) {
    if (index === i) {
      img.style.backgroundImage = `url(${car.imgUrl})`; //"url(./img/contBcg-4.jpeg)"
      title.textContent = car.title;
      model.textContent = car.model;
      info.textContent = car.info;
      carouselActiveImg(index);
    }
  });
}

function prevSlide() {
  if (imgIndex > 0) {
    imgIndex--;
    slideShow(cars, imgIndex);
  } else {
    imgIndex = 4;
    slideShow(cars, imgIndex);
  }
}

function nextSlide() {
  if (imgIndex < 4) {
    imgIndex++;
    slideShow(cars, imgIndex);
  } else {
    imgIndex = 0;
    slideShow(cars, imgIndex);
  }
}

var playSlide = null;
function playSlideShow() {
  console.log(typeof playBtn.innerHTML);
  if (playBtn.innerHTML.includes("fa-play")) {
    playSlide = setInterval(nextSlide, 2000);
    playBtn.innerHTML = "<i class='fas fa-pause'></i>";
  }
}

function stopSlideShow() {
  clearInterval(playSlide);
  playBtn.innerHTML = "<i class='fas fa-play'></i>";
}

function changeImg(e) {
  cars.forEach(function (car) {
    if (e.target.getAttribute("data-id") == car.id) {
      slideShow(cars, car.id);
    }
  });
}

function carouselActiveImg(index) {
  carouselImg.forEach(function (img) {
    img.classList.remove("active");
    if (index == img.getAttribute("data-id")) {
      img.classList.add("active");
    }
  });
}

// FIRST SLIDE BY DEFAULT
var imgIndex = 0;
slideShow(cars, imgIndex);

// EVENT LISTENERS
rightBtn.addEventListener("click", nextSlide);

leftBtn.addEventListener("click", prevSlide);

playBtn.addEventListener("click", playSlideShow);

stopBtn.addEventListener("click", stopSlideShow);

carousel.addEventListener("click", changeImg);

// 4. Optional: You can show all images in small format under main image and store them inside "carousel" div.
// This option is very broad that you can im plement so that when each small images clicked show it on main image div.
// You can even implement border highlight(or any other effect) to specific small image when it is active on main div.
