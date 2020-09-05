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
        name: 'Audi',
        imageUrl: './img/audi.png'
    },
    {
        id: 5,
        name: 'BMW',
        imageUrl: './img/bmw.png'
    },
    {
        id: 6,
        name: 'BMW',
        imageUrl: './img/bmw.png'
    },
    {
        id: 7,
        name: 'BMW',
        imageUrl: './img/bmw.png'
    },
    {
        id: 8,
        name: 'BMW',
        imageUrl: './img/bmw.png'
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

var count = 0

containerDiv.addEventListener('click', function(event){
    
    var imgDataId = event.target.getAttribute('data-id');
    if(imgDataId !== null){
        carName.textContent = keysBgImgData[imgDataId].name
        imgContainer.style.background = "url('"+keysBgImgData[imgDataId].imageUrl+"') center/cover no-repeat"
        carOverlapName.textContent = keysBgImgData[imgDataId].name
    }
    if(event.target.getAttribute('id') === 'icon-left'){
            count++
            carName.textContent = keysBgImgData[count].name
            imgContainer.style.background = "url('"+keysBgImgData[count].imageUrl+"') center/cover no-repeat"
            carOverlapName.textContent = keysBgImgData[count].name
            if(count > bgImgData.length-1){
                count = 0
            }
    }
    if(event.target.getAttribute('id') === 'icon-right'){
        console.log('right button is clicked')
    }
    if(event.target.getAttribute('id') === 'playBtn'){
        console.log('play button is clicked');
    }
    if(event.target.getAttribute('id') === 'stopBtn'){
        console.log('stop button is clicked');
    }

})
