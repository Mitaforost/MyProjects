const swiperBanner = new Swiper('.banner__wrapper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    autoplay: {
        delay: 3000,
    }
})

const assortmentWrappers = document.querySelectorAll('.assortment__wrapper');
assortmentWrappers.forEach((wrapper, index) => {
    const swiperAssortment = new Swiper(wrapper, {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: document.querySelectorAll('.assortment-next')[index],
            prevEl: document.querySelectorAll('.assortment-prev')[index],
        },
    });
});

