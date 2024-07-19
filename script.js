let result = document.getElementById('result');

function append(char) {
    result.value += char;
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (e) {
        result.value = 'Error';
    }
}
