function simboloMais(num) {
    let resultado = '';
    for (let i = 1; i <= num; i++) {
        resultado += '+';
    }
    return resultado;
}

console.log(simboloMais(10));
