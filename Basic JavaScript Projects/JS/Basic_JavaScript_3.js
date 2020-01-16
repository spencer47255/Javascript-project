function Operations() {
    var addition = 1+1;
    var subtraction = 3-1;
    var division = 4/2;
    var multiplication = 3*3;
    var ASDM = (5*5)/(6-1) + 1;
    var modulus = 100%3;
    var negation = -25;
    var x = 100;
    x++
    var y = 100;
    y--
    var r = Math.random() * 100;
    document.getElementById("Math1").innerHTML ="1 + 1 = " + addition;
    document.getElementById("Math2").innerHTML ="3-1 = " + subtraction;
    document.getElementById("Math3").innerHTML ="4/2 = " + division;
    document.getElementById("Math4").innerHTML ="3*3 = " + multiplication;
    document.getElementById("Math5").innerHTML =" (5*5)/(6-1) + 1 = " + ASDM;
    document.getElementById("Math6").innerHTML ="100%3= " + modulus;
    document.getElementById("Math7").innerHTML =" -25= " + negation * -1;
    document.getElementById("Math8").innerHTML ="x + 1= " + x;
    document.getElementById("Math9").innerHTML ="y-1=" + y;
    document.getElementById("Math10").innerHTML ="This is a random number between 0 and 100.  " + r;
    document.getElementById("Math11").innerHTML ="This random number rounds to " + Math.round(r);


}