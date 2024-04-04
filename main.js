import './style.css';
import 'flowbite';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function animateFrom(elem, direction) {
    direction = direction || 1;
    let x = 0,
        y = direction * 100;
    if(elem.classList.contains("gs_reveal_fromLeft")) {
        x = -100;
        y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 100;
        y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
    });
}
function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
}
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
        hide(elem); // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
            trigger: elem,
            onEnter: function() { animateFrom(elem) },
            onEnterBack: function() { animateFrom(elem, -1) },
            onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
        });
    });

    let header_animate = document.querySelector('.header-animate');
    let hero_animate = document.querySelector('.hero-animate');

    const header = gsap.timeline({
        defaults: { duration: 0.5, ease: "power3.out" }
    });
    header.fromTo(header_animate, { y: -header_animate.offsetHeight }, { y: 0 });

    const hero = gsap.timeline({
        defaults: { duration: 0.9, ease: "power4.inOut" }
    });
    hero.fromTo(hero_animate, { opacity: 0 }, { opacity: 1 });
});




//cards
const cardElements = document.querySelectorAll(".card");
cardElements.forEach(card => {
    card.addEventListener("click", () => {
        cardElements.forEach(otherCard => otherCard.classList.remove("active"));
        card.classList.add("active");
    });
});

//dark mode
const toggleButton = document.getElementById('dark-mode-toggle');
let light = document.getElementById('light');
let dark = document.getElementById('dark');
const content = document.querySelector('html');

toggleButton.addEventListener('click', () => {
    light.classList.toggle('visible');
    light.classList.toggle('hidden');
    dark.classList.toggle('hidden');
    dark.classList.toggle('visible');
    content.classList.toggle('dark');
});