// Botão 1
var btn1 = document.getElementById('btnTransf');
btn1.addEventListener("click", transforma)

// Função que transforma o número do input no número inteiro 
//mais próximo
function transforma() {
  var valor = document.getElementById('numFrac').value;
  var result = Math.round(valor);
  document.getElementById('resultado').value = result;
}

var btn2 = document.getElementById('btnCalc')
btn2.addEventListener("click", potencia)

function potencia() {
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  var resultPot = Math.pow(num1, num2);
  document.getElementById('resultadoPot').value = resultPot;
}

var btn3 = document.getElementById('btnCircle');
btn3.addEventListener("click", circle);

function circle() {
  var raio = document.getElementById('raio').value;
  if (raio > 0) {
    var circunf = 2 * Math.PI * raio;
    document.getElementById('resultadoCircunf').value = circunf + "m";
    var areaCircle = Math.pow(raio, 2) * (Math.PI);
    document.getElementById('resultadoArea').value = areaCircle + "m²";
  } else {
    alert("Insira um valor de raio maior que 0");
  }
}

var btn4 = document.getElementById('btnCubo');
btn4.addEventListener("click", cubo);

function cubo() {
  var aresta = document.getElementById('aresta').value;
  if (aresta > 0) {
    var areaB = Math.pow(aresta, 2);
    document.getElementById('resultArB').value = areaB;
    var areaT = areaB * 6
    document.getElementById('resultArT').value = areaT;
    var volume = Math.pow(aresta, 3)
    document.getElementById('volume').value = volume;
  } else {
    alert("Insira um valor de aresta maior que 0")
  }
}