// Interview-ish Class:
// Everyone should try by their own! After we will go over each solution.
// Important: Please don't copy from somewhere. Be responsible and eager to learn and prepared to real interviews.

// STEPS TO TAKE:

// 1. Make sure manual slider works when we press left or right buttons.

// 2. Make sure you see each car's name on top of the each image. The names should change when you click left or right buttons accordingly.

// 3. Then try to implement automatic slider using start/stop buttons. hint: setInterval, clearInterval

// 4. Optional: You can show all images in small format under main image and store them inside "carousel" div.
// This option is very broad that you can im plement so that when each small images clicked show it on main image div.
// You can even implement border highlight(or any other effect) to specific small image when it is active on main div.

//add array of pictures
var container = document.querySelector('.container');
console.log(container);
var carName = document.querySelectorAll('.car-name');
var imageContainer = document.querySelector('.img-container');
var a = document.querySelectorAll('.btn');
var iconLeft = document.querySelector('#icon-left');
var iconRight = document.querySelector('#icon-right');
var playWrapper = document.querySelector('.play-wrapper');
var stopBtn = document.querySelector('#stopBtn');
var playBtn = document.querySelector('#playBtn');
var carousel = document.querySelector('.carousel');

var images = [
  './img/contBcg-0.jpeg',
  './img/contBcg-1.jpeg',
  './img/contBcg-2.jpeg',
  './img/contBcg-3.jpeg',
  './img/contBcg-4.jpeg',
];

// images.forEach((img) => {
//   var imgTag = document.createElement('img');
//   carousel.appendChild(imgTag);
//   imgTag.setAttribute('src', img);
// });

// images.forEach(img => {
//     var imgTag = document.createElement('img');
//     imageContainer.appendChild(imgTag);
//     imgTag.setAttribute("src", img);

// });

//function iconRightFunc(){
//debugger
// function rightArrow() {
//   var counter1 = 1;
//   iconRight.addEventListener('click', function () {
//     if (counter1 === 5) {
//       counter1 = 0;
//     }
//     imageContainer.style.backgroundImage = `url(${images[counter1]})`;
//     counter1++;
//   });
//   console.log(images[counter1]);
//   return counter1;
// }

//left arrow function

// let counter2 = 1;
// iconLeft.addEventListener('click', function () {
//   if (counter2 < 0) {
//     counter2 = images.length - 1;
//   }
//   imageContainer.style.backgroundImage = `url(${images[counter2]})`;
//   counter2--;
// });

// function imgSlide() {
//   playBtn.addEventListener('click', function () {
//     let counter = 0;

//     imageContainer.style.backgroundImage = `url(${images[counter]})`;
//     if (counter < images.length - 1) {
//       counter++;
//     } else {
//       counter = 0;
//     }

//     setTimeout('imgSlide()', 2000);
//   });
// }

// **ULAN NOTE** Your code is up^
// BELOW IS MY MODIFICATIONS TO YOUR CODE
var counter = 0;

images.forEach((img, index) => {
  var imgTag = document.createElement('img');
  carousel.appendChild(imgTag);
  imgTag.setAttribute('src', img);
  imgTag.addEventListener('click', function () {
    counter = index;
    setBackground(index);
  });
});

iconRight.addEventListener('click', function () {
  counter++;
  if (counter === images.length) {
    counter = 0;
  }
  setBackground(counter);
});

iconLeft.addEventListener('click', function () {
  if (counter === 0) {
    counter = images.length;
  }
  counter--;
  setBackground(counter);
});

var timer;
playBtn.addEventListener('click', function () {
  timer = setInterval(function () {
    counter++;
    if (counter === images.length) {
      counter = 0;
    }
    setBackground(counter);
  }, 1000);
});

stopBtn.addEventListener('click', function () {
  clearInterval(timer);
});

function setBackground(ind) {
  imageContainer.style.backgroundImage = `url(${images[ind]})`;
}

// Here you can add more functionalities...
