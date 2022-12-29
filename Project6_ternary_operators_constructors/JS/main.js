function Ride_Function() {   // create new function..
    var Height, Can_ride;    //create variable..
    Height = document.getElementById("Height").value;   // give the variable a value..
    Can_ride = (Height < 52) ? "You are too short":"you are tall enough";   //make the condition for the output..
    document.getElementById("Ride").innerHTML= Can_ride + "to ride.";  // use getElementByld method to the return..
}
function Vehicle(Make, Model, Year, Color) {  //create new function..
    this.Vehicle_Make = Make;  // hold place for vehicle_Make use this..
    this.Vehicle_Model = Model;  // hold place for vehicle_Model use this..
    this.Vehicle_Year = Year;   // hold place for vehicle_Year use this..
    this.Vehicle_Color = Color;   // hold place for vehicle_Color use this..
}
var Jack = new Vehicle("Dodge", "Viper", "2020", "Red");  //create new object..
var Emily = new Vehicle("Jeep", "Trail Hawk", "2019", "White and Black");  //create new object..
var Erick = new Vehicle("Ford", "Paito", "1971", "Mustart");  // create new object..
function myFunction() {    // create new function
    document.getElementById("Keywords_and_constructors").innerHTML= "Erick drives a " + Erick.Vehicle_Color + "-colored " + Erick.Vehicle_Model + " manufactured in" + Erick.Vehicle_Year;  // write the method for the function..
}
function count_Function() {   //create new function..
    document.getElementById("Counting").innerHTML= Count();  // write the method for the function..
    function Count() {  // create new function...
        var Starting_point = 9;   // create variable ...
        function Plus_one() {Starting_point += 1;}   // write Nested functon...
        Plus_one();  // write the method..
        return Starting_point;  // print the return..
    }
}