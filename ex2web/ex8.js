function multiplicar(num1, num2) {
    soma = 0;
    for (let i = 1; i <= num2; i++) {
        soma = soma + num1;
    }
    return soma;
}

console.log(multiplicar(3, 7));
