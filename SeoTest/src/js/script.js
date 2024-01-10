"use strict"

addEventListener('load', () => {
    const slides = document.querySelectorAll('.price__slide');
    const dotsContainer = document.querySelector('.price__dots');
    let slideIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
        updateDots();
    }

    function createDots() {
        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('price__dot');
            dot.addEventListener('click', () => {
                slideIndex = i;
                showSlide(slideIndex);
                updateDots();
            });
            dotsContainer.appendChild(dot);
        });
    }

    function updateDots() {
        const dots = document.querySelectorAll('.price__dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === slideIndex);
        });
    }

    createDots();
    showSlide(slideIndex);

    setInterval(() => {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
        updateDots();
    }, 5000);
});
