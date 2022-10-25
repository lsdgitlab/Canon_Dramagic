import { gsap } from "gsap";
import {CSSRulePlugin}  from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {CSSPlugin} from "gsap/CSSPlugin";
// import {ScrollSmoother} from "gsap/S";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother,  CSSPlugin, CSSRulePlugin);

// create the smooth scroller FIRST!
let smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content:".smooth-content",
  smooth: 2,   // seconds it takes to "catch up" to native scroll position
  effects: true // look for data-speed and data-lag attributes on elements and animate accordingly
});

ScrollTrigger.defaults({
  // Defaults are used by all ScrollTriggers
  toggleActions: "restart pause resume pause", // Scoll effect Forward, Leave, Back, Back Leave
  markers: true // Easaly remove markers for production 
});


const horizontalSections = gsap.utils.toArray('.team-content');
console.log("horizontalSections")
console.log(horizontalSections)



var rule = CSSRulePlugin.getRule("span:after");
console.log("rule")             
console.log(rule)             
// 6 Show Timeline
var tl = gsap.timeline({defaults:{ease:"ShowMo.easeOut"}});
tl.from(".anim1", {y:"100%", rotation: 10, duration: 1.8,stagger: .6, opacity: 0}).to(".anim1", {y:"0%", duration: 1.8, rotation: 0, opacity:1 })
var tl = gsap.timeline({defaults:{ease:"ShowMo.easeOut"}});
tl.from(".anim2", {y:"100%", rotation: 10, duration: 1.8,stagger: .6, opacity: 0}).to(".anim2", {y:"0%", duration: 1.8, rotation: 0, opacity:1 })
