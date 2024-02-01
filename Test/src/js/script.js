import buttonIcon from "./modules/buttonIcon.js";
import buttonlang from "./modules/buttonlang.js";
import toggleButtonIcons from "./modules/toggleButtonIcons.js";
import toggleMenu from "./modules/toggleMenu.js";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    buttonIcon('.lang', {path: './img/svg/sprite.svg#lang', position: 'before', width: 15, height: 15});
    buttonIcon('.header__logo', {path: './img/svg/sprite.svg#logo', position: 'before', width: 129, height: 32});
    buttonlang('.lang', {path: './img/svg/sprite.svg#lang', position: 'before', width: 15, height: 15,text: 'EN'});
    buttonIcon('.twitter', {path: './img/svg/sprite.svg#twitter', position: 'before', width: 32, height: 32});
    buttonIcon('.facebook', {path: './img/svg/sprite.svg#facebook', position: 'before', width: 32, height: 32});
    buttonIcon('.instagram', {path: './img/svg/sprite.svg#instagram', position: 'before', width: 32, height: 32});
    buttonIcon('.in', {path: './img/svg/sprite.svg#in', position: 'before', width: 32, height: 32});
    buttonIcon('.youtube', {path: './img/svg/sprite.svg#youtube', position: 'before', width: 32, height: 32});
    buttonIcon('.tiktok', {path: './img/svg/sprite.svg#tiktok', position: 'before', width: 32, height: 32});
    buttonIcon('.telegram', {path: './img/svg/sprite.svg#telegram', position: 'before', width: 32, height: 32});
    buttonIcon('.vk', {path: './img/svg/sprite.svg#vk', position: 'before', width: 32, height: 32});
    const iconParams = [
        {
            width: 30,
            height: 20,
            path: './img/svg/sprite.svg#burger',
        },
        {
            width: 24,
            height: 24,
            path: './img/svg/sprite.svg#close',
        }
    ];

    toggleButtonIcons('.header__btn-menu', iconParams);
    toggleMenu('.header__btn-menu', '.header__menu-mobile');
})