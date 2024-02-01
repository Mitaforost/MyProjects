const toggleButtonIcons = (selector, iconParams) => {
    const btns = document.querySelectorAll(selector);

    btns.forEach((btn, index) => {
        const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');

        svgElement.setAttribute('width', `${iconParams[index].width}px`);
        svgElement.setAttribute('height', `${iconParams[index].height}px`);
        useElement.setAttribute('href', iconParams[index].path);
        svgElement.appendChild(useElement);
        btn.appendChild(svgElement);

        btn.addEventListener('click', () => {
            index = 1 - index; // Переключение между 0 и 1
            useElement.setAttribute('href', iconParams[index].path);
        });
    });
};

export default toggleButtonIcons;
