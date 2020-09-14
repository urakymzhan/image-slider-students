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
let mainContainer = document.querySelector(".container")
let imageTitle = document.querySelector(".car-name");
let imageNode = document.querySelector(".img-container");
let rightBtnNode = document.querySelector("#icon-right");
let leftBtnNode = document.querySelector("#icon-left");
let carouselNode = document.querySelector(".carousel");
let playBtn = document.querySelector("#playBtn");
let stopBtn = document.querySelector("#stopBtn");
let title = document.querySelector(".name")

let vehicles = ["./img/contBcg-0.jpeg", "./img/contBcg-1.jpeg", "./img/contBcg-2.jpeg","./img/contBcg-4.jpeg"]
let names = ["Mersedes", "Mersedes2", "close look", "BMW"]

let activeIndex = 0;

drawCarousel();
drawActiveImage(activeIndex);


// FUNCTION FOR UI THE IMAGES IN THE CAROUSEL AND MAKE THEM CLICKABLE //

function drawCarousel() {
  vehicles.forEach((el, index) => {
    let oneImg = document.createElement("img");
    oneImg.setAttribute("src", el);

    oneImg.onclick = function () {
      drawActiveImage(index);
    }
      carouselNode.appendChild(oneImg);
    
    return;
  
  })
}

// WHEN CLICK TO SINGLE IMAGE IN THE CAROUSEL, IT IS DISPLAYED AS MAIN IMG //
function drawActiveImage(index) {
  imageNode.style.backgroundImage = `url(${vehicles[index]})`;
  title.innerText = names[index]
  let el = document.querySelector(".carousel").children[index].classList.toggle("active")  
  
}

// click to right btn
  rightBtnNode.addEventListener("click", function () {
    console.log("right is clicked")
    ++activeIndex;
    if( activeIndex === 0){
      activeIndex++
    }
    if(activeIndex > vehicles.length-1){
      activeIndex = 0
    }
  drawActiveImage(activeIndex)
  });

// click to left btn
    leftBtnNode.addEventListener("click", function () {
        console.log("left is clicked")
        --activeIndex
        if( activeIndex < 0){
          activeIndex =  vehicles.length-1
      }
      drawActiveImage(activeIndex) 
    });
  
// AUTOPLAY    
playBtn.addEventListener("click", function(){
  repeat = setInterval(function() {
    ++activeIndex;
    if( activeIndex === 0){
      activeIndex++
    }
  
    if(activeIndex > vehicles.length-1){
      activeIndex = 0
    }
  drawActiveImage(activeIndex) 
    }, 1600)
  })

// STOP AUTOPLAY
stopBtn.addEventListener("click", function(){
  clearInterval(repeat)
})
