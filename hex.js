document.body.style.backgroundColor = "#000000"

hexValues = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

const changeBtn = document.querySelector(".btn");
const color = document.querySelector(".color");

changeBtn.addEventListener('click',function(){

   let hexValue = "#"; 
   for(var i=0;i<6;i++){
   
       hexValue = hexValue + hexValues[randomGen()];

   } 
   color.textContent = hexValue;
   document.body.style.backgroundColor=hexValue;
   changeBtn.style.color=hexValue;

});

function randomGen(){

    return Math.floor(Math.random()*hexValues.length);

}
