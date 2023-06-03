const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i in notas){
    console.log(i, notas[1])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Carvalho',
    idade: 29,
    peso: 72
}

for(let atributo in pessoa){
    console.log(atributo + pessoa[atributo])
}