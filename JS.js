reload();
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



Array.from(document.querySelectorAll('input[type="radio"]')).forEach(function(item, index) {
  item.addEventListener('click', save);
});

function save() {
  var g1 = document.querySelector('input[name=servico]:checked').value;
  localStorage.setItem("g1", g1);
}
function reload() {
  var G1 = Array.from(document.getElementsByName('servico'));
  var val1 = localStorage.getItem('g1');
  for (var i = 0; i < G1.length; i++) {
    if (G1[i].value == val1) {
      G1[i].checked = true;
    }
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

var senhaFunci2 = document.getElementById("senhaFunci").value;




alert('Dados salvos com sucesso');
 localStorage.setItem('dadosFunci', JSON.stringify(dadosFunci));
 
 localStorage.setItem('codFunci', JSON.stringify(codFunci));
 
 localStorage.setItem('senhaFunci2', JSON.stringify(senhaFunci2));

 
 localStorage.setItem('save()', JSON.stringify(save(), g1));

 document.onchange = saveItemDadosFunci;
  
};

function set2() {

  var cod = document.getElementById("cod2").value;
  var senha456 = document.getElementById("senhaFuncionario").value;
  localStorage.setItem('cod', JSON.stringify(cod));
  localStorage.setItem('senha456', JSON.stringify(senha456));
  document.onchange = saveItemDados;
};

function verificDadosFunci(){ 

  var cod3 = localStorage.getItem('cod');
  console.log(cod3);
  var senhaF456 = localStorage.getItem('senha456');
  console.log(senhaF456);
  
  var cod4 = localStorage.getItem('codFunci');
  console.log(cod4);
  var senha5 = localStorage.getItem('senhaFunci2');
  console.log(senha5);

  var cargo = localStorage.getItem('g1');
  console.log(cargo);
  
  if(cod3 == cod4  && senhaF456 == senha5 && cargo == "Medico" ){
    location.href='pagina_medico.html';
    alert('Tudo certo');
    return true;
    
  }  if(cod3 == cod4  && senhaF456 == senha5 && cargo == "Enferm" ){
    location.href='TecEnfer.html';
    alert('Tudo certo');
    return true;
    
  } if(cod3 == cod4  && senhaF456 == senha5 && cargo == "Enfermeiro" ){
    location.href='Exames-Enfermeiro.html';
    alert('Tudo certo');
    return true;
    
  } if(cod3 == cod4  && senhaF456 == senha5 && cargo == "Agente de saúde:" ){
    location.href='AgenteSaude.html';
    alert('Tudo certo');
    return true;
    
  }else{
    alert('Usuario ou senha incorretos');
    return false;
    
  }
  };


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

  var numCard = document.getElementById("CartaoSUS").value;
  var senhaLogin = document.getElementById("senhaCartao").value;

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
var s = localStorage.getItem('senhaCart');
console.log(s);

if(numCard ==  car &&senhaCard == s ){
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
 /* Pagina de LOgin do Paciente */

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

function verConsulta(obj) {
  var el = document.getElementById('tabela2');
      if ( el.style.display == 'none' ) {
         el.style.display = 'block';
         document.getElementById("ver").value='Ocultar'
      } else {
         el.style.display = 'none' 
         document.getElementById("ver").value='Ver+' 
      }
}


function Anot(obj) {
  var el = document.getElementById('img');
      if ( el.style.display == 'none' ) {
         el.style.display = 'block';
         document.getElementById("anot").value='Ocultar'
      } else {
         el.style.display = 'none' 
         document.getElementById("anot").value='Entrar' 
      }
}

function Paci(obj) {
  var el = document.getElementById('paci');
      if ( el.style.display == 'none' ) {
         el.style.display = 'block';
         document.getElementById("pacient").value='Ocultar'
      } else {
         el.style.display = 'none' 
         document.getElementById("pacient").value='Pacientes' 
      }
}
function Pac(obj) {
  var el = document.getElementById('anotacoes');
      if ( el.style.display == 'none' ) {
         el.style.display = 'block';
         document.getElementById("Internado").value='Ocultar'
      } else {
         el.style.display = 'none' 
         document.getElementById("Internado").value='P/Internados' 
      }
}

