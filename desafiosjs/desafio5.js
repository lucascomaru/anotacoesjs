function verificarDivisivel(num1, num2) {
    if (num1 % num2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(verificarDivisivel(4, 2));
