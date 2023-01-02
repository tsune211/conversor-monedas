//var & obj, Dom initialization
const euro = 20.85;
const dolar = 19.49;
const yen = 0.15;
 

function CalcularDolar(){
   const PesoMexicano = parseInt(document.getElementById("peso").value);
   const salida = document.getElementById("dolar");
   let resultadoDolar = 0;
   resultadoDolar = PesoMexicano / dolar;
   salida.innerText = resultadoDolar.toFixed(2); 
   console.log(resultadoDolar); 
}


function Calcularyen(){
   const PesoMexicano = parseInt(document.getElementById("peso").value);
   const salida = document.getElementById("yen");
   let resultadoYen = 0;
   resultadoYen = PesoMexicano / yen;
   salida.innerText = resultadoYen.toFixed(2);  
}


function Calculareuro(){
   const PesoMexicano = parseInt(document.getElementById("peso").value);
   const salida = document.getElementById("euro");
   let resultadoEuro = 0;
   resultadoEuro = PesoMexicano / euro;
   salida.innerText = resultadoEuro.toFixed(2); 
}


inputform.addEventListener('submit', CalcularDolar);
inputform.addEventListener('submit', Calcularyen);
inputform.addEventListener('submit', Calculareuro);
