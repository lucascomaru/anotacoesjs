function repetir (elemento1, elemento2){
    let array = []
    for(let i = 1; i <= elemento2;i++){
        array.push(elemento1)
    };
    
    return array;
};

console.log(repetir('Teste', 5));