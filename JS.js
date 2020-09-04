function verificaDados(){
    var inputs = document.getElementsByClassName('caixa3');
    var len = inputs.length;
    var valid = true;

    for (var i = 0; i < len; i++) {
      if (!inputs[i].value) {
        valid = false;
      }
    }

    if (!valid) {
      alert('Por favor preencha todos os campos.');
      return false;
    } else {
      return true
    }
  }

  function armazenar_dados(){
      localStorage.setItem("")
  }

  alert("Bem vindo!");
function pegaDados() {

var nomeU = document.getElementById("nome").value;
var sexoU = document.getElementById("opcao").value
var foneU = document.getElementById("ufone").valu;
var enderecoU = document.getElementById("endereco").value;
var numCard = document.getElementById("cod").valu;
var cpfU = document.getElementById("ucpf").value;

   
    celu1.innerHTML = nomeU;
    celu2.innerHTML = enderecoU;
    celu3.innerHTML = foneU;
    celu5.innerHTML = cpfU;
    celu4.innerHTML = emailU;
    celu6.innerHTML = sexoU;
    celu7.innerHTML = numCard

    if (celu1 == "" || celu2 == "" || celu3 == "" || celu4 == "" || celu5 == "" || celu6 == "" || celu7 == "") {
      alert("Preencha os campos obrigatórios");
      return false;
    }

}
function armazenar_dados(){
  localStorage.setItem("")
}

  function Login() {
    var susCard = document.getElementById("cod").value;
    var senhaU = document.getElementsById("senhaCartao").value;
   
    celu1.innerHTML = susCard;
    celu2.innerHTML = senhaU;
   
    if(numcard == "" || senhacard == ""){
        alert("Preencha  todos os campos obrigatórios !");
        return false;
    }
  }


  function apagarDados() {
    alert('Dados apagados com sucesso!')
}


