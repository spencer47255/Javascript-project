function slice() {
    var sentence = "hello world";
    var section = sentence.slice(0,5);
    document.getElementById("slice1").innerHTML = section.toUpperCase();
}
function number(){
    var x = 10
    document.getElementById("number").innerHTML=x.toString();
}
function big_number() {
    var x = 1235676475437543754
    document.getElementById("big_number").innerHTML=x.toPrecision(10);
}
function fix() {
    var x = 25.2377;
    var y = x.toFixed(2);
    document.getElementById("fix").innerHTML=y;
}
function v() {
    var z = true;
    var x = String.Valueof(z);
    document.getElementById("v").innerHTML=x;
}