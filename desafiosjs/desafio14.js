function fibonacci(n) {
    let numeros = [0, 1];
  
    for (let i = 2; i <= n; i++) {
        numeros[i] = numeros[i - 1] + numeros[i - 2];
    }
  
    return numeros;
}

let resultado = fibonacci(20);
console.log(resultado);
