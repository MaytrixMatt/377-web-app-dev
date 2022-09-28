var numbers = [];
function add() {
    var value1 = parseInt(document.getElementById("value1").value);
    var value2 = parseInt(document.getElementById("value2").value);
    var result = value1 + value2;
    document.getElementById("basicresult").innerHTML = result;
}
function subtract() {
    var value1 = parseInt(document.getElementById("value1").value);
    var value2 = parseInt(document.getElementById("value2").value);
    var result = value1 - value2;
    document.getElementById("basicresult").innerHTML = result;
}
function multiply() {
    var value1 = parseInt(document.getElementById("value1").value);
    var value2 = parseInt(document.getElementById("value2").value);
    var result = value1 * value2;
    document.getElementById("basicresult").innerHTML = result;
}
function divide() {
    var value1 = parseInt(document.getElementById("value1").value);
    var value2 = parseInt(document.getElementById("value2").value);
    var result = value1 / value2;
    document.getElementById("basicresult").innerHTML = result;
}
function square() {
    var value1 = parseInt(document.getElementById("value1").value);
    var result = value1 * value1;
    document.getElementById("basicresult").innerHTML = result;
}
function squareRoot() {
    var value1 = parseInt(document.getElementById("value1").value);
    var result = Math.sqrt(value1);
    document.getElementById("basicresult").innerHTML = result;
}
function pythagoreanTheorem() {
    var a = document.getElementById("a").value
    var b = document.getElementById("b").value
    var result = Math.sqrt((a*a) + (b*b));
    document.getElementById("pythresult").innerHTML = result;
}

function mean(){
    var sum = 0;
    for(var i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    var result = sum/numbers.length;
    document.getElementById("algebraicresult").innerHTML = result;
}

function addToList(){
    var number = (parseInt(document.getElementById("value").value));
    document.getElementById("value").value = "";
    numbers.push(number);
    document.getElementById("list").innerHTML += number + ", ";
}

function median(){
    var numssorted = numbers.sort();
    var position = Math.floor(numbers.length / 2)
    var result = numssorted[position];
    document.getElementById("algebraicresult").innerHTML = result;
}

