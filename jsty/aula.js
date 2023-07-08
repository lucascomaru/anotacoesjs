const pessoa1 = {
    nome: 'Lucas',
    sobrenome: 'Comaru',
    idade: 26,

    fala() {
        console.log(
            `${this.nome} ${this.sobrenome} de ${this.idade} anos está falando oi! `
        );
    },
};

pessoa1.fala();

let a = [1, 2, 3, 4];
let b = [...a];

console.log(b);
