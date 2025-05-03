let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let string = '';

buttonsArray.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
        handleInput(event.target.innerHTML);
    });
});

document.addEventListener('keydown', function (event) {
    let key = event.key;
    if (key === 'Enter') {
        handleInput('=');
    } else if (key === 'Backspace') {
        handleInput('DEL');
    } else if (key === 'Escape') {
        handleInput('AC');
    } else if ('0123456789+-*/.%'.includes(key)) {
        handleInput(key);
    }
});

function handleInput(input) {
    if (input === 'DEL') {
        string = string.slice(0, -1);
    } else if (input === 'AC') {
        string = '';
    } else if (input === '=') {
        // Handle % like "10%100" as (10 / 100) * 100
        if (string.includes('%')) {
            string = string.replace(/(\d+)%(\d+)/g, '($1/100)*$2');
        }
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
