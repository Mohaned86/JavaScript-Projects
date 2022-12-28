document.write(typeof 5);
document.write("CR" + 7);
document.write(2E210);
document.write(-2E210);
document.write(4>3);
document.write(3>6);
console.log(2 > 2);
document.write(7==7);
document.write(7==3);
X = 3;
Y = 3;
document.write(X===Y);
A = 5;
M = "10";
document.write(A===M);
L = 6;
K = "6";
document.write(L===K);
document.write(X===A);
document.write(5 > 2 && 6 > 3);
document.write(5 > 2 && 3 > 6);
document.write(5 > 2  || 3 > 6);
document.write(5 > 6 || 3 > 6);

function My_Function() {
    document.getElementById("Test").innerHTML=0/0;
}
function Ali() {
    document.getElementById("Test").innerHTML=isNaN('007');
}
function Moa() {
    document.getElementById("Test").innerHTML=isNaN('This is a string');
}
function Not_function() {
    document.getElementById("Not").innerHTML= !(20 > 10);
    document.getElementById("Not").innerHTML= !(5 > 10);
}
