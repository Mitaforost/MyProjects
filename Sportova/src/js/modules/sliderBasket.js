const sliderBasket = (sliderBasketSelector, priceSaleSelector, priceRegularSelector, stateBlockSelector) => {
    const sliderBasket = document.querySelectorAll(sliderBasketSelector);

    sliderBasket.forEach((item) => {
        item.addEventListener('mouseenter', (event) => {
            const target = event.target;
            const card = target.closest('.assortment__item');

            if (card) {
                const stateBlock = card.querySelector(stateBlockSelector);
                stateBlock.style.display = 'flex';

                const priceSale = card.querySelector(priceSaleSelector);
                const priceRegular = card.querySelector(priceRegularSelector);

                setPriceRegularColor(priceSale, priceRegular);
            }
        });

        item.addEventListener('mouseleave', () => {
            const stateBlocks = document.querySelectorAll(stateBlockSelector);
            stateBlocks.forEach((block) => {
                block.style.display = 'none';
            });
        });
    });

    sliderBasket.forEach((item) => {
        const card = item.closest('.assortment__item');
        if (card) {
            const priceSale = card.querySelector(priceSaleSelector);
            const priceRegular = card.querySelector(priceRegularSelector);
            setPriceRegularColor(priceSale, priceRegular);
        }
    });
};
const setPriceRegularColor = (priceSale, priceRegular) => {
    if (priceSale.textContent.trim() === '') {
        priceRegular.style.color = '#36383F';
    } else {
        priceRegular.style.color = '#F04716';
    }
};

export default sliderBasket;
