const bin = document.querySelector('input[name="bin"]');
const dec = document.querySelector('input[name="dec"]');

bin.addEventListener('keyup', e => {

    const bin = e.target;
    
    const inputValue = bin.value.charAt(bin.value.length - 1);

    if(bin.value.length === 0) return;

    if(bin.value.length > 8) {
        bin.value = bin.value.slice(0, -1);
        return;
    }

    if(isNaN(bin.value)) {
        alert('É necessário inserir um número (0 ou 1)!');
        bin.value = bin.value.slice(0, -1);
        return;
    } else if(inputValue !== '0' && inputValue !== '1') {
        alert('É necessário inserir um número (0 ou 1)!');
        bin.value = bin.value.slice(0, -1);  
        return;      
    }
    
    let result = 0;
    let exponent = 0;

    bin.value.split("").reverse().forEach((v, i, array) => {
        result += (Math.pow(2, exponent)) * parseInt(v);
        ++exponent;
    });

    dec.value = (!dec.value.length === 0) ? result + parseInt(dec.value) : result;
});