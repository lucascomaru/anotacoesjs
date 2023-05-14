function calcularMontanteJurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    var juros = capitalInicial * taxaJuros * tempoAplicacao;
    var montante = capitalInicial + juros;
    return montante;
  }
  function calcularMontanteJurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    var montante = capitalInicial * Math.pow((1 + taxaJuros), tempoAplicacao);
    return montante;
  }

  var capital = 1000;  // Capital inicial
  var taxa = 0.05;     // Taxa de juros (5%)
  var tempo = 3;       // Tempo de aplicação (3 anos)
  
  var montanteJurosSimples = calcularMontanteJurosSimples(capital, taxa, tempo);
  var montanteJurosCompostos = calcularMontanteJurosCompostos(capital, taxa, tempo);
  
  console.log("Montante com juros simples:", montanteJurosSimples);
  console.log("Montante com juros compostos:", montanteJurosCompostos);
  