window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    const btnFavorite = document.querySelectorAll('.btn-favorite');

    btnFavorite.forEach(function(item) {
        const svgActive = item.querySelector('.btn-favorite__icon-active'),
            svgUnactive = item.querySelector('.btn-favorite__icon-unactive');

        item.addEventListener('mouseover', function() {
            svgActive.style.display = 'none';
            svgUnactive.style.display = 'block';
        });

        item.addEventListener('mouseout', function() {
            svgActive.style.display = 'block';
            svgUnactive.style.display = 'none';
        });
    });

})