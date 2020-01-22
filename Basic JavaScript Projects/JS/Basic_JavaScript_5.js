function test() {
    var a="001"
    var b="test"
    var c=001
    document.getElementById("isnan").innerHTML=isNaN(b);
    document.getElementById("isnan2").innerHTML=isNaN(a);
    document.getElementById("infin").innerHTML=5E999;
    document.getElementById("bool").innerHTML=(100<1);
    document.getElementById("==false").innerHTML=(6==5);
    document.getElementById("==true").innerHTML=(5==5);
    document.getElementById("===true").innerHTML=(a===a);
    document.getElementById("===false1").innerHTML=(a===b);
    document.getElementById("===false2").innerHTML=(a===c);
    document.getElementById("===false3").innerHTML=(a===002);
    document.getElementById("andT").innerHTML=(4>3 && 12 > 1);
    document.getElementById("andF").innerHTML=(4>3 && 1 > 12);
    document.getElementById("not").innerHTML=!(4>3);
    console.log(2+2)
}
document.write('100'+0);
console.log(5<4);