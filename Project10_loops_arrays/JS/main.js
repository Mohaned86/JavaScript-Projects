function Call_Loop() {   // create new function...
    var Digit = "";  // create new variable...
    var X = 1;   // create new variable...
    while (X < 11) {    // use while loop for the function....
        Digit += "<br>" + X;
        X++;  // keep count...
    }
    document.getElementById("Loop").innerHTML = Digit;  // print the result...
}
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumet", "Flute"];  // create new variable...
var Content = "";  // create new variable...
function for_Loop() {  // create new function...
    for (Y = 0; Y < Instruments.length; Y++) {  // use for loop ...
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;  // print the return..
}
function array_Function() {  // create new function...
    let Cat_Picture = [];  // create new variable use let...
    Cat_Picture[0] = "sleeping";  // give index a value ...
    Cat_Picture[1] = "playing";   //give index a value ...
    Cat_Picture[2] = "eating";  // give index a value ...
    Cat_Picture[3] = "purring";  // give index a value ...
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[3] + ".";  // print the return
}
function constant_function() {  // create new function..
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};  // create constant and give each const a value...
    Musical_Instrument.color = "blue";  // change the value of a constant...
    Musical_Instrument.price = "$900";  // change a vlue of constant...
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;  // print the return....
}
let car = {   // create an object using let...
    make: "Dodge ",  // give a constant a value...
    model: "Viper ",  // give a constant a value...
    year: "2021 ",   // give a constant a value...
    color: "red ",   // give a constant a value...
    description : function() {  // create new function...
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();  // print the return...