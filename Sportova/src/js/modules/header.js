const header = (targetElement, optionsBefore, optionsAfter, order = 'before') => {
    const target = document.querySelector(targetElement);

    if (order === 'before') {
        const divElementBefore = createIconElement(optionsBefore);
        target.prepend(divElementBefore);
    }

    if (order === 'after') {
        const divElementAfter = createIconElement(optionsAfter);
        target.appendChild(divElementAfter);
    }
};

const createIconElement = (options) => {
    const divElement = document.createElement('div');
    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');

    svgElement.setAttribute('width', '12');
    svgElement.setAttribute('height', '12');

    if (options.color) {
        svgElement.classList.add(options.color);
    }

    useElement.setAttribute('href', options.path);
    svgElement.appendChild(useElement);
    divElement.appendChild(svgElement);
    divElement.classList.add('header__icon-block');

    return divElement;
};

export default header;
