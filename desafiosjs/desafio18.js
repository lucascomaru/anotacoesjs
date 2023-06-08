function inverterString(string){
    string_invertida = string.split("").reverse().join("")
    return string_invertida
}

console.log(inverterString("Roma é amor"))