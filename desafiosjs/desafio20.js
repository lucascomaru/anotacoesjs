function palindromo(string) {
    if (string == string.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

console.log(palindromo('radar'));
