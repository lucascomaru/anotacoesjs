function calculadora(num1, operacao, num2) {
    resultado = 0;
    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;

        default:
            console.log('Essa operação não está disponível');
            break;
    }
    return resultado;
}

console.log(calculadora(4, '/', 5));
