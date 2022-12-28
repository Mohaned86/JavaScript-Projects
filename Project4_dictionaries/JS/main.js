function dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"White",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!",
    };
    delete Animal.Color
    document.getElementById("Dictionary").innerHTML=Animal.Color;
}