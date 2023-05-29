//usando a notação literal

const obj1 = {}

console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object

//function construtoras

function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco* (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Carro', 27.000, 0.50)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())


//Função factory
function criarFuncionario(nome, salariobase, faltas){
    return{
        nome,
        salariobase,
        faltas,
        getSalario(){
            return (salariobase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 3000, 4)
const f2 = criarFuncionario('Ana', 12000, 1)
console.log(f1.getSalario(), f2.getSalario())

//Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)