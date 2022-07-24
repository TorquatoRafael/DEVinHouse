const input = document.getElementsByTagName("input")[0];
const button = document.getElementsByTagName("button")[0];
const main = document.getElementsByTagName("main")[0];
const h2 = document.getElementsByTagName("h2");

function classificarIdade() {
  const idade = parseInt(input.value);
  if (idade <= 15) {
    exibeResutaldo(`Com ${idade} anos a pessoa é jovem.`);
    return;
  }
  if (idade <= 65) {
    exibeResutaldo(`Com ${idade} anos a pessoa é adulta.`);
    return;
  }
  if (idade > 65) {
    exibeResutaldo(`Com ${idade} anos a pessoa é idosa.`);
  }
  function exibeResutaldo(mensagem) {
    if (h2[0]) {
      h2[0].remove();
    }
    const elemento = document.createElement("h2");
    elemento.innerText = mensagem;
    main.appendChild(elemento);
  }
}
button.onclick = classificarIdade;
