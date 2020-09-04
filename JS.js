

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

  






// Cadastro//


function pegarDados() {

    var nomeUser = document.getElementsByClassName("unome").value;
    var enderecoUser = document.getElementsByClassName("uendereco").value;
    var fone1User = document.getElementsByClassName("ufone1").value;
    var fone2User = document.getElementsByClassName("ufone2").value;
    var cpfUser = document.getElementsByClassName("ucpf").value;

    var indigena = document.getElementsByClassName("ri").value;
    var etiniai = document.getElementsByClassName("uetinia").value;
    var deseii = document.getElementsByClassName("udsei").value;
    var coremi = document.getElementsByClassName("ucorem").value;
    var codigoi = document.getElementsByClassName("ucodigo").value;
   
    celu1.innerHTML = nomeUser;
    celu2.innerHTML = enderecoUser;
    celu3.innerHTML = fone1User;
    celu4.innerHTML = fone2User;
    celu5.innerHTML = cpfUser;
    celu6.innerHTML = indigena;
    celu7.innerHTML = etiniai;
    celu8.innerHTML = deseii;
    celu9.innerHTML = coremi;
    celu10.innerHTML = codigoi;

    var xx1 = document.forms["Cadastro"]["uetinia"].value;
    var xx2 = document.forms["Cadastro"]["udsei"].value;
    var xx3 = document.forms["Cadastro"]["ucorem"].value;
    var xx4 = document.forms["Cadastro"]["ucodigo"].value;


if(indigena = document.forms["Cadastro"]["ri"].value == True && xx1 != "" || xx2 != "" || xx3 != "" || xx4 != ""){
  alert("Preencha esses campos");
  return false;
}


if(indigena = document.forms["Cadastro"]["ri"].value == False && xx1 != "" || xx2 != "" || xx3 != "" || xx4 != ""){
  alert("Não preencha esses campos");
  return false;
}    
else{
  alert('Cadastro realizado com sucesso!');
}

}

function apagarDados() {
    alert('Dados apagados com sucesso!')
}




//Login//
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


// 
