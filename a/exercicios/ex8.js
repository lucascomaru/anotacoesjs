function analisarPontuacoes(pontuacoes) {
    const pontuacoesArray = pontuacoes.split(' ').map(Number); 
    let maiorPontuacao = pontuacoesArray[0];
    let menorPontuacao = pontuacoesArray[0];
    let recordes = [0, 0]; 
  
    for (let i = 1; i < pontuacoesArray.length; i++) {
      if (pontuacoesArray[i] > maiorPontuacao) {
        maiorPontuacao = pontuacoesArray[i];
        recordes[0]++;
      } else if (pontuacoesArray[i] < menorPontuacao) {
        menorPontuacao = pontuacoesArray[i];
        recordes[1] = i;
      }
    }
  
    return recordes;
  }
  
  const pontuacoes = "10 20 15 30 25 50 40 5";
  const resultados = analisarPontuacoes(pontuacoes);
  console.log(`Número de recordes: ${resultados[0]}`);
  console.log(`Número do pior jogo: ${resultados[1]}`);
  