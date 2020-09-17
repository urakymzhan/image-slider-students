
<<<<<<< HEAD
let mainContainer = document.querySelector(".container")
let imageTitle = document.querySelector(".car-name");
let imageNode = document.querySelector(".img-container");
let rightBtnNode = document.querySelector("#icon-right");
let leftBtnNode = document.querySelector("#icon-left");
let carouselNode = document.querySelector(".carousel");
let playBtn = document.querySelector("#playBtn");
let stopBtn = document.querySelector("#stopBtn");
let title = document.querySelector(".car-name")

let names = ["Mersedes", "Mersedes2", "close look", "BMW"]

let vehicles = [
  './img/contBcg-0.jpeg',
  './img/contBcg-1.jpeg',
  './img/contBcg-2.jpeg',
  './img/contBcg-4.jpeg',
];
=======
// STEPS TO TAKE:

// 1. Make sure manual slider works when we press left or right buttons.

// 2. Make sure you see each car's name on top of the each image. The names should change when you click left or right buttons accordingly.

// 3. Then try to implement automatic slider using start/stop buttons. hint: setInterval, clearInterval

// 4. Optional: You can show all images in small format under main image and store them inside "carousel" div.
// This option is very broad that you can im plement so that when each small images clicked show it on main image div.

>>>>>>> 64b7bc8c50bfc2ec551b13f957dc237950f2d5ad

let activeIndex = 0;

drawCarousel();
drawActiveImage(activeIndex);
<<<<<<< HEAD
=======

>>>>>>> 64b7bc8c50bfc2ec551b13f957dc237950f2d5ad

// FUNCTION FOR UI THE IMAGES IN THE CAROUSEL AND MAKE THEM CLICKABLE //
function drawCarousel() {
  vehicles.forEach((el, index) => {
    let oneImg = document.createElement('img');
    oneImg.setAttribute('src', el);
    
    oneImg.onclick = function () {
      drawActiveImage(index);
<<<<<<< HEAD
    };
    carouselNode.appendChild(oneImg);
  });
=======
>>>>>>> 64b7bc8c50bfc2ec551b13f957dc237950f2d5ad
}

// WHEN CLICK TO SINGLE IMAGE IN THE CAROUSEL, IT IS DISPLAYED AS MAIN IMG //
function drawActiveImage(index) {
<<<<<<< HEAD

  imageNode.style.backgroundImage = `url(${vehicles[index]})`;
  title.innerText = names[index];
  let imgNodeList = document.querySelector(".carousel").children
  for(let i = 0; i < imgNodeList.length; i++){
    if(i === index){
      imgNodeList[i].classList.add("active")
      console.log(imgNodeList[i])
    } else {
      imgNodeList[i].classList.remove("active")
    }
    
  }
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
  console.log("clicked")

  clearInterval(repeat)
})

=======
  imageNode.style.backgroundImage = `url(${vehicles[index]})`;
}
>>>>>>> 64b7bc8c50bfc2ec551b13f957dc237950f2d5ad
