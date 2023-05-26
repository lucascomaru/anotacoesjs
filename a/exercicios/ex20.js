function calcularCedulas(valor) {
    var notas100 = Math.floor(valor / 100);
    var notas50 = Math.floor((valor % 100) / 50);
    var notas10 = Math.floor(((valor % 100) % 50) / 10);
    var notas5 = Math.floor((((valor % 100) % 50) % 10) / 5);
    var notas1 = Math.floor((((valor % 100) % 50) % 10) % 5);
  
    var resultado = '';
  
    if (notas100 > 0) {
      resultado += notas100 + ' nota(s) de R$ 100. ';
    }
    if (notas50 > 0) {
      resultado += notas50 + ' nota(s) de R$ 50. ';
    }
    if (notas10 > 0) {
      resultado += notas10 + ' nota(s) de R$ 10. ';
    }
    if (notas5 > 0) {
      resultado += notas5 + ' nota(s) de R$ 5. ';
    }
    if (notas1 > 0) {
      resultado += notas1 + ' nota(s) de R$ 1. ';
    }
  
    return resultado;
  }
  
  var valor = 18; 
  var resultado = calcularCedulas(valor);
  
  console.log(resultado);
  