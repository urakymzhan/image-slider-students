// Interview-ish Class:
// Everyone should try by their own! After we will go over each solution.
// Important: Please don't copy from somewhere. Be responsible and eager to learn and prepared to real interviews.

// STEPS TO TAKE:

// 1. Make sure manual slider works when we press left or right buttons.

// 2. Make sure you see each car's name on top of the each image. The names should change when you click left or right buttons accordingly.

// 3. Then try to implement automatic slider using start/stop buttons. hint: setInterval, clearInterval

// 4. Optional: You can show all images in small format under main image and store them inside "carousel" div.
// This option is very broad that you can im plement so that when each small images clicked show it on main image div.


let activeIndex = 0;

drawCarousel();
drawActiveImage(activeIndex);


// FUNCTION FOR UI THE IMAGES IN THE CAROUSEL AND MAKE THEM CLICKABLE //
function drawCarousel() {
  vehicles.forEach((el, index) => {
    let oneImg = document.createElement('img');
    oneImg.setAttribute('src', el);

    oneImg.onclick = function () {
      drawActiveImage(index);
}

// WHEN CLICK TO SINGLE IMAGE IN THE CAROUSEL, IT IS DISPLAYED AS MAIN IMG //
function drawActiveImage(index) {
  imageNode.style.backgroundImage = `url(${vehicles[index]})`;
}
