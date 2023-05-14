const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: 'Casa',
    preco: 4500
}

//Factory 
function criarPessoa (){
    return{
        nome:'Ana',
        sobrenome:'Silva'
    }
}

console.log(criarPessoa())