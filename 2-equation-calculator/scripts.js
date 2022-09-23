function add() {
    var value1 = parseInt(document.getElementById("value1").value);
    var value2 = parseInt(document.getElementById("value2").value);
    var result = value1 + value2;
    document.getElementById("result").innerHTML = result;
}
function subtract() {
    var value1 = parseInt(document.getElementById("value1").value);
    var value2 = parseInt(document.getElementById("value2").value);
    var result = value1 - value2;
    document.getElementById("result").innerHTML = result;
}
function multiply() {
    var value1 = parseInt(document.getElementById("value1").value);
    var value2 = parseInt(document.getElementById("value2").value);
    var result = value1 * value2;
    document.getElementById("result").innerHTML = result;
}
function divide() {
    var value1 = parseInt(document.getElementById("value1").value);
    var value2 = parseInt(document.getElementById("value2").value);
    var result = value1 / value2;
    document.getElementById("result").innerHTML = result;
}
function square() {
    var value1 = parseInt(document.getElementById("value1").value);
    var result = value1 * value1;
    document.getElementById("result").innerHTML = result;
}
function squareRoot() {
    var value1 = parseInt(document.getElementById("value1").value);
    var result = Math.sqrt(value1);
    document.getElementById("result").innerHTML = result;
}
function pythagoreanTheorem(a,b) {
    var squaredc = (a*a) + (b*b);
    var result = Math.sqrt(squaredc);
    document.getElementById("result").innerHTML = result;
}

