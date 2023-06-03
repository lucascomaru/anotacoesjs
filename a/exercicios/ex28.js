let numpar = 0
let numimpar = 0

lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (num in lista) {
    if (lista[num] % 2 === 0)
        numpar += 1;
    else
        numimpar += 1;
}

console.log(`Temos ${numpar} números pares`)
console.log(`Temos ${numimpar} números ímpares`)
