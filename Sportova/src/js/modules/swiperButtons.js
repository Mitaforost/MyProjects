const swiperButtons = () => {
    const swiperButtonsContainer = document.querySelectorAll('.swiper-buttons-container');
    swiperButtonsContainer.forEach((item) => {
        const container = document.querySelector('.container');
        const containerWidth = container.offsetWidth;
        const containerPadding = parseFloat(getComputedStyle(container).paddingLeft) + parseFloat(getComputedStyle(container).paddingRight);
        item.style.width = `${containerWidth - containerPadding}px`;
    })
}
export default swiperButtons;
