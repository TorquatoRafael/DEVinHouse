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
  setor: "camarote",
};
var convidado3 = {
  nome: "Rafael",
  sobrenome: "Elias",
  idade: 57,
  setor: "pista",
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
  setor: "arquibancada",
};

var listaDeConvidados = [
  convidado1,
  convidado2,
  convidado3,
  convidado4,
  convidado5,
  convidado6,
];

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
var convidadosBebidasLiberadas = liberarBebidas(listaDeConvidados);
console.log(listaDeConvidados);
