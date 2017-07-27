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

  var alturaEhValida = validaAltura(altura);
  var pesoEhValido = validaPeso(peso);

  if(pesoEhValido && alturaEhValida) {
    tdImc.textContent = calculaImc(peso, altura);
  }
  else {
    pacientes[i].classList.add("paciente-invalido");
    if(!pesoEhValido) {
      console.log("Peso inválido");
      tdImc.textContent = "Peso inválido";
    } else {
      console.log("Altura inválida");
      tdImc.textContent = "Altura inválida";
    }
  }
}

function validaPeso(peso) {
  if(peso > 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if(altura > 0 && altura < 3) {
    return true;
  } else {
    return false;
  }
}
