
function Call_Loop() {
    var x = 10;
    while (x != 1) {
        x = x - 1;
        document.getElementById("Loop").innerHTML= x;
    }
}
function length() {
    x = "Hello";
    z = x.length;
    document.getElementById("length").innerHTML=z;
}

var Instruments= ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content="";
function for_Loop() {
    for(x = 0; x < Instruments.length; x++) {
    content += Instruments[x] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = content;
}

function array_function() {
    var bird = [];
    bird[0] = "sleeping";
    bird[1] = "flying";
    bird[2] = "eating";
    bird[3] = "hunting";
    bird[4] = "singing";
    document.getElementById("Array").innerHTML = "The bird is " + bird[1] + ".";
}
function constant_function() {
    const bird = {type:"chicken", color:"black", age:"4.3 years"};
    bird.color="brown";
    bird.price ="$25";
    document.getElementById("constant").innerHTML = "The cost of this " +bird.color + " " + bird.type + " is " + bird.price;
}

function letf() {
    var x = 10;
    {
        let x = 11
        document.getElementById("let").innerHTML=x;
        document.getElementById("returnf").innerHTML = returnf();
    }
}

function returnf() {
    return "hello world";
}

function loop_c() {
var i = 20;
var p = "";
    while(i != 0){
        if(i === 3) {break;}
        p = p + " this number is " + i + "<br> ";
        i = i - 1;
    }
    document.getElementById("loop_c").innerHTML=p + "<br>";
}

function loop_b() {
    var i = 15;
    var p = "";
        while(i != 0){
            i = i - 1;
            if(i === 10) {continue;}
            p = p + " this number is " + i + "<br> ";
        }
        document.getElementById("loop_b").innerHTML=p + "<br>";
    }

