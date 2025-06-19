let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');

let string = input.value;

let array = Array.from(buttons);
array.forEach(button => {
    button.addEventListener('click', (e) => {
        let btnValue = e.target.innerText;
        if (btnValue === '=') {
            string = input.value;

            try {
                if (string == "") {
                    input.value = "0";
                }
                else {

                    string = eval(string);
                    input.value = string;
                    string = "";
                }
            } catch {
                string = "Error";
                input.value = string;
                string = "";
            }

        }
        else if (btnValue == 'AC') {
            string = "";
            input.value = string;
        }
        else if (btnValue == 'DEL') {
            string = string.substring(0, string.length - 1); // took substring from index 0 to length - 1 (not include last char.).
            input.value = string;
        } else {

            let operators = ['+', '-', '*', '/', '%'];

            if (
                operators.includes(btnValue) &&
                operators.includes(string[string.length - 1])
            ) {
                string = string.slice(0, -1) + btnValue;
                input.value = string;
                return;

            }

            string += btnValue;
            input.value = string;
        }
    })
})















