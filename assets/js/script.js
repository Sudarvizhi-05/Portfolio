const hamburger = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.menu-wrapper');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// click outside to close
document.addEventListener('click', (e) => {

    // if click is inside hamburger OR menu -> ignore
    if (hamburger.contains(e.target) || menu.contains(e.target)) return;

    // else remove
    menu.classList.remove('active');
});

const projectSwiper = new Swiper(".project-slider", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 2,
    navigation: {
    nextEl: ".custom-button-next",
    prevEl: ".custom-button-prev",
    },
    breakpoints: {
    320: { slidesPerView: 2, spaceBetween: 10 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 5 }
    }
});


const accordions = document.querySelectorAll('.accordion-box');

accordions.forEach((item) => {
    item.querySelector('.accordion-head').addEventListener('click', () => {

        // close all first
        accordions.forEach(i => {
            if(i !== item){
                i.classList.remove('active');
            }
        })

        // toggle clicked one
        item.classList.toggle('active');
    })
})