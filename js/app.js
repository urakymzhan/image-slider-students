let mainContainer = document.querySelector(".container")
let imageTitle = document.querySelector(".car-name");
let imageNode = document.querySelector(".img-container");
let rightBtnNode = document.querySelector("#icon-right");
let leftBtnNode = document.querySelector("#icon-left");
let carouselNode = document.querySelector(".carousel");
let playBtn = document.querySelector("#playBtn");
let stopBtn = document.querySelector("#stopBtn");

let vehicles = ["./img/contBcg-0.jpeg", "./img/contBcg-1.jpeg", "./img/contBcg-2.jpeg","./img/contBcg-4.jpeg"]

let slides = [];
let activeIndex = 0;

drawCarousel();
drawActiveImage(activeIndex);
clickRightBtn(activeIndex)
clickLeftBtn(activeIndex)


// FUNCTION FOR UI THE IMAGES IN THE CAROUSEL AND MAKE THEM CLICKABLE //

function drawCarousel() {
  vehicles.forEach((el, index) => {
    let oneImg = document.createElement("img");
    oneImg.setAttribute("src", el);

    oneImg.onclick = function () {
        drawActiveImage(index);
                   
    };
    carouselNode.appendChild(oneImg);
    
    return;
  });
}

// WHEN CLICK TO SINGLE IMAGE IN THE CAROUSEL, IT IS DISPLAYED AS MAIN IMG //
function drawActiveImage(index) {
  imageNode.style.backgroundImage = `url(${vehicles[index]})`;
  
}



// click to right btn
function clickRightBtn() {
  rightBtnNode.addEventListener("click", function () {
    console.log("right is clicked")
    changeActiveIndexRight(activeIndex++);
    console.log(activeIndex)
   return 
  });
}

// click to left btn
function clickLeftBtn(index) {
    leftBtnNode.addEventListener("click", function () {
        console.log("left is clicked")
        changeActiveIndexLeft(activeIndex--);
        console.log(activeIndex)
       return 
    });
  }

// HELPER FUNCTION TO CHECK THE INDEX
function changeActiveIndexRight(index){
    drawActiveImage(index);
     //   check i if is 0/
    if( activeIndex === 0){
        activeIndex++
    }

    //if lastInd // negative
    if ( activeIndex === -1 ){
        activeIndex = 0
    }
    if(activeIndex > vehicles.length-1){
        activeIndex = 0
    }
    return activeIndex
    
}
function changeActiveIndexLeft(index){
    drawActiveImage(index);
     //   check i if is 0/
    if( activeIndex < 0){
        activeIndex =  vehicles.length-1
    }

    return activeIndex
    
}

playBtn.addEventListener("click", play)

function play(){
   repeat = setInterval(function() {
      changeActiveIndexRight(activeIndex++);
      console.log(activeIndex);

  }, 1600);
}

stopBtn.addEventListener("click", stop)

function stop(){
  clearInterval(repeat);
 
}