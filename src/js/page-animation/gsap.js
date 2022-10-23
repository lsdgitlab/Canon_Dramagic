import { gsap } from "gsap";
import {CSSRulePlugin}  from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {CSSPlugin} from "gsap/CSSPlugin";
gsap.registerPlugin(ScrollTrigger, CSSPlugin, CSSRulePlugin);


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
