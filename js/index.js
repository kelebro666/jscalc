const display = document.querySelector('.display');
    let isResultRecoded = false;
    let isOperButtonPressed = false;

document.querySelectorAll('.digits button')
    .forEach(button => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
    if(isResultRecoded && !isOperButtonPressed) clearResults();
    display.value += ev.target.innerText;
}
document.querySelectorAll('.opers button')
    .forEach(button => button.addEventListener('click', opersPressed));

function opersPressed(ev) {
    if (display.value.slice(-1) === '+' ||
     display.value.slice(-1) === '-' || 
     display.value.slice(-1) === '*' || 
     display.value.slice(-1) === '/') {
         display.value = display.value.substring(0, display.value.length - 1) + ev.target.innerText;
    } else {
         display.value += ev.target.innerText;
    }
} 

document.querySelector('.eq').addEventListener('click', calculate);
    function calculate() {
        if (display.value.slice(-1) === '+' || display.value.slice(-1) === '*' || display.value.slice(-1) === '/' || display.value.slice(-1) === '-') display.value = display.value.substring(0, display.value.length - 1);
    (eval(display.value) === Infinity || eval(display.value) === -Infinity) ? display.value = 'You can\'t divide by zero!'
        : display.value = Math.round((eval(display.value) + Number.EPSILON) * 100) / 100;
}

document.querySelector('.clearAll').addEventListener('click', clearResults);
    function clearResults() {
        display.value = '';
    }

document.querySelector('.clear').addEventListener('click', clearOne);
    function clearOne() {
        display.value = display.value.substring(0, display.value.length - 1);
}
    
document.querySelector('.decimal').addEventListener('click', createDecimal);
    function createDecimal(ev) {
        if (display.value.slice(-1) !== '.') display.value += ev.target.innerText;
}