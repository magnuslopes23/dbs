function calSum(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    var num3 = num1 + num2;

    document.getElementsByClassName("sum").innerHTML = "The Sum is: " + num3;
}