const input1 = document.querySelector('.input-1');
const input2 = document.querySelector('.input-2');
const input3 = document.querySelector('.input-3');
const input4 = document.querySelector('.input-4');
const borderRadius = document.querySelector('.border-radius');
const resultCss = document.querySelector('.result');

const changeBorderRadius = function(e) {;

    borderRadius.style.borderTopLeftRadius = `${input1.value}px`;
    borderRadius.style.borderTopRightRadius = `${input2.value}px`;
    borderRadius.style.borderBottomRightRadius = `${input3.value}px`;
    borderRadius.style.borderBottomLeftRadius = `${input4.value}px`; 

    resultCss.value = `border-radius: ${borderRadius.style.borderRadius}`;
}

input2.addEventListener('change', changeBorderRadius);
input3.addEventListener('change', changeBorderRadius);
input4.addEventListener('change', changeBorderRadius);

input2.addEventListener('keyup', changeBorderRadius);
input3.addEventListener('keyup', changeBorderRadius);
input4.addEventListener('keyup', changeBorderRadius);

input1.addEventListener('change', function(e) {
    input2.value = e.target.value;
    input3.value = e.target.value;
    input4.value = e.target.value;

    borderRadius.style.borderRadius = `${input1.value}px`;
    resultCss.value = `border-radius: ${borderRadius.style.borderRadius}`;
});

input1.addEventListener('keyup', function(e) {
    input2.value = e.target.value;
    input3.value = e.target.value;
    input4.value = e.target.value;

    borderRadius.style.borderRadius = `${input1.value}px`;
    resultCss.value = `border-radius: ${borderRadius.style.borderRadius}`;
});

document.querySelector('button.btn').addEventListener('click', e => {
    resultCss.select();
    document.execCommand('copy');
});