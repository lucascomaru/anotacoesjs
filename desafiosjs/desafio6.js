let idade = 5;

if (idade <= 12) {
    console.log(`Criança de 0 a 12 anos. Você tem  ${idade} anos`);
} else if (idade >= 13 && idade <= 17) {
    console.log(`Adolescente de 13 a 17 anos. Você tem ${idade} anos`);
} else if (idade >= 18 && idade <= 59) {
    console.log(`Adulto de 18 a 59 anos. Você tem ${idade} anos`);
} else {
    console.log(`Idoso de 60 anos ou mais. Você tem ${idade} anos`);
}
