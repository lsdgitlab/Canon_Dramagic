import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
// import { LocomotiveScroll } from "LocomotiveScroll";
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
  markers: true,
});
// --- SETUP START ---
// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed",
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.defaults({ scroller: ".smooth-scroll" });
// --- SETUP END ---

// --- RED PANEL ---
gsap.from(".line-1", {
  scrollTrigger: {
    trigger: ".line-1",
    scrub: true,
    start: "top bottom",
    end: "top top",
    onUpdate() {
      console.log("Update");
    },
  },
  scaleX: 0,
  transformOrigin: "left center",
  ease: "none",
});

// --- ORANGE PANEL ---
gsap.from(".line-2", {
  scrollTrigger: {
    trigger: ".orange",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%",
    onUpdate() {
      console.log("Update");
    },
  },
  scaleX: 0,
  transformOrigin: "left center",
  ease: "none",
});

// --- PURPLE/GREEN PANEL ---
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".purple",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%",
    onUpdate() {
      console.log("Update");
    },
  },
});

tl.from(".purple p", { scale: 0.3, rotation: 45, autoAlpha: 0, ease: "power2" })
  .from(
    ".line-3",
    { scaleX: 0, transformOrigin: "left center", ease: "none" },
    0
  )
  .to(".purple", { backgroundColor: "#28a92b" }, 0);

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

// Resources
