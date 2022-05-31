function ficaAzul() {
  limpar();
  document.getElementById('titulo').classList.add('azul');
}

function ficaVermelho() {
  limpar();
  document.getElementById('titulo').classList.add('vermelho');
}

function ficaVerde() {
  limpar();
  document.getElementById('titulo').classList.add('verde');
}

function limpar() {
  document.getElementById('titulo').classList.remove('azul');
  document.getElementById('titulo').classList.remove('vermelho');
  document.getElementById('titulo').classList.remove('verde');
}

function mostrarTelefone() {
  document.getElementById('telefone').style.display = 'block';
}
