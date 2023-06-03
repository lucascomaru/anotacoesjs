function converter(temperatura, temperaturaNum){
    let resultado = 0
    switch (temperatura) {
        case 'f':
            resultado = (temperaturaNum - 32) * 5/9
            break;
        case 'c':
            resultado = (temperaturaNum * 9.5) +32
            break;
        default:
            console.log('Erro no código')
            break;
    }
    return resultado
}
console.log(converter('f', 99))
