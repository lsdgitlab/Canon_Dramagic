// console.log("webpack")
import $ from "jquery";
import lozad from 'lozad';


import "./page-animation/barba";
import "./page-animation/gsap";


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
        $('.enquire-btn').show();
        $('.enquire').slideUp();
    });

});