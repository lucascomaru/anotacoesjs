function removerPropriedade(objeto, propriedade) {
    const novoObjeto = { ...objeto };

    delete novoObjeto[propriedade];

    return novoObjeto;
}

const pessoa = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo',
};

const pessoaSemIdade = removerPropriedade(pessoa, 'idade');
console.log(pessoaSemIdade);
