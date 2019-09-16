
var idElemento1 = "nome";
var elemento = document.getElementById(idElemento1);

function alterar(){
}

function Alterar2(){

    var conteudo = document.getElementById("conteudo").value
    elemento.innerHTML = conteudo
}

var num1 = Number(document.getElementById("num1").value)
var num2 = Number(document.getElementById("num2").value)

function somar(){
    var num1 = Number(document.getElementById("num1").value)
    var num2 = Number(document.getElementById("num2").value)
    var resultado = num1 + num2
    document.getElementById("resultado").innerHTML = resultado
}

function sub(){
    var num1 = Number(document.getElementById("num1").value)
    var num2 = Number(document.getElementById("num2").value)
    var resultado = num1 - num2
    document.getElementById("resultado").innerHTML = resultado
}

function mult(){
    var num1 = Number(document.getElementById("num1").value)
    var num2 = Number(document.getElementById("num2").value)
    var resultado = num1 * num2
    document.getElementById("resultado").innerHTML = resultado
}

function div(){
    var num1 = Number(document.getElementById("num1").value)
    var num2 = Number(document.getElementById("num2").value)
    var resultado = num1 / num2
    document.getElementById("resultado").innerHTML = resultado
}


