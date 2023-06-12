function recebePrimeiroEUltimoElemento([elemento1, elemento2]){
    let final = [elemento1[0], elemento2[-1]]
    return final;    
};

console.log(recebePrimeiroEUltimoElemento(1 , 2));