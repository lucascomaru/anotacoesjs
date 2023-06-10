function estaEntre(numero, min, max, inclusivo){
    if(numero > min && numero < max && inclusivo == true){
        return true
    }else{
        return false
    };
};

console.log(estaEntre(60, 50, 100, true));