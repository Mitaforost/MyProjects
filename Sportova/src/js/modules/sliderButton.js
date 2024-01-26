const sliderButton = (slideButtonSelector, options, rotation= 0) => {
    const slideButton = document.querySelector(slideButtonSelector);
    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    svgElement.setAttribute('width', '10');
    svgElement.setAttribute('height', '18');
    svgElement.setAttribute('transform', `rotate(${rotation})`);
    useElement.setAttribute('href', options.path);
    svgElement.appendChild(useElement);
    slideButton.appendChild(svgElement);

}
export default sliderButton;