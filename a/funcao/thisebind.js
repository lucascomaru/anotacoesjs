const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas : funcional  e 00

const falarDePessoa = pessoa.falar.bind(pessoa) //Bind responsável por amarrar um objeto para que ele seja o dono da execução daquele método
falarDePessoa()