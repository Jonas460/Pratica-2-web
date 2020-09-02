function verificaDados() {

    var x1 = document.forms["Servicos"]["exame"].value;
    var x2 = document.forms["Servicos"]["consulta"].value;
    var x3 = document.forms["Servicos"]["atendimento"].value;
    var x4 = document.forms["Servicos"]["medicamento"].value;
 

    if (x1 == "" || x2 == "" || x3 == "" || x4 == "") {
        alert("Selecione uma operação !");
        return false;
      }
  //verificar essa função//
  }













  function Pesquisar() {

    var Serv = document.getElementsByClassName("si").value;

    celu1.innerHTML = Serv;
    if(Serv = document.forms["Servico"]["si"].value == ""){
        alert("Preencha esses campos");
        return false;
      }

      if(Serv = document.forms["Servico"]["si"].value == "exame"){
//link
      }
      if(Serv = document.forms["Servico"]["si"].value == "atendimento"){
        //link
              }
              if(Serv = document.forms["Servico"]["si"].value == "consulta"){
                //link
                      }
                      if(Serv = document.forms["Servico"]["si"].value == "medicamento"){
                        //link
                              }
      
  //link pra cada//
  }


