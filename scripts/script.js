// JavaScript Document

var uitgeklapt = document.querySelector(".dpmenu");
var ingeklapt = document.querySelector(".kruis");
var menu = document.querySelector(".menu")

uitgeklapt.addEventListener('click', function (){
  menu.classList.add ("openmenu")
  console.log('hoi')
})

ingeklapt.addEventListener('click', function (){
  menu.classList.remove ("openmenu")
})

