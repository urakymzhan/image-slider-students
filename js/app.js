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
let data = [
  {
    name: 'Mersedes-Benz',
    src: './img/contBcg-0.jpeg'
  },
  {
    name: 'Mersedes-Benz collection',
    src: './img/contBcg-1.jpeg'
  },
  {
    name: 'BMW',
    src: './img/contBcg-2.jpeg'
  },
  {
    name: 'Audi',
    src: './img/contBcg-3.jpeg'
  },
  {
    name: 'Dodge Charger',
    src: './img/contBcg-4.jpeg'
  }
];

let carousel = document.querySelector('.carousel')
let container = document.querySelector('.img-container')
  container.setAttribute('data-id', 0)
let left = document.querySelector('.btn-left')
let right = document.querySelector('.btn-right')
let carName = document.querySelector('.car-name')

/** displaying imgs on collection UI */  

for (let i = 0; i < data.length; i++) {
  let pic = document.createElement('img')
  pic.className = 'images'
  pic.src = data[i].src
  pic.setAttribute('data-id', i)
  carousel.appendChild(pic)
}
/** ******************** */
let img = document.querySelectorAll('.images')


//picking images from collection

carousel.addEventListener('click', (e)=>{
  if (e.target.nodeName !== 'IMG') {
    return 
  }
  let id = e.target.getAttribute('data-id')
  img.forEach(function(item){
    item.classList.remove('new')  
  })
  e.target.classList.add('new'); 
  container.style.background = 'url(' + e.target.src + ') center/cover no-repeat'
  container.setAttribute('data-id',id)
  carName.innerText = data[id].name
})

/* ******* Right control ************** */

  right.addEventListener('click', (e)=> {
  let curr = container.getAttribute('data-id')
  let next = img[curr].nextSibling

  if (container.getAttribute('data-id') == img.length - 1) {
    container.setAttribute('data-id', 0)
    curr = 0    
    container.style.background = 'url(' + img[curr].src +') center/cover no-repeat'
    carName.innerText = data[img[curr].getAttribute('data-id')].name
  }

  
  img.forEach(function(item){
    item.classList.remove('new')  
  })
    next.classList.add('new')
  

  container.setAttribute('data-id', next.getAttribute('data-id'))
  container.style.background = 'url(' + next.src +') center/cover no-repeat'
  carName.innerText = data[next.getAttribute('data-id')].name
})

/** ******* Left control  **************/


left.addEventListener('click', (e)=> {
  let curr = container.getAttribute('data-id')
  let next = img[curr].previousSibling
  
  if (container.getAttribute('data-id') == 0) {
    container.setAttribute('data-id', img.length-1)
    curr = img.length-1    
    container.style.background = 'url(' + img[curr].src +') center/cover no-repeat'
    console.log(img[curr])
    img[curr].classList.add('new')
    carName.innerText = data[img[curr].getAttribute('data-id')].name
  }


  img.forEach(function(item){
    item.classList.remove('new')  
  })
    next.classList.add('new')
  

  container.setAttribute('data-id', next.getAttribute('data-id'))
  container.style.background = 'url(' + next.src +') center/cover no-repeat'
  carName.innerText = data[next.getAttribute('data-id')].name
})


/** ********************** */
let play = document.querySelector('#playBtn')
let stop = document.querySelector('#stopBtn')
let playWrapper = document.querySelector('.play-wrapper')



playWrapper.addEventListener('click', function(e){
  if (e.target == playWrapper.children[0]) {
    function playBtn(){
      let curr = container.getAttribute('data-id')
      let next = img[curr].nextSibling
      
      
      if (container.getAttribute('data-id') == img.length - 1) {
        container.setAttribute('data-id', 0)
        curr = 0    
        container.style.background = 'url(' + img[curr].src +') center/cover no-repeat'
        carName.innerText = data[img[curr].getAttribute('data-id')].name
      }
      
      
      img.forEach(function(item){
        item.classList.remove('new')  
      })
      next.classList.add('new')
      
      
      container.setAttribute('data-id', next.getAttribute('data-id'))
      container.style.background = 'url(' + next.src +') center/cover no-repeat'
      carName.innerText = data[next.getAttribute('data-id')].name
    }
    setInterval(playBtn, 1000) 

  }















  // if (e.target == playWrapper.children[1]) {
  //   console.log('asfd')
  // }
})