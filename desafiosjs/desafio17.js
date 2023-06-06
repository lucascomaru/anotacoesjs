function maiorValor(num1, num2) {
    if (num1 > num2) {
      return `${num1} é maior que ${num2}`;
    } else {
      return `${num2} é maior que ${num1}`;
    }
  }
  
  function menorValor(num1, num2) {
    if (num1 < num2) {
      return `${num1} é menor que ${num2}`;
    } else {
      return `${num2} é menor que ${num1}`;
    }
  }
  
  console.log(maiorValor(3, 2));
  console.log(menorValor(2, 3));
  