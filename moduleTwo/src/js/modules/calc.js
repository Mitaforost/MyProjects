const calc = (size, material, options, promocode, result) => {
    let sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);
    let sum = 0;
    const calcFunction = () => {
        sum = Math.round(+sizeBlock.value * +materialBlock.value + +optionBlock.value);
        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
        }
        else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        }
        else {
            resultBlock.textContent = sum;
        }
    }
    sizeBlock.addEventListener('change', calcFunction);
    materialBlock.addEventListener('change', calcFunction);
    optionBlock.addEventListener('change', calcFunction);
    promocodeBlock.addEventListener('input', calcFunction);
}
export default calc;