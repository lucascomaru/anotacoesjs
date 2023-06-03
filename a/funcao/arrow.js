// Arrow sempre é uma função anonima. Se quiser chamar ela depois, tem que armazenar em uma variável 


let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))


let ola = function(){
    return 'Olá'
}
ola = () => 'Olá'  //Ausencia de parametro
ola = _ => 'Olá'  //Possui parametro

console.log(ola())