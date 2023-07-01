function calcularHorasTrabalhadas(horasTrabalhadas, recebePorHoras) {
    let salario = recebePorHoras * horasTrabalhadas;
    return `Salário igual a R$ ${salario}!`;
}

console.log(calcularHorasTrabalhadas(150, 40.5));
