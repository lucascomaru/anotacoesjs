let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Casa', 'Carro', 'Asa', 'Lata']
let vetorDouble = [1.1, 2.3, 3.5, 4.0]

let juntos = vetorInteiro.concat(vetorString, vetorDouble)
console.log(juntos)

let juntos2 = vetorDouble.concat(vetorInteiro, vetorString)
console.log(juntos2)