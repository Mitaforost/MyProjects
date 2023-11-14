"use strict";

window.addEventListener("load", function () {
    let moth = document.querySelector('.price-switch__moth'),
        quart = document.querySelector('.price-switch__quart'),
        check = document.querySelector('.price-switch__input');

    function bold() {
        if (check.checked) {
            moth.style.fontWeight = "400";
            quart.style.fontWeight = "500";
        } else {
            moth.style.fontWeight = "500";
            quart.style.fontWeight = "400";
        }
    }

    check.addEventListener("change", bold);

    let boxes = document.querySelectorAll('.price__box'),
        input = document.querySelector('.price-slider__input'),
        output = document.querySelector('.price-slider__output'),
        before = document.querySelector('.price-slider__output::before');

    boxes.forEach(box => {
        box.addEventListener('mouseover', function () {
            let title = this.querySelector('.price-box__title');
            let titleText = title.innerText;
            let value = parseInt(titleText.replace(/\D/g, ''), 10);

            input.value = value;
            output.innerText = `$${value}`;

            // Позиционируем элемент before
            positionBeforeElement(value);
        });
    });

    function outputUpdate(slideValue) {
        output.textContent = `$${slideValue}`;
        let min = parseFloat(input.min),
            max = parseFloat(input.max),
            range = max - min,
            pixelValue = (slideValue - min) / range * input.offsetWidth,
            step = 9,
            adjustment = Math.floor(slideValue / step) * 2;
        console.log(min);
        if (adjustment < 8) {
            output.style.left = `${pixelValue - 24 - adjustment}px`;
        } else {
            output.style.left = `${pixelValue - 24 - adjustment / 2}px`;
        }
    }

    function positionBeforeElement(slideValue) {
        let min = parseFloat(input.min),
            max = parseFloat(input.max),
            range = max - min,
            pixelValue = (slideValue - min) / range * input.offsetWidth,
            step = 9,
            adjustment = Math.floor(slideValue / step) * 2;
        if (before) {
            before.style.left = `${pixelValue - adjustment / 2}px`;
        } else {
            console.error("before is null");
        }
        if (adjustment < 8) {
            output.style.left = `${pixelValue - 24 - adjustment}px`;
            before.style.left = `${pixelValue - adjustment}px`;
        } else {
            output.style.left = `${pixelValue - 24 - adjustment / 2}px`;
            before.style.left = `${pixelValue - adjustment / 2}px`;
        }
    }

    input.addEventListener("input", function () {
        outputUpdate(this.value);
    });


    for (let e of document.querySelectorAll('.slider-progress')) {
        e.style.setProperty('--value', e.value);
        e.style.setProperty('--min', e.min == '' ? '0' : e.min);
        e.style.setProperty('--max', e.max == '' ? '100' : e.max);
        e.addEventListener('input', () => e.style.setProperty('--value', e.value));
    }

    let burger = document.querySelector('.header__menu'),
        mobile = document.querySelector('.header__mobile'),
        mobilBtn = document.querySelector('.header-mobile__close'),
        fade = document.querySelector('.fade');
    burger.addEventListener('click', function () {
        mobile.classList.add('header-mobile__active');
        // mobile.style.display = 'block';
        mobile.style.transform = 'translateX(0)';
        fade.style.display = 'block';
    })
    mobilBtn.addEventListener('click', function () {
        mobile.classList.remove('header-mobile__active');
        mobile.style.transform = 'translateX(-315px)';
        // mobile.style.display = 'none';
        fade.style.display = 'none';
    })
});
