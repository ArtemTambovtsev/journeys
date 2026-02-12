 function handle() {
    let inputs = document.querySelectorAll("input");
    let input_values = [];
    for (let i = 0; i < inputs.length; i++) {
        input_values.push(inputs[i].value);
    }
    console.log(input_values);
 }


let button = document.querySelector('button');
button.addEventListener('click', handle);

<button onclick="https://ru.wikipedia.org/wiki/Бали">Переход по ссылке</button>