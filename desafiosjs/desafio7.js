function compararNumero(num1, num2){
    if(num1 > num2){
        return `O número ${num1} é maior do que o ${num2}`
    }else if(num1 == num2){
        return `O número ${num1} é igual ao ${num2}`
    }else if(num2 > num1){
        return `O número ${num2} é maior que o ${num1}`
    }else{
        return 'Número indisponível'
    }
}

console.log(compararNumero(2, 2))