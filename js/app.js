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

var bgImgData = [
    {
        id: 1,
        name: 'Bugatti',
        imageUrl: './img/bugatti.png'
    },
    {
        id: 2,
        name: 'Mercedes Benz',
        imageUrl: './img/mercedes.png'
    },
    {
        id: 3,
        name: 'Ferrari',
        imageUrl: './img/ferrari.png'
    },
    {
        id: 4,
        name: 'Audi R8 V10',
        imageUrl: './img/audi.png'
    },
    {
        id: 5,
        name: 'BMW',
        imageUrl: './img/bmw.png'
    },
    {
        id: 6,
        name: 'Lamborghini Aventador',
        imageUrl: './img/lamborghini.png'
    },
    {
        id: 7,
        name: 'Porsche Gt3',
        imageUrl: './img/porsche.png'
    },
    {
        id: 8,
        name: 'Nissan GT-R',
        imageUrl: './img/nissan.png'
    }
]

var imgContainer = document.querySelector('.img-container');
var carouselContent = document.querySelector('.carousel');
var carName = document.querySelector('.car-name');
var btnLeft = document.querySelector('.btn-left')
var btnRight = document.querySelector('.btn-right')
var playButton = document.getElementById('playBtn')
var stopButton = document.getElementById('stopBtn')
var containerDiv = document.querySelector('.container')
var carOverlapName = document.querySelector('.text')

// CREATE A NEW DATA OBJECT OUT OF ARRAY (bgImgData) OF CARS
var keysBgImgData = {};

if(bgImgData.length > 0){
    bgImgData.forEach(function(item){
        keysBgImgData[item.id] = item;
        var imgTab = document.createElement('img');
        imgTab.src = item.imageUrl;
        imgTab.setAttribute('data-id', item.id);
        carouselContent.appendChild(imgTab)
    })
} else {
    carName.textContent = 'There is no car images'
}

// OUTPUT OF keysBgImgData
/* 
keysBgImgData = {1: {…}, 2: {…}, 3: {…}, 4: {…}, 5: {…}, 6: {…}, 7: {…}, 8: {…}};
keysBgImgData = {
        1: {id: 1, name: "Bugatti", imageUrl: "./img/bugatti.png"},
        2: {id: 2, name: "Mercedes Benz", imageUrl: "./img/mercedes.png"},
        3: {id: 3, name: "Ferrari", imageUrl: "./img/ferrari.png"},
        4: {id: 4, name: "Audi R8 V10", imageUrl: "./img/audi.png"},
        5: {id: 5, name: "BMW", imageUrl: "./img/bmw.png"},
        6: {id: 6, name: "Lamborghini Aventador", imageUrl: "./img/lamborghini.png"},
        7: {id: 7, name: "Porsche Gt3", imageUrl: "./img/porsche.png"},
        8: {id: 8, name: "Nissan GT-R", imageUrl: "./img/nissan.png"}
}
*/

var count = 1;
var timerCount = 0, timerClear;

containerDiv.addEventListener('click', function(event){
    
    var imgDataId = event.target.getAttribute('data-id');
    if(imgDataId !== null){
        carName.textContent = keysBgImgData[imgDataId].name
        imgContainer.style.background = "url('"+keysBgImgData[imgDataId].imageUrl+"') center/cover no-repeat"
        carOverlapName.textContent = keysBgImgData[imgDataId].name
    }
    if(event.target.getAttribute('id') === 'icon-right'){
        carName.textContent = keysBgImgData[count].name
        imgContainer.style.background = "url('"+keysBgImgData[count].imageUrl+"') center/cover no-repeat"
        carOverlapName.textContent = keysBgImgData[count].name
        for(var item of carouselContent.children){
            item.classList.remove('active')
        }
        carouselContent.children[count-1].setAttribute('class', 'active')
        count++
        if(count > bgImgData.length){
            count = 1
        }
    }
    if(event.target.getAttribute('id') === 'icon-left'){
        if(count <= 0){
            count = bgImgData.length
        }
        carName.textContent = keysBgImgData[count].name
        imgContainer.style.background = "url('"+keysBgImgData[count].imageUrl+"') center/cover no-repeat"
        carOverlapName.textContent = keysBgImgData[count].name
        for(var item of carouselContent.children){
            item.classList.remove('active')
        }
        carouselContent.children[count-1].setAttribute('class', 'active')
        count--
    }
    
    if(event.target.getAttribute('id') === 'playBtn'){
        timerClear = setInterval(setImgInterval, 1500);
    }
    if(event.target.getAttribute('id') === 'stopBtn'){
        clearInterval(timerClear)
    }

})

function setImgInterval(){
    console.log(timerCount)
    timerCount++;
    carName.textContent = keysBgImgData[timerCount].name
    imgContainer.style.background = "url('"+keysBgImgData[timerCount].imageUrl+"') center/cover no-repeat"
    carOverlapName.textContent = keysBgImgData[timerCount].name
    if(timerCount > bgImgData.length-1){
        timerCount = 0
    }
}