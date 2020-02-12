const display = document.querySelector('.display');

document.querySelectorAll('.digits button')
    .forEach(button => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
    display.value += ev.target.innerText;
}
document.querySelectorAll('.opers button')
    .forEach(button => button.addEventListener('click', opersPressed));

function opersPressed(ev) {
    display.value += ev.target.innerText;
}
document.querySelector('.eq').addEventListener('click', calculate);
    function calculate() {
        display.value = eval(display.value);
    }

// textArea = document.getElementById('display');
//     function onButtonClick(e) {
//         // e - MouseEvent (содержит информацию о клике)
//         if (e.target.innerText === 'c') {
//             // Если нажата кнопка "с", то стирает все из текстового поля
//             textArea.innerText = '0';
//         }


// document.querySelector('.clear').addEventListener('click', clears);
//     function clears() {
//       if "C" = display.value = "0";
//     }

// // document.querySelector('.decimal').addEventListener('.click', decimalAdd)
// //     function decimalAdd()  {
// //   display.textContent = "1" + '.'
// // }

const input = document.querySelector('.display');
        let inputValues = input.innerText;
        let buttonValues = this.innerText; //this will refer to button Values

        //the clear button.....clears the calculator
        if (buttonValues == 'clear') {
          input.innerText = '';
          onlyDecimal = false;
        }