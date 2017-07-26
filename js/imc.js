var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

function calculaImc(peso, altura) {
  return (peso / (altura * altura)).toFixed(3);
}

for (var i = 0; i < pacientes.length; i++) {

  var tdPeso = pacientes[i].querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = pacientes[i].querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = pacientes[i].querySelector(".info-imc");

  var alturaEhValida = true;
  var pesoEhValido = true;

  if(peso <= 0 || peso >= 1000) {
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido";
    pesoEhValido = false;
  }

  if(altura <= 0 || altura >= 3) {
    console.log("Altura inválida");
    tdImc.textContent = "Altura inválida";
    alturaEhValida = false;
  }

  if(!alturaEhValida || !pesoEhValido) {
    pacientes[i].classList.add("paciente-invalido");
  }

  if(alturaEhValida && pesoEhValido) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}
