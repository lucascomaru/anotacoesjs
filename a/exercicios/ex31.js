lista = [1,2,3,-10,-80,-76,5,19,200,20,1000,-81,-90,280,-70,14]

let positivos = 0
let negativos = 0

for(let numero of lista){
    if(numero < 0){
        negativos += 1
    }else if(numero > 0){
        positivos +=1
    }
        
        
}

console.log(`Temos ${negativos} negativos!`)
console.log(`Temos ${positivos} positivos!`)