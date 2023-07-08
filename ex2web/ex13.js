function filtrarElementos(array) {
    let filtro = array.filter((item) => typeof item === 'number');
    return filtro;
}

console.log(filtrarElementos([1, 'dois', 3, 'quatro', 5, 7, 9, 'dez']));
