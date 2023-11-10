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

    bold();
    check.addEventListener("change", bold);

    let input = document.querySelector('.price-slider__input'),
        output = document.querySelector('.price-slider__output');

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

    input.addEventListener("input", function () {
        outputUpdate(this.value);
    });

    for (let e of document.querySelectorAll('.slider-progress')) {
        e.style.setProperty('--value', e.value);
        e.style.setProperty('--min', e.min == '' ? '0' : e.min);
        e.style.setProperty('--max', e.max == '' ? '100' : e.max);
        e.addEventListener('input', () => e.style.setProperty('--value', e.value));
    }
});










