// Interview-ish Class:
// Everyone should try by their own! After we will go over each solution.
// Important: Please don't copy from somewhere. Be responsible and eager to learn and prepared to real interviews.

// STEPS TO TAKE:
data = [
  {
    id: 1,
    title: 'Mercedes-Benz',
    img: '../img/contBcg-0.jpeg',
  },
  {
    id: 2,
    title: 'Mercedes-Benz Park',
    img: '../img/contBcg-1.jpeg',
  },
  {
    id: 3,
    title: 'BMW',
    img: '../img/contBcg-2.jpeg',
  },
  {
    id: 4,
    title: 'Audi',
    img: '../img/contBcg-3.jpeg',
  },
  {
    id: 5,
    title: 'Dodge',
    img: '../img/contBcg-4.jpeg',
  },
];

// buttons
var rightButton = document.querySelector('#icon-right');
var leftButton = document.querySelector('#icon-left');
var playButton = document.querySelector('#playBtn');
var stopButton = document.querySelector('#stopBtn');
var carousel = document.querySelector('.carousel');

for (var i = 0; i < data.length; i++) {
  var miniImage = document.createElement('img');
  miniImage.src = data[i].img;
  if (i === 0) {
    miniImage.className = 'selected-img';
  }
  carousel.appendChild(miniImage);
}

// other variables
var mainImage = document.querySelector('.img-container');
var carName = document.querySelector('.car-name');
var currentImg = data.splice(0, 1);
carName.innerHTML = currentImg[0].title;
var otherImages = data.slice(0);
var startLabel = document.querySelector('#start');
var stopLabel = document.querySelector('#stop');
var myInterval;

// adding event listeners
rightButton.addEventListener('click', function () {
  startLabel.className = '';
  stopLabel.className = '';
  rotateCarusel('right');
});

leftButton.addEventListener('click', function () {
  startLabel.className = '';
  stopLabel.className = '';
  rotateCarusel('left');
});

playButton.addEventListener('click', startRotate);
stopButton.addEventListener('click', stopRotate);

// functions
function rotateCarusel(direction) {
  var allSmallImages = document.querySelectorAll('.carousel img');
  allSmallImages.forEach((item) => {
    item.className = '';
  });
  if (direction === 'right') {
    currentImg.push(otherImages.shift());
    otherImages.push(currentImg.shift());
  } else if (direction === 'left') {
    currentImg.unshift(otherImages.pop());
    otherImages.unshift(currentImg.pop());
  }
  carName.innerHTML = currentImg[0].title;
  allSmallImages[currentImg[0].id - 1].className = 'selected-img';
  mainImage.style.background = `url(${currentImg[0].img}) center/cover no-repeat`;
}

function startRotate() {
  startLabel.className = 'selected-button';
  stopLabel.className = '';
  myInterval = setInterval(function () {
    rotateCarusel('right');
  }, 1000);
}

function stopRotate() {
  startLabel.className = '';
  stopLabel.className = 'selected-button';
  clearInterval(myInterval);
}
