lista = [1,2,3,4,5,10,20,30,40,50,80,82,90,100]
let intervalo10 = 0
let fora = 0
function acharResultado(){
    for(num in lista){
        if(lista[num] >= 10 && lista[num] <= 20){
            intervalo10 +=1
        }else{
            fora += 1
        }

    }
}
acharResultado()

console.log(`Temos ${intervalo10} números dentro do intervalo`)
console.log(`Temos ${fora} números dentro do intervalo`)