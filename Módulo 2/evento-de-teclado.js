function digitou() {
  console.log('Você digitou.');
}

function mostreTecla(evento) {
  console.log(evento);
}

function digitouEnter(evento) {
  if (evento.keyCode == 13) {
    let texto = document.getElementById('enter').value;
    console.log(texto, 'Digitou Enter');
  }
}

function ctrlEnter(evento) {
  if (evento.keyCode == 13 && evento.ctrlKey == true) {
    let texto = document.getElementById('ctrlEnter').value;
    console.log(texto, 'Combinou Ctrl + Enter');
  }
}
