const listArrow = (targetElement, options, rotation = 0) => {
    const target = document.querySelectorAll(targetElement);
    target.forEach((item) => {
        const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        svgElement.setAttribute('width', '10');
        svgElement.setAttribute('height', '10');
        svgElement.setAttribute('transform', `rotate(${rotation})`);
        useElement.setAttribute('href', options.path);
        svgElement.appendChild(useElement);
        item.appendChild(svgElement);
    })
}
export default listArrow;