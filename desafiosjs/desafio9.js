function calcularTarifa(idade){
    let tarifa = 2.50
    if(idade < 6){
        return `Sua idade é ${idade}, tarifa grátis`
    }else if(idade >= 6 && idade <= 21){
        tarifa /= 2
        return `Sua idade é ${idade}, você terá desconto de 50% na tarifa: ${tarifa}`
    }else if(idade >= 60){
        tarifa = tarifa - 0.30
        return `Sua idade é ${idade}, você terá desconto de 30%: ${tarifa}`
    }else{
        return `Tarifa preço normal: ${tarifa}`
    }

}

console.log(calcularTarifa(40))