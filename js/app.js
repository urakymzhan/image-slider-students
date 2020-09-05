// Interview-ish Class:
// Everyone should try by their own! After we will go over each solution.
// Important: Please don't copy from somewhere. Be responsible and eager to learn and prepared to real interviews.

// STEPS TO TAKE:

// 1. Make sure manual slider works when we press left or right buttons.
var rightBtn = document.querySelector(".btn-right");
var leftBtn = document.querySelector(".btn-left");
var img = document.querySelector(".img-container");

var imgIndex = 0;
rightBtn.addEventListener("click", function () {
  if (imgIndex < 4) {
    // console.log(imgIndex);
    imgIndex++;
    // console.log(imgIndex);
    img.style.backgroundImage = `url("./img/contBcg-${imgIndex}.jpeg")`;
  } else {
    imgIndex = 0;
    img.style.backgroundImage = `url("./img/contBcg-${imgIndex}.jpeg")`;
  }
  console.log(imgIndex);
});

leftBtn.addEventListener("click", function () {
  if (imgIndex > 0) {
    imgIndex--;
    img.style.backgroundImage = `url("./img/contBcg-${imgIndex}.jpeg")`;
  } else {
    imgIndex = 4;
    img.style.backgroundImage = `url("./img/contBcg-${imgIndex}.jpeg")`;
  }
  console.log(imgIndex);
});

// 2. Make sure you see each car's name on top of the each image. The names should change when you click left or right buttons accordingly.

// 3. Then try to implement automatic slider using start/stop buttons. hint: setInterval, clearInterval

// 4. Optional: You can show all images in small format under main image and store them inside "carousel" div.
// This option is very broad that you can im plement so that when each small images clicked show it on main image div.
// You can even implement border highlight(or any other effect) to specific small image when it is active on main div.
