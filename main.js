import './style.css';

import fjGallery from "flickr-justified-gallery";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
const lightbox = new PhotoSwipeLightbox({
    gallery: "#my-gallery",
    children: "a",
    pswpModule: () => import("photoswipe"),
    padding: { top: 20, bottom: 40, left: 100, right: 100 }
});
lightbox.init();
fjGallery(document.querySelectorAll('.fj-gallery'), {
    itemSelector: '.fj-gallery-item',
    gutter: 10,
    rowHeight: 250,
    onJustify: function() {
        const opa = document.querySelector('.fj-gallery');
        opa.style.opacity = '1';
    },
});


// Import the necessary components
import {
    Tab,
    initTE,
    Modal,
    Dropdown,
    Ripple,
    Select
} from 'tw-elements';
// Initialize the components
initTE({ Modal, Dropdown, Ripple, Select, Tab});

// Swiper Js
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
// home slier blog
let swiper1 = new Swiper(".blog-slider", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 12,
    centeredSlides: true,
    breakpoints: {
        1024: {
            spaceBetween: 20,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});
let swiper2 = new Swiper(".rehle-slider", {
    loop: true,
    slidesPerView: 4,
    width: "60px",
    centeredSlides: true,
    spaceBetween: 16,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
let swiper3 = new Swiper('.swiper-3', {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    loop: true,
    spaceBetween: 15,
});
let swiper4 = new Swiper(".blog-slider-single", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 15,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

const cardElements = document.querySelectorAll(".card");

cardElements.forEach(card => {
    card.addEventListener("click", () => {
        cardElements.forEach(otherCard => otherCard.classList.remove("active"));
        card.classList.add("active");
    });
});


// Tabs
import { Tabs } from 'flowbite';
const tabs = new Tabs();