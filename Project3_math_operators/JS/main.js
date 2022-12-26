function addition_function() {
    var addition = 8 + 4;
    document.getElementById("Math").innerHTML = "8 + 4 = " + addition
}
function subtraction_function() {
    var subtraction = 8 - 4;
    document.getElementById("Math").innerHTML = "8 - 4 = " + subtraction
}
function multiplication() {
    var simple_math = 8 * 4;
    document.getElementById("Math").innerHTML = "8 * 4 = " + simple_math
}
function division() {
    var simple_math = 8 / 4;
    document.getElementById("Math").innerHTML = " 8 / 4 = " + simple_math
}
function more_Math() {
    var simple_math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "(1 + 2) * 10 / 2 -5 =" + simple_math
}
function modulus_operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "25 % 6 =" + simple_Math
}
function negation_operator() {
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}
var X = 5.25;
X--;
X++;
document.write(X);
window.alert(Math.random() * 100);