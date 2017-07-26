var addPaciente = document.querySelector("#adicionar-paciente");

addPaciente.addEventListener("click", function(event){

  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  // pega info do paciente através do form
  var paciente = obtemPacienteDoForm(form);

  // monta tag tr baseado no paciente extraído do form
  var pacienteTr = montaTr(paciente);

  // acha a tabela no DOM e insere a nova tr nela
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  form.reset();

});

function obtemPacienteDoForm(form) {

  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

function montaTr(paciente) {

  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {

  var td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;

  return td;

}
