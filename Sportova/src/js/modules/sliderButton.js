const sliderButton = (slideButtonSelector, options, width, height, rotation= 0) => {
    const slideButton = document.querySelectorAll(slideButtonSelector);
    slideButton.forEach((item, index) => {
        const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        svgElement.setAttribute('width', `${width}`);
        svgElement.setAttribute('height', `${height}`);
        svgElement.setAttribute('transform', `rotate(${rotation})`);
        useElement.setAttribute('href', options.path);
        svgElement.appendChild(useElement);
        item.appendChild(svgElement);
    })
}
export default sliderButton;