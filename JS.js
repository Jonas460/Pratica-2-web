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


function set() {
  var numCard = document.getElementById("numC").value;
  var senhaLogin = document.getElementById("senhaC").value;

  localStorage.setItem('numCard', JSON.stringify(numCard));
  localStorage.setItem('senhaLogin', JSON.stringify(senhaLogin));
  document.onchange = saveItemDados;
}





function verificDados(){  

  var numCard = localStorage.getItem('numCard');
  console.log(numCard);
  var senhaCard = localStorage.getItem('senhaLogin');
  console.log(senhaCard);

  var car = localStorage.getItem('numCartao2');
  console.log(car);
  var s = localStorage.getItem('senhaCartao');
  console.log(s);

if( car === numCard && s === senhaCard ){
 
  alert('Tudo certo'); 
  alert('Valores digitado no cadastro' + car + s);
  alert('Valores do login' + numCard + senhaLogin);



  return location.href='pagina2.html';
  
}
else{
  alert('Deu erro :('); 
  alert('Valores digitado no cadastro' + car + s);//212.1212.1212.1121123
  alert('Valores do login' + numCard+ senhaLogin);//212.1212.1212.1121123
 
  return location.href='LoginF.html';
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


function pegaDados() {
var Nome  = document.getElementById("nome").value,

var  Telefone= document.getElementById("ufone").value,

var Endereco= document.getElementById("ende").value,

var Cpf= document.getElementById("ucpf").value,

var Email =document.getElementById("email").value,
  
var numCartao2 = document.getElementById("cod").value;

var senhaCartao = document.getElementById( "senha").value;

alert('Dados salvos com sucesso');

localStorage.setItem('Nome', JSON.stringify(Nome));

localStorage.setItem('Telefone', JSON.stringify(Telefone));

localStorage.setItem('Endereco', JSON.stringify(Endereco));

localStorage.setItem('Cpf', JSON.stringify(Cpf));
  
localStorage.setItem('Email', JSON.stringify(Email));
 
localStorage.setItem('numCartao2', JSON.stringify(numCartao2));
 
localStorage.setItem('senhaCartao', JSON.stringify(senhaCartao));

document.onchange = saveItemDados;
}

function set() {
  var numCard = document.getElementById("numC").value;
  var senhaLogin = document.getElementById("senhaC").value;

  localStorage.setItem('numCard', JSON.stringify(numCard));
  localStorage.setItem('senhaLogin', JSON.stringify(senhaLogin));
  document.onchange = saveItemDados;
}

function verificDados(){  
  var numCard = localStorage.getItem('numCard');
  console.log(numCard);
  var senhaCard = localStorage.getItem('senhaLogin');
  console.log(senhaCard);

  var car = localStorage.getItem('numCartao2');
  console.log(car);
  var s = localStorage.getItem('senhaCartao');
  console.log(s);

if( car === numCard && s === senhaCard ){
 location.href ="pagina2.html";
  alert('Tudo certo'); 
return true;
  
}else{
  alert('Dados inválidos:('); 
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

function mostraDiv(obj) {
  var el = document.getElementById('consulta');
      if ( el.style.display == 'none' ) {
         el.style.display = 'block';
         document.getElementById("consultar").value='Ocultar'
      } else {
         el.style.display = 'none' 
         document.getElementById("consultar").value='Ver Consultas Medicas' 
      }
}

function mostraVacina(obj) {
  var el = document.getElementById('vacina');
      if ( el.style.display == 'none' ) {
         el.style.display = 'block';
         document.getElementById("vaci").value='Ocultar'
      } else {
         el.style.display = 'none' 
         document.getElementById("vaci").value='Vacinas' 
      }
}
function mostraRest(obj) {
  var el = document.getElementById('rest');
      if ( el.style.display == 'none' ) {
         el.style.display = 'block';
         document.getElementById("restri").value='Ocultar'
      } else {
         el.style.display = 'none' 
         document.getElementById("restri").value='Restrições' 
      }    
}  
     
