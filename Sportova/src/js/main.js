import header from './modules/header';
import sliderButton from "./modules/sliderButton.js";
import listArrow from "./modules/listArrow.js";
window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    const btnFavorite = document.querySelectorAll('.btn-favorite');

    btnFavorite.forEach(function (item) {
        const svgActive = item.querySelector('.btn-favorite__icon-active'),
            svgUnactive = item.querySelector('.btn-favorite__icon-unactive');

        item.addEventListener('mouseover', function () {
            svgActive.style.display = 'none';
            svgUnactive.style.display = 'block';
        });

        item.addEventListener('mouseout', function () {
            svgActive.style.display = 'block';
            svgUnactive.style.display = 'none';
        });
    });
    header('.header__city-link', { path: 'img/svg/sprite.svg#city' }, null, 'before');
    header('.header__phone', { path: 'img/svg/sprite.svg#clock', color: 'cl-blue' },null,  'before');
    sliderButton('.swiper-button-prev', { path: 'img/svg/sprite.svg#slide-arrow' });
    sliderButton('.swiper-button-next', { path: 'img/svg/sprite.svg#slide-arrow' }, 180);
    listArrow('.list-arrow', { path: 'img/svg/sprite.svg#list-arrow' }, 90);
})