/*Pagina do Medico*/

function validaDadosFunci(){
  var inputs = document.getElementsByClassName('caixa3');
  var len = inputs.length;
 var valid = true;
  for (var i = 0; i < len; i++) {
    if (!inputs[i].value) {
      valid = false;
    }
  }
  if (!valid) {
    location.href='cadastroFuncionario.html';
    alert('Por favor preencha todos os campos.');
    return false;
  } else {
    return true
  }
}


function pegaDadosFunci() {


var  dadosFunci = {
Nome: document.getElementById("nomeMed").value,

Telefone: document.getElementById("telMed").value,

Email: document.getElementById("emailMed").value,

Endereco: document.getElementById("end").value,

Cpf: document.getElementById("ucpf").value,

};
var codFunci = document.getElementById("cod").value;

var senhaFunci = document.getElementById("senhaFunci").value;


alert('Dados salvos com sucesso');
 localStorage.setItem('dadosFunci', JSON.stringify(dadosFunci));
 
 localStorage.setItem('codFunci', JSON.stringify(codFunci));
 
 localStorage.setItem('senhaFunci', JSON.stringify(senhaFunci));

 document.onchange = saveItemDadosFunci;
  
}

function verificDadosFunci(){ 

  var cod = document.getElementById("cod2");
  var senhaFunci = document.getElementById("senhaFuncionario");
  
  var s2 = localStorage.getItem('senhaFunci');
  var cod3 = localStorage.getItem('codFunci');
  
  if(cod == cod3  && senhaFunci == s2 ){
    location.href='pagina_medico.html';
    alert('Tudo certo');
    return true;
    
  }else{
    alert('Usuario ou senha incorretos');
    return false;
    
  }
  }




/*Pagina do paciente*/
function pegaDados() {
 
var  dados = {
Nome: document.getElementById("nome").value,

Telefone: document.getElementById("ufone").value,

Telefone: document.getElementById("ende").value,

Cpf: document.getElementById("ucpf").value,

Email: document.getElementById("email").value,
  
};

var numCartao2 = document.getElementById("numCartao1").value;

var senhaCart = document.getElementById( "senha").value;

alert('Dados salvos com sucesso');
 localStorage.setItem('dados', JSON.stringify(dados));
 
 localStorage.setItem('numCartao2', JSON.stringify(numCartao2));
 
 localStorage.setItem('senhaCart', JSON.stringify(senhaCart));

 document.onchange = saveItemDados;
}

function verificDados(){ 

var numCard = document.getElementById("CartaoSUS").value;
var senhaLogin = document.getElementById("senhaCartao").value;

var s = localStorage.getItem('senhaCart');
var car = localStorage.getItem('numCartao2');

if(numCard == car  && senhaLogin == s ){
  location.href='pagina2.html';
  alert('Tudo certo');
  return true;
  
}else{
  alert('Usuario ou senha incorretos');
  return false;
  
}
}

function validaDados(){
  var inputs = document.getElementsByClassName('caixa3');
  var len = inputs.length;
 var valid = true;
  for (var i = 0; i < len; i++) {
    if (!inputs[i].value) {
      valid = false;
    }
  }
  if (!valid) {
    location.href='cadastro.html';
    alert('Por favor preencha todos os campos.');
    return false;
  } else {
    return true
  }
}



