//colecao dinamica de pares chave/valor

const produto = new Object

produto.nome = 'Cadeira'



const carro = {
    modelo: 'A4',
    valor: 50000,
    proprietario: {
        nome: 'Carlos',
        idade: 45,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 41
    }, {
        nome: 'Ana',
        idade: 45
    }],
    calcularValorSeguro: function (){
        //...
    }
};

carro.proprietario.endereco.numero = 1000
carro['proprietario']
console.log(carro)

delete carro.condutores
console.log(carro)