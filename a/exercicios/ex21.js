let idade = 50
let valor_a_pagar = 100


if(idade < 10){
    total_com_taxa = valor_a_pagar + 100
}else if(idade > 10 && idade < 30){
    total_com_taxa = valor_a_pagar + 80
}else if(idade > 30 && idade < 60){
    total_com_taxa = valor_a_pagar + 95
}else
    total_com_taxa = valor_a_pagar + 130

console.log(total_com_taxa)