function soma (){  //Toda função tem array arguments disponível
    let soma = 0
    for (let i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1, 2))