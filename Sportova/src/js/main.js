import headerIcon from './modules/headerIcon.js';
import headerFixed from "./modules/headerFixed.js";
import sliderButton from "./modules/sliderButton.js";
import listArrow from "./modules/listArrow.js";
import itemButton from "./modules/itemButton.js";
import sliderBasket from "./modules/sliderBasket.js";
import swiperButtons from "./modules/swiperButtons.js";
import headerFixedSearch from "./modules/headerFixedSearch.js";
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
    headerIcon('.header__city-link', { path: 'img/svg/sprite.svg#city' }, null, 'before');
    headerIcon('.header__phone', { path: 'img/svg/sprite.svg#clock', color: 'cl-blue' },null,  'before');
    itemButton('.header__logo', { path: 'img/svg/sprite.svg#default-logo' , width: 260, height: 62 });
    itemButton('.search', { path: 'img/svg/sprite.svg#search' , width: 18, height: 18 });
    itemButton('.default-heart', { path: 'img/svg/sprite.svg#default-heart', width: 22, height: 18 });
    itemButton('.default-comprasion', { path: 'img/svg/sprite.svg#default-comprasion', width: 22, height: 19 });
    itemButton('.default-cart', { path: 'img/svg/sprite.svg#default-cart', width: 22, height: 19 , position: 'before'});
    itemButton('.sale', { path: 'img/svg/sprite.svg#sale', width: 10, height: 10 , position: 'before'});
    itemButton('.catalog', { path: 'img/svg/sprite.svg#burger-menu', width: 12, height: 8 , position: 'before'});
    itemButton('.catalog', {path: 'img/svg/sprite.svg#list-arrow', width: 10, height: 7, position: 'after'}, 180);
    itemButton('.default-call', { path: 'img/svg/sprite.svg#default-call', width: 22, height: 19 });
    itemButton('.header__fixed-logo', { path: 'img/svg/sprite.svg#logo' , width: 42, height: 46 });
    headerFixed('.header', '.header__fixed');
    headerFixedSearch('.btn-favorite.search','.header__fixed-search','.header__fixed-buttons-item','.header__fixed-buttons','.header__fixed');
    sliderButton('.swiper-button-prev', { path: 'img/svg/sprite.svg#slide-arrow' },10,18);
    sliderButton('.swiper-button-next', { path: 'img/svg/sprite.svg#slide-arrow' },10,18, 180);
    listArrow('.list-arrow', { path: 'img/svg/sprite.svg#list-arrow' }, 90);
    itemButton('.assortment-content__btn', { path: 'img/svg/sprite.svg#plus-cart',width: 24, height: 19, hoverPath: 'img/svg/sprite.svg#plus-cart-or' });
    itemButton('.assortment-content__state-btn', { path: 'img/svg/sprite.svg#plus-comprasion',width: 24, height: 20, hoverPath: 'img/svg/sprite.svg#plus-comprasion-or' });
    itemButton('.assortment-content__like-btn', { path: 'img/svg/sprite.svg#plus-heart',width: 24, height: 18, hoverPath: 'img/svg/sprite.svg#plus-heart-or' });
    sliderBasket('.assortment-content__btn','.assortment-content__price-sale', '.assortment-content__price','.assortment-content__state');
    swiperButtons();
})