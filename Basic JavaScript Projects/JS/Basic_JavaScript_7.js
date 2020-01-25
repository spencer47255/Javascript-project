var x = 10
function Double() {
    var y=10
    document.getElementById("double").innerHTML= x * 2;
}
function Triple() {
    document.getElementById("triple").innerHTML=y * 3;
}

function Date1() {
    var time="PM";
    if (new Date().getHours() < 12) {
        time = "AM";
    document.getElementById("Date").innerHTML=time;
    }
    else {
    document.getElementById("Date").innerHTML=time;
    }  
    
}

function vote() {
    var age = document.getElementById("age").value;
    if (age < 18) {
        document.getElementById("output").innerHTML="You are not old enough to vote";
    }
    else {
    document.getElementById("output").innerHTML="You are old enough to vote";
    }
}
function Time_function(){
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0){
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}