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
var stopBtn = document.querySelector('.stopBtn');
var playBtn = document.querySelector('.playBtn');
var carousel = document.querySelector('.carousel');

var images = ['./img/contBcg-0.jpeg','./img/contBcg-1.jpeg','./img/contBcg-2.jpeg','./img/contBcg-3.jpeg','./img/contBcg-4.jpeg',];




images.forEach(img =>{
    var imgTag = document.createElement('img');
    carousel.appendChild(imgTag);
    imgTag.setAttribute("src", img);

});

// images.forEach(img => {
//     var imgTag = document.createElement('img');
//     imageContainer.appendChild(imgTag);
//     imgTag.setAttribute("src", img);

// });

let counter = 1;
iconRight.addEventListener("click", function(){
    imageContainer.style.background = "url(images[counter])";
})


