import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {CSSRulePlugin}  from "gsap/CSSRulePlugin";
import {CSSPlugin} from "gsap/CSSPlugin";
// import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, CSSPlugin, CSSRulePlugin);
var rule = CSSRulePlugin.getRule("span:after");
console.log("rule")             
console.log(rule)             
// 6 Show Timeline
var tl = gsap.timeline({defaults:{ease:"ShowMo.easeOut"}});
tl.from(".anim1", {y:"100%", rotation: 10, duration: 1.8,stagger: .6, opacity: 0}).to(".anim1", {y:"0%", duration: 1.8, rotation: 0, opacity:1 })
var tl = gsap.timeline({defaults:{ease:"ShowMo.easeOut"}});
tl.from(".anim2", {y:"100%", rotation: 10, duration: 1.8,stagger: .6, opacity: 0}).to(".anim2", {y:"0%", duration: 1.8, rotation: 0, opacity:1 })

/* Main navigation */
let panelsSection = document.querySelector("#panels"),
	panelsContainer = document.querySelector("#panels-container"),
	tween;
document.querySelectorAll(".anchor").forEach(anchor => {
	anchor.addEventListener("click", function(e) {
		e.preventDefault();
		let targetElem = document.querySelector(e.target.getAttribute("href")),
			y = targetElem;
		if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
			let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
				totalMovement = (panels.length - 1) * targetElem.offsetWidth;
			y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
		}
		gsap.to(window, {
			scrollTo: {
				y: y,
				autoKill: false
			},
			duration: 1
		});
	});
});

/* Panels */
const panels = gsap.utils.toArray("#panels-container .panel");
tween = gsap.to(panels, {
	xPercent: -100 * ( panels.length - 1 ),
	ease: "none",
	scrollTrigger: {
		trigger: "#panels-container",
		pin: true,
		start: "top top",
		scrub: 1,
		snap: {
			snapTo: 1 / (panels.length - 1),
			inertia: false,
			duration: {min: 0.1, max: 0.1}
		},
		end: () =>  "+=" + (panelsContainer.offsetWidth - innerWidth)
	}
});

// const childSplit = new SplitText("h1", {
//   type: "lines",
//   linesClass: "split-child"
// });
// const parentSplit = new SplitText("h1", {
//   // type: "lines",
//   linesClass: "split-parent"
// });

// gsap.from(childSplit.lines, {
//   duration: 1.5,
//   yPercent: 100,
//   ease: "power4",
//   stagger: 0.1
// });