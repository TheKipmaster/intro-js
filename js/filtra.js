var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
  var pacientes = document.querySelectorAll(".paciente");

  if(this.value.length > 0) {

    pacientes.forEach(function(paciente) {

      var nomeTd = paciente.firstChild;
      var nome = nomeTd.textContent;

      if(nome != campoFiltro.value) {
        paciente.classList.add("invisivel");
      } else {
        paciente.classList.remove("invisivel");
      }
    });

  } else {
      pacientes.forEach(function(paciente) {
        paciente.classList.remove("invisivel");
      })
  }

});