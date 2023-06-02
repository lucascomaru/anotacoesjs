const a = 1
const b = 2
const c = 3

const obj = {a, b, c}
console.log(obj)

const nome = 'nota'
const valor = 7.89

const obj2 = {}
obj2[nome] = valor
console.log(obj2)

const obj3 = {[nome]: valor}
console.log(obj3)

const obj4 = {
    funcao1: function(){
        //...
    },
    funcao2(){
        //..
    }
}
console.log(obj4)