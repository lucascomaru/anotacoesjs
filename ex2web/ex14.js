function obterParesChaveValor(objeto) {
    return Object.entries(objeto);
  }
const pessoa = {
    nome: 'João',
    idade: 25,
    cidade: 'São Paulo'
};
  
const resultado = obterParesChaveValor(pessoa);
console.log(resultado);
    