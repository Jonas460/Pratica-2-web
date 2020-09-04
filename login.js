//
<!DOCTYPE html>

<html lang ="pt">

<head>

<meta charset="utf-8">

<title>Tela de cadastro</title>

<script src="js/hello.js"></script>

    <link rel="stylesheet" href="css.css">
    <link rel="stylesheet" href="operacoes.html">
    <script type="text/javascript" src="JS.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>


</head>

<style>
    body {
        background-image: url(img/pexels-negative-space-48604.jpg);
        background-attachment: fixed;
        background-size: 100%;
        background-repeat: no-repeat;
        background-color: white;
    }
</style>


<body>

   
    <nav>
        <br><div class="obj1"></div>
        <div class="texto1">
            Sistema de Antendimento para profissionais da saúde e pacientes.
        </div>
        <div class= "obj3">
            <br><div class= "logo"></div>
        </div>
    </nav><br>
    <center><input class="texto3" type="text" value="Cadastro de Pacientes:" ></center> 


    <form name="Cadastro" action="/action_page.php" onsubmit="return verificarDados()" method="post">
        <table class="quadrado">
            <th class="texto3">
                
                <br><label for="nome">Nome Completo:</label>
                <input class="caixa3" type="text"  id= "unome" />
                
                <label for="pro2">Sexo:</label><br>


                M:
                <input class="caixa4" type="radio" id="I" name="ri" value="1">
                <label for="I">Sim</label>
                <br>

                F:
                <input class="caixa4" type="radio" id="Ni" name="ri" value="0">
                <label for="Ni">Não</label>
                <br>
    
                <label for="pro3">Telefone:</label>
                <input class="caixa3" type="text" class="form-control" id="ufone" onkeypress="$(this).mask('(00) 0.0000-0000');" placeholder="(00)9.0000-0000"/><br />
                
                <label for="pro3">Email:</label>
                <input class="caixa3" type="email"  id="uemail"/><br />
            <th>
    
            <th class="texto3">

                    <label for="nome">Numero do Cartão:</label><br>
                    <input class="caixa3" type="text" id="numCartao1"  id="unumcard" onkeypress="$(this).mask('000.0000.0000.0000');" placeholder="000.0000.0000.0000"><br>
                   
                    <label for="pro2">CPF:</label>
                    <input class="caixa3" type="text" id="ucpf" onkeypress="$(this).mask('000.000.000-00');" placeholder="000.000.000-00" /><br>
        
                    <label for="pro3">Endereço Completo:</label>
                    <input class="caixa3" type="text" id="uende" /><br /> 
                    
                    Complemento:
                    <input class="caixa3" type="text" name="servicos" />

    </table>

<center>
       
<div>

<input class="color" type="button"  value="Cancelar" onclick="javascript: location.href='sistema%20de%20saude.html';" > 
       
<input class="color" type="submit"  value="Enviar" action="/action_page.php" onsubmit="return pegarDados()" method="post">Cadastrar

<input class="color" type = "reset" action="/action_page.php" onsubmit="return apagarDados()" method="post">Apagar dados

</div>

<br>

</center>

</form>

</body>
</html>
//


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
