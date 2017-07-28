var botaoImportar = document.querySelector("#importar-pacientes");

botaoImportar.addEventListener("click", function(event) {
  console.log("buscando...");

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function() {

    if(xhr.status == 200) {

      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach(function(paciente) {
        adicionaPacienteNaTabela(paciente);
      });

    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);
      erro = document.querySelector("#erro-ajax");
      erro.classList.add("mensagem-erro");
      erro.classList.remove("invisivel");
    }
  });

  xhr.send();
});
