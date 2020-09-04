alert("Bem vindo!");
function verificarDados() {

    var x1 = document.forms["Cadastro"]["unome"].value;
    var x2 = document.forms["Cadastro"]["uemail"].value;
    var x3 = document.forms["Cadastro"]["uendereco"].value;
    var x4 = document.forms["Cadastro"]["ufone"].value;
    var x5 = document.forms["Cadastro"]["ucpf"].value;
    var x6 = document.forms["Cadastro"]["ri"].name;

    var sexo = document.getElementsByClassName("ri").value;

    celu1.innerHTML = sexo;

    if (x1 == "" || x2 == "" || x3 == "" || x4 == "" || x5 == "" || x6 == "") {
      alert("Preencha os campos obrigatórios");
      return false;
    }
// Revisar essa função //
    if(celu6 == 1){

    }

    if(celu6 == 0){

    }
  }

  function pegarDados() {

var nomeU = document.getElementById("unome").value;
var enderecoU = document.getElementById("uendereco").value;
var foneU = document.getElementById("uendereco").valu
var cpfU = document.getElementById("uendereco").valu
var emailU = document.getElementById("uemail").value;
var sexoU = document.getElementById("ri").value;
   
    celu1.innerHTML = nomeU;
    celu2.innerHTML = enderecoU;
    celu3.innerHTML = foneU;
    celu5.innerHTML = cpfU;
    celu4.innerHTML = emailU;
    celu6.innerHTML = sexoU;

}

function apagarDados() {
    alert('Dados apagados com sucesso!')
}


function  armazenar_dados ( ) {
  localStorage.setItem ( "" )
}