const headerFixed = (headerSelector, headerFixedSelector) => {
    const header = document.querySelector(headerSelector),
        headerFixed = document.querySelector(headerFixedSelector),
        headerHeight = header.offsetHeight;

    const handleScroll = () => {
        if (window.pageYOffset > headerHeight) {
            headerFixed.style.display = 'block';
        } else {
            headerFixed.style.display = 'none';
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
};

export default headerFixed;
