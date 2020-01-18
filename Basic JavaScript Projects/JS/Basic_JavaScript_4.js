function my_Dictionary() {
    var animal = {
        species:"Chicken",
        Color:"White",
        Age:2,
        Sound:"Cluck"
    };
    delete animal.Sound;
    document.getElementById("Dictionary").innerHTML=animal.Age;
}