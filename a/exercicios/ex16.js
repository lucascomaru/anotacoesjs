function calculadora(valor1, operacao, valor2){
    let resultado

    switch (operacao) {
        case '+':
            resultado = valor1 + valor2            
            break;
        case '-':
            resultado = valor1 - valor2            
            break;
        case '*':
            resultado = valor1 * valor2            
            break;

        case '/':
            resultado = valor1 / valor2            
            break;
    
        default:
            console.log('Operação inválida')
            break;
    }
    return resultado
}

console.log(calculadora(20, '-', 13 ))
