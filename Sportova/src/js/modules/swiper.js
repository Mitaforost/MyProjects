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

const swiperAssortment = new Swiper('.assortment__wrapper', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
    }
})