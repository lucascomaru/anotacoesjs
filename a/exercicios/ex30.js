let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let maiorvalor = lista[0]
let menorvalor = lista[0]

for (num in lista) {
  if (lista[num] > maiorvalor) {
    maiorvalor = lista[num]
  }

  if (lista[num] < menorvalor) {
    menorvalor = lista[num]
  }
}

console.log(maiorvalor)
console.log(menorvalor)





