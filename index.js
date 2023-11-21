function clearScreen() {
    document.getElementById("display").innerHTML = "";
}

function display(value) {
    document.getElementById("display").innerHTML += value;
}

function clearLastEntry() {
    var currentDisplay = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = currentDisplay.slice(0, -1);
}

function calculate() {
    var expression = document.getElementById("display").innerHTML;
    var result = eval(expression);
    document.getElementById("display").innerHTML = result;
}