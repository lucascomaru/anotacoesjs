function notaAluno(nota1, nota2, nota3) {
    let pesoMaiorNota = 4;
    let pesoOutrasNotas = 3;
    let somaPonderada = 0;
  
    if (nota1 >= nota2 && nota1 >= nota3) {
      somaPonderada = nota1 * pesoMaiorNota + (nota2 + nota3) * pesoOutrasNotas;
    } else if (nota2 >= nota1 && nota2 >= nota3) {
      somaPonderada = nota2 * pesoMaiorNota + (nota1 + nota3) * pesoOutrasNotas;
    } else if (nota3 >= nota2 && nota3 >= nota1) {
      somaPonderada = nota3 * pesoMaiorNota + (nota1 + nota2) * pesoOutrasNotas;
    } else {
      somaPonderada = nota1 * pesoOutrasNotas + (nota2 + nota3) * pesoMaiorNota;
    }
  
    let media = somaPonderada / (pesoMaiorNota + 2 * pesoOutrasNotas);
  
    return media;
  }
  
  console.log(notaAluno(5, 4, 7));
  