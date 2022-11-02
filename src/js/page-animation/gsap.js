import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { CSSPlugin } from "gsap/CSSPlugin";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, CSSPlugin, CSSRulePlugin);

// 6 Show Timeline
var tl = gsap.timeline({ defaults: { ease: "ShowMo.easeOut" } });

tl.from(".anim1 span", {
  y: "-100%",
  duration: 0.2,
  stagger: 0.1,
  // opacity: 0,
}).to(".anim1 span", { 
	y: "0%", 
	duration: 0.2, 
	// opacity: 1 
});
var tl = gsap.timeline({ defaults: { ease: "ShowMo.easeOut" } });
tl.from(".anim2 span", {
  y: "100%",
  rotation: 0,
  duration: 0.2,
  stagger: 0.6,
  opacity: 0,
}).to(".anim2 span", { y: "0%", duration: 0.2, rotation: 0, opacity: 1 });


/* Main navigation */
let panelsContainer = document.querySelector("#panels-container"), fistPage = document.querySelector("#fistPage") ,
  tween;
	console.log(tween)
	document.querySelectorAll(".anchor").forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			let targetElem = document.querySelector(e.target.getAttribute("href")),
				y = targetElem;
				console.log("targetElem=========>>")
				console.log(targetElem)
				console.log(panelsContainer)
				console.log(panelsContainer.isSameNode(targetElem.parentElement))
				console.log(tween);
			if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
				let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
					totalMovement = (panels.length - 1) * targetElem.offsetWidth;
				y = Math.round(
					tween.scrollTrigger.start +
						(targetElem.offsetLeft / totalMovement) * totalScroll
				);
			}
			gsap.to(window, {
				scrollTo: {
					y: y,
					autoKill: false,
				},
				duration: 1,
			});
		});
	});


	const panels = gsap.utils.toArray("#panels-container .panel");
	tween = gsap.to(panels, {
  xPercent: -100 * (panels.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#panels-container",
    pin: true,
    start: "top top",
    scrub: 1,
		// pinSpacing: false,
		// onUpdate: self => console.log("progress:", self),
		// pinSpacing: false,
    snap: {
      snapTo: 1 / (panels.length - 1),
      inertia: false,
      duration: { min: 0.1, max: 0.1 },
    },
    end: () => "+=" + (panelsContainer.offsetWidth - innerWidth),
  },
});

// gsap.to("#intro", {
//   scrollTrigger: {
//     trigger: "#intro",
// 		start: "top top", 
// 		pin: true, 
// 		// pinSpacing: false,
// 		ease: "none",
// 		scrub: true,
// }
// });

gsap.to("#panel-2 #titleSecondText", {
	xPercent: -100,
	x: -innerWidth,
	ease: "none",
	scrollTrigger: {
			pinnedContainer: "#panel-2",
			trigger: "#titleSecondText",
			markers: true,
			start: "bottom bottom",
			end: () => innerWidth,
			scrub: true,
		invalidateOnRefresh: true
	}
});

const pageEffect = gsap.utils.toArray("#fistPage .page-effect");
console.log(pageEffect)
console.log(fistPage.offsetWidth - innerWidth)
gsap.to(pageEffect, {
  scrollTrigger: {
		trigger: "#fistPage",
		start: "top top", 
		// pin: true, 
		// pinSpacing: false,
		duration: 1, 
		ease: "none",
		scrub: true,
		snap:1 / (pageEffect.length - 1 ),
    end: () => "+=" + (fistPage.offsetWidth - innerWidth),
  },
});
gsap.to("#second-fold", {
  scrollTrigger: {
    trigger: "#second-fold",
		start: "top top", 
		pin: true, 
		pinSpacing: false,
		ease: "none",
		scrub: true,
		opacity:0
}
});

$(".next-btn").on('click',function(event){
	event.preventDefault();
	let elemHe = $('.uq-section').outerHeight();
	$('html, body').animate({scrollTop: '+='+elemHe}, 800);

});
// tl.fromTo(".scale-effect",{
//   scale: 0.35,
//   opacity: 0.40,
// },{
//   scale: 0.75,
//   opacity: 1,
//   duration: 1
// })
// .to(".scale-effect",{
//   scale: 1,
//   // opacity: 0.40,
// });
// gsap.to(".scale-effect", {
// 	// opacity:0,
// 	scale:6,
//   scrollTrigger: {
//     trigger: ".scale-effect",
// 		start: "center", 
// 		// pin: true, 
// 		// pinSpacing: true,
// 		ease: "none",
// 		// toggleClass: "scrollimgzoomin",
// 	}	
// })
// gsap.from(".scale-effect",{scale:1,}, {
// 	// opacity:0,
// 	scale:6,
//   scrollTrigger: {
//     trigger: ".scale-effect",
// 		start: "center", 
// 		pin: true, 
// 		pinSpacing: false,
// 		ease: "none",
// }
// });
// let tl = gsap.timeline(); //create the timeline
// tl.from(".class1", {x: 100}) //start sequencing
//   .to(".class2", {y: 100, ease: "elastic"})


// 
	// gsap.utils.toArray(".text-is-best").forEach((panel, i) => {
	// 	// console.log("panel")
	// 	// console.log(panel)
	// 	ScrollTrigger.create({
	// 		trigger: panel,
	// 		start: "top top", 
	// 		pin: true, 
	// 		// pinSpacing: false,
	// 		duration: 1, 
	// 		ease: "none",
	// 		scrub: true,
	// 	});
	// });

	// // gsap.to(".cover-effect", {
	// // 	scrollTrigger: ".cover-effect", 
	// // 	start: "top top", 
	// // 	pin: true, 
	// // 	pinSpacing: false,
	// // 	duration: 1, 
	// // 	ease: "power2",
	// // });
	
	// ScrollTrigger.create({
	// 	snap: 1 /3  // snap whole page to the closest section!
	// });

	// gsap.utils.toArray(".cover-effect").forEach((panel, i) => {
	// 	console.log("panel")
	// 	console.log(panel)
	// 	ScrollTrigger.create({
	// 		trigger: panel,
	// 		start: "top top", 
	// 		pin: true, 
	// 		pinSpacing: false,
	// 		duration: 1, 
	// 		ease: "power2",
	// 		// snap: 1,
	// 		// scrub: true,
	// 	});
	// });
	// gsap.to(".cover-effect", {
	// 	scrollTrigger: ".cover-effect", 
	// 	duration: 2, 
	// 	rotation: 360
	// });
	// gsap.to(".cover-effect", {
	// 	scrollTrigger: ".cover-effect", 
	// 	start: "top top", 
	// 	pin: true, 
	// 	pinSpacing: false,
	// 	duration: 1, 
	// 	ease: "power2",
	// });
	
	// ScrollTrigger.create({
	// 	snap: 1 / 3 // snap whole page to the closest section!
	// });
/* Panels */


gsap.to('.page-progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { 
    trigger: "#page",
    scrub: 0.3 
  }
});

// console.log(panels)