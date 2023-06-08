const pilotos = ['Vettel', 'Alonso', 'Massa', 'Reikkonen'];
pilotos.pop();
console.log(pilotos);

pilotos.push('Dic Vigarista') ;
console.log(pilotos);

pilotos.shift();  //Remove o primeiro elemento da lista
console.log(pilotos);

pilotos.unshift('Hamilton');  //Adiciona no primeiro
console.log(pilotos);

//splice pode adicionar e remover elementos

pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

//Remover
pilotos.splice(3, 1);
console.log(pilotos);

const algunspilotos1 = pilotos.slice(2); //Novo array
console.log(algunspilotos1);

const algunspilotos2 = pilotos.slice(1, 4);
console.log(algunspilotos2);