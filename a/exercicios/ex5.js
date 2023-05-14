function formatarValorMonetario(valor) {
    var valorFormatado = (valor * 100).toFixed(2).replace('.', ',');
    return 'R$' + valorFormatado;
  }
  
  var valor = 0.30000000000000004;
  console.log(formatarValorMonetario(valor));  
  