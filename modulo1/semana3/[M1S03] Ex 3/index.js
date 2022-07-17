// Para resolver este exercício, você precisará criar um script JavaScrip e vinculá-lo em uma página HTML (pode ser em branco).

// Crie um programa que pergunte ao usuário o valor do numero1, valor do numero2 e operação (+, -, * ou / ). A partir dos dados recebidos, exiba em um console.log com o resultado da operação escolhida entre os dois números digitados.

// Utilize prompt para perguntar os números e a operação, e utilize uma estrutura de controle de fluxo condicional para realizar a operação ( if ou switch case ).

var numero1 = parseInt(prompt("Digite o primeiro número"));
var numero2 = parseInt(prompt("Digite o segundo número"));
var operacao = prompt("Escolha uma operação");
switch (operacao) {
case "+":
    alert(numero1 + numero2)
    break;
case "-":
    alert(numero1 + numero2)
    break
case '*':
    alert(numero1 * numero2)
    break
case '/':
    alert(numero1 / numero2)
    break
}
