let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let string = '';

// Handle button clicks
buttonsArray.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
        handleInput(event.target.innerHTML);
    });
});

// Handle keyboard input
document.addEventListener('keydown', function (event) {
    let key = event.key;

    if (key === 'Enter') {
        handleInput('=');
    } else if (key === 'Backspace') {
        handleInput('DEL');
    } else if (key === 'Escape') {
        handleInput('AC');
    } else if ('0123456789+-*/%.'.includes(key)) {
        handleInput(key);
    }
});

// Common handler for both click and keypress
function handleInput(input) {
    if (input === 'DEL') {
        string = string.substring(0, string.length - 1);
    } else if (input === 'AC') {
        string = '';
    } else if (input === '=') {
        try {
            string = eval(string);
        } catch {
            string = 'Error';
        }
    } else {
        string += input;
    }

    display.value = string;
}


