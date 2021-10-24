// Smooth scrolling achor tags on Home

"use strict";

const links = document.querySelectorAll(".smoothScroll");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth",
    });
}

// scroll trigger using GSAP

gsap.registerPlugin(ScrollTrigger);

gsap.to(".shape1", {
    duration: 5,
    x: "45vw",
    scrollTrigger: {
        trigger: ".shape1",
        scrub: true,
        markers: true,
        start: "top 75%",
        end: "bottom 25%",
        pin: true,
    },
});
