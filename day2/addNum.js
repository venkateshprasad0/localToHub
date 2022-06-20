function add(){
    var fn = parseInt(document.getElementById("firstNum").value);
    var sn = parseInt(document.getElementById("secondNum").value);
    document.getElementById("result").innerHTML= fn + sn;
}

function sub() {
    var fn = parseInt(document.getElementById("firstNum").value);
    var sn = parseInt(document.getElementById("secondNum").value);
    document.getElementById("result").innerHTML= fn - sn;
}

function div(){
    var fn = parseInt(document.getElementById("firstNum").value);
    var sn = parseInt(document.getElementById("secondNum").value);
    document.getElementById("result").innerHTML= fn/sn;
}
function mul(){
    var fn = parseInt(document.getElementById("firstNum").value);
    var sn = parseInt(document.getElementById("secondNum").value);
    document.getElementById("result").innerHTML= fn*sn;
}