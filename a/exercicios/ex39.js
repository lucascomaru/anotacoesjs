function trocarElementos(vetorA, vetorB) {
    if (vetorA.length !== vetorB.length) {
      throw new Error("Os vetores devem ter o mesmo tamanho.")
    }
  
    for (let i = 0; i < vetorA.length; i++) {
      vetorA[i] = vetorA[i] + vetorB[i]
      vetorB[i] = vetorA[i] - vetorB[i]
      vetorA[i] = vetorA[i] - vetorB[i]
    }
  }
  
  
  const vetorA = [1, 2, 3, 4]
  const vetorB = [5, 6, 7, 8]
  
  console.log("Antes da troca:")
  console.log("Vetor A:", vetorA)
  console.log("Vetor B:", vetorB)
  
  trocarElementos(vetorA, vetorB)
  
  console.log("Após a troca:")
  console.log("Vetor A:", vetorA)
  console.log("Vetor B:", vetorB)
  