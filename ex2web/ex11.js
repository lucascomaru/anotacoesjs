function recebePrimeiroEUltimoElemento(elementos) {
    const primeiro = elementos[0];
    const ultimo = elementos[elementos.length - 1];
  
    const final = [primeiro, ultimo];
    return final;
  }
  

  console.log(recebePrimeiroEUltimoElemento([1, 2]));  
  