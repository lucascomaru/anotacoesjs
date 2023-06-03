function conta(a, b){
    this.soma = a + b;
    this.subtracao = a - b;
    this.multiplicacao = a * b;
    this.divisao = a / b;
}

var resultado = new conta(4, 20);

console.log(resultado.soma); 
console.log(resultado.subtracao); 
console.log(resultado.multiplicacao); 
console.log(resultado.divisao); 