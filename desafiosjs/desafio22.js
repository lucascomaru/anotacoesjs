function identificarElemento(array) {
    let contador = {};
    let elementoMaisFrequente;
    let maiorFrequencia = 0;

    for (let i = 0; i < array.length; i++) {
        const elemento = array[i];
        if (contador[elemento] === undefined) {
            contador[elemento] = 1;
        } else {
            contador[elemento]++;
        }

        if (contador[elemento] > maiorFrequencia) {
            maiorFrequencia = contador[elemento];
            elementoMaisFrequente = elemento;
        }
    }

    return elementoMaisFrequente;
}

console.log(identificarElemento([2, 3, 4, 5, 10, 2, 3, 4, 2, 10, 10, 10]));
