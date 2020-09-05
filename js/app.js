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
var counter = 0;
document.getElementById('icon-left').addEventListener('click', function(){
    if(counter>3){
        counter = 0;
    }else{
        counter++;
    }
    var name0 = 'Mercedes Benz'
    var name1 = 'Mercedes Benz'
    var name2 = 'BMW'
    var name3 = 'AUDI'
    var name4 = 'Dodge'
    document.querySelector('.img-container').style.backgroundImage = "url(./img/contBcg-" + counter+".jpeg)"
    document.querySelector('.car-name').innerHTML = "MERS";

})


document.getElementById('icon-right').addEventListener('click', function(){
    if(counter>3){
        counter = 0;
    }else{
        counter++;
    }
    document.querySelector('.img-container').style.backgroundImage = "url(./img/contBcg-" + counter+".jpeg)"
})

document.getElementById('playBtn').addEventListener('click', function(){
    var second = 0;
    setInterval(
        function () {
         // var counter = Math.floor(Math.random()*5);
         second++;
          document.querySelector('.img-container').style.backgroundImage = "url(./img/contBcg-" +second+".jpeg)"
          if(second==4){
              second=-1;
          }
        },3000);
})



