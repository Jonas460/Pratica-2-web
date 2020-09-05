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


function pegaDadosFunci() {

  var nomeMed = document.getElementById("nomeMed").value;
  var telMed = document.getElementById("telMed").valu;
  var emailMed = document.getElementById("emailMed").value;
  var end = document.getElementById("end").valu;
  var cpf = document.getElementById("ucpf").value;
  var cod = document.getElementById("cod");
  var senhaCart = document.getElementById("senhaCart");
  
     
      celu1.innerHTML = nomeMed;
      celu2.innerHTML = telMed;
      celu3.innerHTML = emailMed;
      celu5.innerHTML = end;
      celu4.innerHTML = cpf;
      celu6.innerHTML = cod;
      celu7.innerHTML = senhaCart;
  
      <table border="2" id="tabela" name="tabela" class="cortabela">
            
      
          <td>
              <p id="nomeMed"></p>
          </td>
          <td>
              <p id="telMed"></p>
          </td>
          <td>
              <p id="emailMed"></p>
          </td>
          <td>
              <p id="end"></p>
          </td>
          <td>
              <p id="cpf" ></p>
          </td>
          <td>
              <p id="cod" ></p>
          </td>
          <td>
              <p id="senhaCart" ></p>
          </td>

      
  </table>
}
function pegaDados() {

  var nome = document.getElementById("nome").value;
  var ufone = document.getElementById("ufone").valu;
  var ende = document.getElementById("ende").value;
  var numCanumCartao1 = document.getElementById("numCanumCartao1").valu;
  var ucpf = document.getElementById("ucpf").value;
  var email = document.getElementById("email");
  var senha = document.getElementById("senha");
  
     
      celu1.innerHTML = nome;
      celu2.innerHTML = ende;
      celu3.innerHTML = ufone;
      celu5.innerHTML = ucpf;
      celu4.innerHTML = email;
      celu6.innerHTML = numCanumCartao1;
      celu7.innerHTML = senha;
  
      <table border="2" id="tabela" name="tabela" class="cortabela">
            
      
          <td>
              <p id="nome"></p>
          </td>
          <td>
              <p id="ende"></p>
          </td>
          <td>
              <p id="ufone"></p>
          </td>
          <td>
              <p id="ucpf"></p>
          </td>
          <td>
              <p id="email" ></p>
          </td>
          <td>
              <p id="numCanumCartao1" ></p>
          </td>
          <td>
              <p id="senha" ></p>
          </td>

      
  </table>
}
  function pegarDados() {
    var numCart = document.getElementById("numCartao1");
    var senhaLogin = document.getElementById("senhaCartao")
    if(numCanumCartao1 == numCartao1 && senhaCad == senhaLogin  ){
      onclick = "javascript: location.href='pagina do servidor.html';";
      return true;
  }else{
    alert('Usuario ou senha incorretos');
    return false;
  }
  }

  function guardarDados(){
    var tecEnfer = document.getElementById("CorenTec");
    var med = document.getElementById("CRM");
    var enfer = document.getElementById("Coren");
    var agenteSaude = document.getElementById("Agente"); 
    
    var table = document.getElementsByTagName('tabela')[0];
    var newRow = table.insertRow(1);
    var cel1 = newRow.insertCell(0);
    

}

