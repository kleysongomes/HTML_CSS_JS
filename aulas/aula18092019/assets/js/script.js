var num1;
var num2;

function pegarValor(){
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
}

function soma(){
    pegarValor();
    var resultado = num1 + num2;
    document.getElementById("resultado").innerHTML = resultado;

}

function subt(){
    pegarValor();
    var resultado = num1 - num2;
    document.getElementById("resultado").innerHTML = resultado;
}

function mult(){
    pegarValor();
    var resultado = num1 * num2;
    document.getElementById("resultado").innerHTML = resultado;
}

function divi(){
    pegarValor();
    var resultado = num1 / num2;
    document.getElementById("resultado").innerHTML = resultado.toFixed(2);

}