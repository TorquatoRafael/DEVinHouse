//var listaNumeros = [2, 3, 9, 12, 16, 55, 90, 78, 17];
//.forEach((lista) => {
//  console.log(lista * 2);
//});

var listaConvidados = [
  { nome: "José", sobrenome: "Carlos" },
  { nome: "Alessandro", sobrenome: "Viana" },
  { nome: "Paula", sobrenome: "Souza" },
  { nome: "Cristian", sobrenome: "Schimit" },
  { nome: "Beatriz", sobrenome: "Viana" },
  { nome: "Fernanda", sobrenome: "Silveira" },
  { nome: "Cláudia", sobrenome: "Torres" },
  { nome: "Augusto", sobrenome: "Cesar" },
  { nome: "Noemi", sobrenome: "Nakamura" },
  { nome: "Pedro", sobrenome: "Lobo" },
];

const listaResultante = listaConvidados.map((listaConvidados, indice) => {
  return listaConvidados.nome + " " + listaConvidados.sobrenome;
});
console.log(listaResultante);
