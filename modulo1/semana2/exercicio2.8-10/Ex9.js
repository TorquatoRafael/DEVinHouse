var resultado = document.getElementById("resultado");
function incrementar() {
  //obter o valor que está no <p>
  var valor = resultado.textContent;
  //Efetua o incremento e adiciona esse novo valor ao <p>
  resultado.innerText = parseInt(valor) + 1;
}
//Função responsável por decrementar o contador
function decrementar() {
  //obter o valor que está no <p>
  var valor = resultado.textContent;
  //Efetua o decremento e adiciona esse novo valor ao <p>
  resultado.innerText = parseInt(valor) - 1;
}
