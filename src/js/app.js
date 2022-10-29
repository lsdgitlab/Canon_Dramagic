// console.log("webpack")
import $ from "jquery";
import lozad from 'lozad';
import 'owl.carousel';
var popup = require("jquery-popup-overlay");
console.log("popup")
console.log(popup)

$('#popup1').popup({
  closebutton: true
});
// $('#popup1').popup('show');
// let obj = {a:1};
// let obj1 = {a:1};

// console.log("data")
// console.log(obj  === obj1)
if ($('#filmsCarousel').length) {
  let filmsCarousel = $("#filmsCarousel").owlCarousel({
    margin:30,
    items: 3,
    dots:false,
    nav:false,
    // stagePadding: 200,
    // navText: ["<img src='./../img/arrow.png'>","<img src='./../img/arrow.png'>"],
    // autoplayTimeout: 5000,
    // loop:true,
    // smartSpeed: 2000,
  })
};


$(document).ready(function(){
  $('.hamburger-menu').on('click', function() {
      // alert("hi");
      $('.hamburger-menu .bar').toggleClass('animate');
      if($('body').hasClass('open-menu')){
          $('body').removeClass('open-menu');
          // $('.menubar').slideToggle();
          $('.menubar').toggleClass('navOpen');
      }else{
          $('body').toggleClass('open-menu');
          // $('.menubar').slideToggle();
          $('.menubar').toggleClass('navOpen');
      }
  });

  $('.enquire-btn').on('click', function() {
      $('.enquire').slideDown();        
      $('.enquire-btn').hide();
  });

  $('.close-btn').on('click', function() {
      $('.enquire-btn').show(250);
      $('.enquire').slideUp();
  });

});



let selectInput ,allInput;
// console.log(selectInput.length);

function removeInvalid(el){
if(el.parentElement.nextSibling.nextElementSibling.className === 'invalid'){
  el.parentElement.nextSibling.nextElementSibling.style.display = 'none';
  el.classList.remove("error");
  console.log(el)
}
if(el.parentElement.getElementsByClassName('label').length){
  el.parentElement.getElementsByClassName('label')[0].classList.remove("error")
}
}

function submitData(id){
console.log("e")
console.log(id)
let formID = document.getElementById(id)
console.log(formID)
selectInput = formID.getElementsByTagName("select");
allInput = formID.getElementsByClassName("form-control");
for (let i = 0; i < selectInput.length; i++) {
  selectInput[i].addEventListener("change", function() {
    if (selectInput[i].value) {
      return selectInput[i].style.color = "#000000";
    } else {
      return selectInput[i].style.color = "#888888";
    }
  });
}


for (let indivInput = 0; indivInput < allInput.length; indivInput++) {
  allInput[indivInput].addEventListener('keyup', function() {
    removeInvalid(allInput[indivInput])
  });
  allInput[indivInput].addEventListener('change', function() {
    removeInvalid(allInput[indivInput])
  });
}
let valid = true;
for (let checkIndiv = 0; checkIndiv < allInput.length; checkIndiv++) {
  if(allInput[checkIndiv].hasAttribute('required')){
    let input = allInput[checkIndiv]; 
    if (!input.checkValidity() || !input.value){
      console.log("input")
      console.log(input.parentElement.getElementsByClassName('label'))
      if(input.parentElement.getElementsByClassName('label').length){
        input.parentElement.getElementsByClassName('label')[0].classList.add("error")
        // console.log(input.parentElement.getElementsByClassName('label')[0].classList.add("error"))
      }
      // console.log(input.parentElement.getElementsByClassName('label').classList.add("error"))
      valid = false;
      input.classList.add("error");
      input.parentElement.nextSibling.nextElementSibling.style.display = 'block';
      // input.parentElement.nextSibling.nextElementSibling.style.color = 'block';
      // console.log(valid)
    }
  }
}
if(valid) {
   console.log("form valid")
  //  $('#thankYou').popup('show');
}else{
  console.log("form invalid")
}
}

function AllowOnlyNumbers(e) {
e = e ? e : window.event;
var clipboardData = e.clipboardData ? e.clipboardData : window.clipboardData;
var key = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
var str =
  e.type && e.type == "paste"
    ? clipboardData.getData("Text")
    : String.fromCharCode(key);
return /^\d+$/.test(str);
}

import "./page-animation/barba";
import "./page-animation/gsap";
