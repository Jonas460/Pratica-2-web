function verificaDados() {

    var x1 = document.forms["Login"]["suscard"].value;
    var x2 = document.forms["Login"]["senhal"].value;

    if (x1 == "" || x2 == "") {
      alert("Preencha os campos obrigatórios");
      return false;
    }

  }


  function Login() {
    var susCard = document.getElementsByClassName("suscard").value;
    var senhaU = document.getElementsByClassName("senhal").value;
   
    celu1.innerHTML = susCard;
    celu2.innerHTML = senhaU;
   
    if(suscard == "" || senhaU == ""){
        alert("Preencha  todos os campos obrigatórios !");
    }
    else{
        alert("Login efetuado com sucesso !"); 
        // Logar na tela de serviços (LINK MEU CAMARADA)//
    }
  }


  function apagarDados() {
    alert('Dados apagados com sucesso!')
}
