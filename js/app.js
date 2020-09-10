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

let cars = [
    "./img/contBcg-0.jpeg",
    "./img/contBcg-1.jpeg",
    "./img/contBcg-2.jpeg",
    "./img/contBcg-3.jpeg",
    "./img/contBcg-4.jpeg",
];

let iconRight = document.querySelector('#icon-right');
let iconLeft = document.querySelector('#icon-left');
let imageContainer = document.querySelector('.img-container');
let sliderCountStart = 1;
let sliderCountEnd = 4;
let playBtn = document.querySelector('#playBtn');
let stopBtn = document.querySelector('#stopBtn');
let carousel = document.querySelector('.carousel');
let carouselItems = carousel.children;

imageContainer.addEventListener('click', (e) => {

    if (e.target.id == 'icon-right') {
        imageContainer.style.background = "url('./img/contBcg-" + sliderCountStart + ".jpeg') center/cover no-repeat";
    
        for(let i = 0; i < cars.length; i++) {
            carouselItems[i].style.border = 'none';
        }
        carouselItems[sliderCountStart].style.border = '5px solid red';

        sliderCountStart++;
        if (sliderCountStart == 5) {
            sliderCountStart = 0;
        }
    } else if (e.target.id == 'icon-left') {
        imageContainer.style.background = "url('./img/contBcg-" + sliderCountEnd + ".jpeg') center/cover no-repeat";

        for(let i = 0; i < cars.length; i++) {
            carouselItems[i].style.border = 'none';
        }
        carouselItems[sliderCountEnd].style.border = '5px solid red';

        sliderCountEnd--;

        if (sliderCountEnd == -1) {
            imageContainer.style.background = "url('./img/contBcg-" + 0 + ".jpeg') center/cover no-repeat";
            sliderCountEnd = 4;
        }
    }
})

function slideRight(index) {
    imageContainer.style.background = "url('./img/contBcg-" + index + ".jpeg') center/cover no-repeat";
    index++;
}

playBtn.addEventListener('click', (e) => {
    
    let count = 0;
    let right = setInterval((slideRight) => {     
        imageContainer.style.background = "url('./img/contBcg-" + count + ".jpeg') center/cover no-repeat"; 
        count++;
        if(count == 5) {
            count = 0;
        }
    }, 1000);

    stopBtn.addEventListener('click', (e) => {
        clearInterval(right)
    })
})

function createCarouselBox(index) {
    let div = document.createElement('div');
    div.style.width = '250px';
    div.style.height = '200px';
    div.style.background = "url('./img/contBcg-" + index + ".jpeg') center/cover no-repeat";
    div.style.display = 'inline-block'
    div.style.margin = '0 10px'
    div.id = index;
    carousel.appendChild(div);
}

for(let i = 0; i < cars.length; i++) {
    createCarouselBox(i);
}

carousel.addEventListener('click', (e) => {
    console.log(e.target.id)
    imageContainer.style.background = "url('./img/contBcg-" + e.target.id + ".jpeg') center/cover no-repeat";

    for(let i = 0; i < cars.length; i++) {
        carouselItems[i].style.border = 'none';
    }
    carouselItems[Number(e.target.id)].style.border = '5px solid red';
})
