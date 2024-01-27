import header from './modules/header';
import sliderButton from "./modules/sliderButton.js";
import listArrow from "./modules/listArrow.js";
import itemButton from "./modules/itemButton.js";
import sliderBasket from "./modules/sliderBasket.js";
import swiperButtons from "./modules/swiperButtons.js";
window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    const btnFavorite = document.querySelectorAll('.btn-favorite');

    btnFavorite.forEach(function (item) {
        const svgActive = item.querySelector('.btn-favorite__icon-active'),
            svgUnactive = item.querySelector('.btn-favorite__icon-unactive');

        if (svgActive && svgUnactive) {
            item.addEventListener('mouseover', function () {
                svgActive.style.display = 'none';
                svgUnactive.style.display = 'block';
            });

            item.addEventListener('mouseout', function () {
                svgActive.style.display = 'block';
                svgUnactive.style.display = 'none';
            });
        }
    });
    header('.header__city-link', { path: 'img/svg/sprite.svg#city' }, null, 'before');
    header('.header__phone', { path: 'img/svg/sprite.svg#clock', color: 'cl-blue' },null,  'before');
    sliderButton('.swiper-button-prev', { path: 'img/svg/sprite.svg#slide-arrow' },10,18);
    sliderButton('.swiper-button-next', { path: 'img/svg/sprite.svg#slide-arrow' },10,18, 180);
    listArrow('.list-arrow', { path: 'img/svg/sprite.svg#list-arrow' }, 90);
    itemButton('.assortment-content__btn', { path: 'img/svg/sprite.svg#plus-cart',width: 24, height: 19, hoverPath: 'img/svg/sprite.svg#plus-cart-or' });
    itemButton('.assortment-content__state-btn', { path: 'img/svg/sprite.svg#plus-comprasion',width: 24, height: 20, hoverPath: 'img/svg/sprite.svg#plus-comprasion-or' });
    itemButton('.assortment-content__like-btn', { path: 'img/svg/sprite.svg#plus-heart',width: 24, height: 18, hoverPath: 'img/svg/sprite.svg#plus-heart-or' });
    sliderBasket('.assortment-content__btn','.assortment-content__price-sale', '.assortment-content__price','.assortment-content__state');
    swiperButtons();
})