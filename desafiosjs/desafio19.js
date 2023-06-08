function contarVogal(string) {
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    let contar_vogais = 0;
  
    for (let i = 0; i < string.length; i++) {
      if (vogais.includes(string[i])) {
        contar_vogais++;
      }
    }
  
    if (contar_vogais === 0) {
      console.log('Não há vogais nessa palavra!');
    }
  
    return contar_vogais;
  }
  
  console.log(contarVogal('Lucas'));
  