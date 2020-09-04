function Login() {
    var susCard = document.getElementById("numcard").value;
    var senhaU = document.getElementsById("senhacard").value;
   
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
