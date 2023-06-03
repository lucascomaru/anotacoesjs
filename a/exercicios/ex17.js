function calcularSalario(plano, salario){
    let novosalario
    switch (plano) {
        case plano = 'A':
            novosalario = salario + (salario * 0.10)
            break;
        case plano = 'B':
            novosalario = salario + (salario * 0.15)
            break;
        case plano = 'C':
            novosalario = salario + (salario * 0.20)
            break;
    
        default:
            console.log('Plano inválido')
            break;
    }
    return novosalario
}

console.log(calcularSalario('A', 1500))