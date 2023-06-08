function geraAleatorio(tamanho, valorMin, valorMax) {
    const array = [];
  
    for (let i = 0; i < tamanho; i++) {
      const numeroAleatorio = Math.floor(Math.random() * (valorMax - valorMin + 1)) + valorMin;
      array.push(numeroAleatorio);
    }
  
    return array;
  }
  
const numerosAleatorios = geraAleatorio(10, 1, 100);
console.log(numerosAleatorios);
  