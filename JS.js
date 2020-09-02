

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

  
