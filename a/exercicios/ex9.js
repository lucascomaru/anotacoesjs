/* Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.*/

function arredondaNota(nota) {
    if (nota < 38) {
      return nota; // Não é feito nenhum arredondamento, nota abaixo de 38 resulta em reprovação
    }
  
    // Verifica a diferença entre a nota e o próximo múltiplo de 5
    const diferenca = 5 - (nota % 5);
  
    if (diferenca < 3) {
      // Arredonda a nota para o próximo múltiplo de 5
      return nota + diferenca;
    }
  
    return nota; // A nota não é arredondada
  }
  
  const notaAluno1 = 84;
  const notaArredondadaAluno1 = arredondaNota(notaAluno1);
  console.log("Nota arredondada do aluno 1:", notaArredondadaAluno1);
  
  const notaAluno2 = 29;
  const notaArredondadaAluno2 = arredondaNota(notaAluno2);
  console.log("Nota arredondada do aluno 2:", notaArredondadaAluno2);
  
  const notaAluno3 = 38;
  const notaArredondadaAluno3 = arredondaNota(notaAluno3);
  console.log("Nota arredondada do aluno 3:", notaArredondadaAluno3);
  
