function calcular(codigo, quantidade){
    let conta 
    let valor

    switch (codigo) {
        case codigo = 100:
            valor = 3
            conta = quantidade * valor 
            break;
        case codigo = 200:
            valor = 4
            conta = quantidade * valor 
            break;
        case codigo = 300:
            valor = 5.50
            conta = quantidade * valor 
            break;
        case codigo = 400:
            valor = 7.50
            conta = quantidade * valor 
            break;
        case codigo = 500:
            valor = 3.50
            conta = quantidade * valor 
            break;
        case codigo = 600:
            valor = 2.80
            conta = quantidade * valor 
            break;

        default:
            console.log('Não temos esse produto na nossa lista! ')
            break;
    }
    return conta
}

console.log(calcular(600, 4))
