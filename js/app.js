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
let mainContainer = document.querySelector('.container');
let imageTitle = document.querySelector('.car-name');
let imageNode = document.querySelector('.img-container');
let rightBtnNode = document.querySelector('#icon-right');
let leftBtnNode = document.querySelector('#icon-left');
let carouselNode = document.querySelector('.carousel');
let playBtn = document.querySelector('#playBtn');
let stopBtn = document.querySelector('#stopBtn');

let vehicles = [
  './img/contBcg-0.jpeg',
  './img/contBcg-1.jpeg',
  './img/contBcg-2.jpeg',
  './img/contBcg-4.jpeg',
];

let slides = [];
let activeIndex = 0;

drawCarousel();
drawActiveImage(activeIndex);
// clickRightBtn(activeIndex);
// clickLeftBtn(activeIndex);

// FUNCTION FOR UI THE IMAGES IN THE CAROUSEL AND MAKE THEM CLICKABLE //
function drawCarousel() {
  vehicles.forEach((el, index) => {
    let oneImg = document.createElement('img');
    oneImg.setAttribute('src', el);

    oneImg.onclick = function () {
      drawActiveImage(index);
      // if(oneImg.classList.contains("border")){
      //     oneImg.classList.remove("border")
      // } else {
      //     oneImg.classList.add("border")
      // }
    };
    carouselNode.appendChild(oneImg);

    return; // **ULAN NOTE** you can delete this return. forEach always return undefined
  });
}

// WHEN CLICK TO SINGLE IMAGE IN THE CAROUSEL, IT IS DISPLAYED AS MAIN IMG //
function drawActiveImage(index) {
  imageNode.style.backgroundImage = `url(${vehicles[index]})`;
}

// click to right btn
// function clickRightBtn() {
//   rightBtnNode.addEventListener('click', function () {
//     console.log('right is clicked');
//     changeActiveIndexRight(activeIndex++);
//     console.log(activeIndex);
//     return;
//   });
// }
// **ULAN NOTE** not sure why you need extra function clickRightBtn and changeActiveIndexRight. Too much boilerplate code
rightBtnNode.addEventListener('click', function () {
  activeIndex++;
  if (activeIndex === vehicles.length) {
    activeIndex = 0;
  }
  drawActiveImage(activeIndex);
});

// click to left btn
// function clickLeftBtn(index) {
//   leftBtnNode.addEventListener('click', function () {
//     console.log('left is clicked');
//     changeActiveIndexLeft(activeIndex--);
//     console.log(activeIndex);
//     return;
//   });
// }
// **ULAN NOTE** not sure why you need extra functions clickLeftBtn and changeActiveIndexLeft. Too much boilerplate code
leftBtnNode.addEventListener('click', function () {
  if (activeIndex === 0) {
    activeIndex = vehicles.length;
  }
  activeIndex--;
  drawActiveImage(activeIndex);
});

// HELPER FUNCTION TO CHECK THE INDEX
// function changeActiveIndexRight(index) {
//   drawActiveImage(index);
//   //   check i if is 0/
//   if (activeIndex === 0) {
//     activeIndex++;
//   }

//   //if lastInd // negative
//   if (activeIndex === vehicles.length - 1 || activeIndex === -1) {
//     activeIndex = 0;
//   }
//   if (activeIndex > vehicles.length - 1) {
//     activeIndex = 0;
//   }
//   return activeIndex;
// }
// function changeActiveIndexLeft(index) {
//   drawActiveImage(index);
//   //   check i if is 0/
//   if (activeIndex === 0 || activeIndex === -1) {
//     activeIndex = vehicles.length - 1;
//   }

//   return activeIndex;
// }

// function addBorderToActive(el){
//     el.classList.toggle("border")
// }

// // function drawImg(){
// //     for(let i = vehicles.length; i >=0; i--){
// //         leftBtnNode.addEventListener("click", function(){
// //             imageNode.innerHTML = "";
// //             let prevImg = document.createElement("div");
// //             prevImg.classList.add("img-container");
// //             prevImg.style.backgroundUrl = vehicles[i];

// //             mainContainer.appendChild(prevImg)
// //             return

// //         })
// //     }
// // }
// // drawImg()

// let vehicles = ["./img/contBcg-0.jpeg", "./img/contBcg-1.jpeg", "./img/contBcg-2.jpeg","./img/contBcg-4.jpeg"]
// function getSrc(el){
//     return el.getAttribute("src")
// }

// function slideRight(){
//     leftBtnNode.addEventListener("click", function(){
//         for(let i = 0; i < vehicles.length; i++){
//             if(vehicle[i] === getSrc(imageNode)){
//                 imageNode.setAttribute("src", vehicles[i+1] )
//             }
//         }
//     })
// }
// slideRight()

// let vehicles =[
//     {
//         carId = 1,
//         title: "car 1",
//         carImg: "./img/contBcg-0.jpeg",
// //         active = true
//     },
//     {
//         carId = 2,
//         title: "car 2",
//         carImg: "./img/contBcg-1.jpeg",
//         active = false
//     },
//     {
//         carId = 3,
//         title: "car 3",
//         carImg: "./img/contBcg-2.jpeg",
//         active = false
//     },
//     {
//         carId = 4,
//         title: "car 4",
//         carImg: "./img/contBcg-4.jpeg",
//         active = false
//     }
// // ]
// function drawCarousel(){
//     vehicles.forEach(el => {
//         let oneImg = document.createElement("img");
//         oneImg.classList.add("oneImg");
//         oneImg.setAttribute("src", el);

//         carouselNode.appendChild(oneImg)
//         return
//     })
// }

// drawCarousel();
