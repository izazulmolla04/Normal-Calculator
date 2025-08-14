const display= document.getElementById('display');
// const buttons = document.querySelectorAll('button');

function appendToDisplay(input) {
    display.value += input;
}

// function appendToDisplay(input){
//     display.value -= input;
// }

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }       
}