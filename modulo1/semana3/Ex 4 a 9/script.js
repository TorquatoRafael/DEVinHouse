// Criação dos objetos
var convidado1 = {
  nome: "John",
  sobrenome: "Stuart",
  idade: 16,
  setor: "camarote",
};
var convidado2 = {
  nome: "Julia",
  sobrenome: "Perdona",
  idade: 20,
  setor: "pista",
};
var convidado3 = {
  nome: "Rafael",
  sobrenome: "Elias",
  idade: 57,
  setor: "arquibancada",
};
var convidado4 = {
  nome: "João Eduardo",
  sobrenome: "Robert",
  idade: 37,
  setor: "pista",
};
var convidado5 = {
  nome: "Danielly",
  sobrenome: "Luz",
  idade: 15,
  setor: "arquibancada",
};
var convidado6 = {
  nome: "Edinara",
  sobrenome: "Dias",
  idade: 67,
  setor: "camarote",
};
// Criação Array
var listaDeConvidados = [
  convidado1,
  convidado2,
  convidado3,
  convidado4,
  convidado5,
  convidado6,
];

//Função para verificar a idade
function liberarBebidas(lista) {
  var resultado = lista.map((convidado) => {
    if (convidado.idade >= 18) {
      convidado.openBar = "Sim";
    }
    convidado.openBar = "Não";

    return convidado;
  });
  return resultado;
}
var convidadosComBebidasProcessada = liberarBebidas(listaDeConvidados);
console.log(listaDeConvidados);

function separarCamarote(lista) {
  var resultado = lista.filter((convidado) => convidado.setor === "camarote");
  return resultado;
}
function separarPista(lista) {
  var resultado = lista.filter((convidado) => convidado.setor === "pista");
  return resultado;
}
function separarArquibancada(lista) {
  var resultado = lista.filter(
    (convidado) => convidado.setor === "arquibancada"
  );
  return resultado;
}

var listaCamarote = separarCamarote(listaDeConvidados);
console.log(listaCamarote);

var listaPista = separarPista(listaDeConvidados);
console.log(listaPista);

var listaArquibancada = separarArquibancada(listaDeConvidados)
console.log(listaArquibancada);