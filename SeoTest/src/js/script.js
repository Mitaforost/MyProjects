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

    const mobileBtn = document.querySelector('.header__btn'),
        fade = document.querySelector('.fade'),
        headerMobile = document.querySelector('.header__mobile'),
        crossIcon = document.querySelector('.header__close'),
        spanIcons = document.querySelectorAll('.header__line');

    mobileBtn.addEventListener('click', toggleMenu);
    fade.addEventListener('click', closeMenu);

    function toggleMenu() {
        headerMobile.classList.toggle('active');

        if (headerMobile.classList.contains('active')) {
            showMenu();
        } else {
            hideMenu();
        }
    }

    function showMenu() {
        crossIcon.style.display = 'block';
        spanIcons.forEach(span => span.style.display = 'none');
        headerMobile.style.left = '0';
        setFadeStyles('block', '0.6');
    }

    function hideMenu() {
        crossIcon.style.display = 'none';
        spanIcons.forEach(span => span.style.display = 'block');
        headerMobile.style.left = `-${headerMobile.offsetWidth}px`;
        setFadeStyles('none', '0');
    }

    function setFadeStyles(display, opacity) {
        fade.style.display = display;
        fade.style.opacity = opacity;
    }

    function closeMenu() {
        headerMobile.classList.remove('active');
        hideMenu();
    }

});
