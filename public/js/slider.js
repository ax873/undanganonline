
window.addEventListener("scroll",muncul);

var counter=1;
setInterval(function(){
document.getElementById('radio'+counter).checked=true;
counter++;

if(counter>4){
counter=1;

}
},3000

);



window.addEventListener("scroll",muncul);

function muncul(){
  


let elements=document.querySelectorAll(".elemen");
for (let i=0; i<elements.length; i++){

let tinggilayar=window.innerHeight;
let jarakataselemen=elements[i].getBoundingClientRect().top;

let ukuranscroll=150;

if (jarakataselemen<tinggilayar-ukuranscroll){
elements[i].classList.add("tampil");}
else{
elements[i].classList.remove("tampil");

}

}

}



window.addEventListener("scroll",fu);

function fu(){


let elements=document.querySelectorAll(".ani");
for (let i=0; i<elements.length; i++){

let tinggilayar=window.innerHeight;
let jarakataselemen=elements[i].getBoundingClientRect().top;

let ukuranscroll=50;

if (jarakataselemen<tinggilayar-ukuranscroll){
elements[i].classList.add("tampilkedip");}
else{
elements[i].classList.remove("tampilkedip");

}

}



}




window.addEventListener("scroll",u);

function u(){


let elements=document.querySelectorAll(".putra");
for (let i=0; i<elements.length; i++){

let tinggilayar=window.innerHeight;
let jarakataselemen=elements[i].getBoundingClientRect().top;

let ukuranscroll=50;

if (jarakataselemen<tinggilayar-ukuranscroll){
elements[i].classList.add("tampilkiri");}
else{
elements[i].classList.remove("tampilkiri");

}

}



}



window.addEventListener("scroll",tu);

function tu(){


let elements=document.querySelectorAll(".putri");
for (let i=0; i<elements.length; i++){

let tinggilayar=window.innerHeight;
let jarakataselemen=elements[i].getBoundingClientRect().top;

let ukuranscroll=50;

if (jarakataselemen<tinggilayar-ukuranscroll){
elements[i].classList.add("tampilkanan");}
else{
elements[i].classList.remove("tampilkanan");

}

}



}





window.addEventListener("scroll",tgu);

function tgu(){


let elements=document.querySelectorAll(".namapengantin");
for (let i=0; i<elements.length; i++){

let tinggilayar=window.innerHeight;
let jarakataselemen=elements[i].getBoundingClientRect().top;

let ukuranscroll=50;

if (jarakataselemen<tinggilayar-ukuranscroll){
elements[i].classList.add("tampil");}
else{
elements[i].classList.remove("tampil");

}

}



}







window.addEventListener("scroll",ftgu);

function ftgu(){


let elements=document.querySelectorAll(".tulisanakad");
for (let i=0; i<elements.length; i++){

let tinggilayar=window.innerHeight;
let jarakataselemen=elements[i].getBoundingClientRect().top;

let ukuranscroll=150;

if (jarakataselemen<tinggilayar-ukuranscroll){
elements[i].classList.add("tampil");}
else{
elements[i].classList.remove("tampil");

}

}



}




// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



