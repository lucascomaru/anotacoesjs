const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: false},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
];

//Desafio Todos são bolsistas?
const todosSaoBolsistas = alunos.reduce((acumulador, aluno) => {
    return acumulador && aluno.bolsista;
  }, true);
  
  console.log(todosSaoBolsistas);

// Algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map(a=> a.bolsista).reduce(algumBolsista));

  