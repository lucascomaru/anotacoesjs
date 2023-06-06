let N = 20;

function calcularPrimo(){
    for(let i = 1; i < N; i++){
        let primo = true;
        for(let j =2; j < i; j++){
            if(i % j == 0){
                primo = false;
                break
            }
        }
        if (primo){
            console.log(i);
        }

    }
}
calcularPrimo();