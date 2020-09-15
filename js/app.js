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
// var counter = 0;
// document.getElementById('icon-left').addEventListener('click', function(){
//     if(counter>3){
//         counter = 0;
//     }else{
//         counter++;
//     }
//     var name0 = 'Mercedes Benz'
//     var name1 = 'Mercedes Benz'
//     var name2 = 'BMW'
//     var name3 = 'AUDI'
//     var name4 = 'Dodge'
//     document.querySelector('.img-container').style.backgroundImage = "url(./img/contBcg-" + counter+".jpeg)"
//     document.querySelector('.car-name').innerHTML = "MERS";

// })

// document.getElementById('icon-right').addEventListener('click', function(){
//     if(counter>3){
//         counter = 0;
//     }else{
//         counter++;
//     }
//     document.querySelector('.img-container').style.backgroundImage = "url(./img/contBcg-" + counter+".jpeg)"
// })

// document.getElementById('playBtn').addEventListener('click', function(){
//     var second = 0;
//     setInterval(
//         function () {
//          // var counter = Math.floor(Math.random()*5);
//          second++;
//           document.querySelector('.img-container').style.backgroundImage = "url(./img/contBcg-" +second+".jpeg)"
//           if(second==4){
//               second=-1;
//           }
//         },3000);
// })

// ** ULANS NOTE ** YOU CODE IS UP^
// MY MODIFICATIONS BELOW

var counter = 0;
var carData = [
  { id: 0, name: 'Mercedes Benz', image: 'url(./img/contBcg-0.jpeg)' },
  { id: 1, name: 'Mercedes Benz', image: 'url(./img/contBcg-1.jpeg)' },
  { id: 2, name: 'BMW', image: 'url(./img/contBcg-2.jpeg)' },
  { id: 3, name: 'AUDI', image: 'url(./img/contBcg-3.jpeg)' },
];

var leftIcon = document.getElementById('icon-left');
var rightIcon = document.getElementById('icon-right');
var playBtn = document.getElementById('playBtn');
var stopBtn = document.getElementById('stopBtn');
var imageContainer = document.querySelector('.img-container');
var carNamesDiv = document.querySelector('.car-name');

// set inital name
carNamesDiv.textContent = carData[0].name;

// manual slider
leftIcon.addEventListener('click', function () {
  if (counter === 0) {
    counter = carData.length;
  }
  counter--;
  carData.forEach((data) => {
    if (data.id === counter) {
      imageContainer.style.backgroundImage = data.image;
      carNamesDiv.textContent = data.name;
    }
  });
});

rightIcon.addEventListener('click', function () {
  counter++;
  if (counter === carData.length) {
    counter = 0;
  }
  carData.forEach((data) => {
    if (data.id === counter) {
      imageContainer.style.backgroundImage = data.image;
      carNamesDiv.textContent = data.name;
    }
  });
});

// timers
var timer;
playBtn.addEventListener('click', function () {
  timer = setInterval(function () {
    counter++;
    if (counter === carData.length) {
      counter = 0;
    }
    carData.forEach((data) => {
      if (data.id === counter) {
        imageContainer.style.backgroundImage = data.image;
        carNamesDiv.textContent = data.name;
      }
    });
  }, 1000);
});

stopBtn.addEventListener('click', function () {
  clearInterval(timer);
});
