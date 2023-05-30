function imprimirNumerosImpares(inicio = 0, fim = 100) {
    if (inicio > fim) {
      let temp = inicio
      inicio = fim
      fim = temp
    }
  
    if (inicio % 2 === 0) {
      inicio++
    }
  
    for (let i = inicio; i <= fim; i += 2) {
      console.log(i)
    }
  }
  
  // Exemplos de uso da função
  imprimirNumerosImpares()
  imprimirNumerosImpares(2, 10)
  imprimirNumerosImpares(15, 5)
  