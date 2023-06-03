const notas = [7.7, 8.2, 7.9, 6.8, 3.6, 9.0, 2.1]


//sem usar o callback
let notasBaixas = []
for (let i in notas){
    if(notas[i]< 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

// Com callback

const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)

//Com arrow

const notasBaixas3 = notas.filter(nota => nota <7)

console.log(notasBaixas3)

//Arrow elegante - Armazena em uma variável que pode ser usada em outro lugar do sistema

const notaMenorQue7 = nota => nota <7
const notasBaixas4 = notas.filter(notaMenorQue7)

console.log(notasBaixas4)