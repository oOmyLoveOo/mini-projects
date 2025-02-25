const display = document.getElementById('display');
const reset = document.getElementById('reset');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');

reset.addEventListener('click', () => {
    display.textContent = 0;
});

increment.addEventListener('click', () => {
    display.textContent = parseInt(display.textContent) + 1;
});

decrement.addEventListener('click', () => {
    display.textContent = parseInt(display.textContent) - 1;
});