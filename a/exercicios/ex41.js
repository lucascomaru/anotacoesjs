function encontrarMaiorValor(vetor) {
    let maiorValor = vetor[0]
  
    for (let i = 1; i < vetor.length; i++) {
      if (vetor[i] > maiorValor) {
        maiorValor = vetor[i]
      }
    }
  
    return maiorValor;
  }
  
  const numeros = [1, 2, 3, 4, 5]
  const maiorValor = encontrarMaiorValor(numeros)
  
  console.log("Vetor:", numeros)
  console.log("Maior valor:", maiorValor)
