function multiplicarVetor(vetor, numero) {
    let resultado = []
  
    for (let i = 0; i < vetor.length; i++) {
      resultado.push(vetor[i] * numero)
    }
  
    return resultado
  }
  

  function multiplicarVetorElementosMaioresQue5(vetor, numero) {
    let resultado = []
  
    for (let i = 0; i < vetor.length; i++) {
      if (vetor[i] > 5) {
        resultado.push(vetor[i] * numero)
      } else {
        resultado.push(vetor[i])
      }
    }
  
    return resultado
  }
  
  let vetor = [2, 4, 6, 8, 10]
  let numero = 3
  
  let resultado1 = multiplicarVetor(vetor, numero);
  console.log(resultado1)
  
  let resultado2 = multiplicarVetorElementosMaioresQue5(vetor, numero);
  console.log(resultado2)
  