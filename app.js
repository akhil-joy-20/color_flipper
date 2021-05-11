
colors = ["red","green","blue","yellow","black","white","aqua","aliceblue","bisque","antiquewhite"];

const changeBtn = document.querySelector(".btn");
const color = document.querySelector(".color");

changeBtn.addEventListener('click',function(){

   let randomNum = randomGen();
   color.textContent = colors[randomNum];
   document.body.style.backgroundColor=colors[randomNum];
   changeBtn.style.color=colors[randomNum];

});

function randomGen(){

    return Math.floor(Math.random()*colors.length);

}

