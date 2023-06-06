class Animal {
    constructor(nome){
        this.nome = nome;
    }
    dizerNome(){
        console.log(`Meu nome é ${this.nome}`);
    }
}
class Cachorro extends Animal {
    latir() {
      console.log('Au Au!');
    }
  
    dizerOla() {
      console.log('Olá!');
    }
  }


const meuCachorro = new Cachorro('Rex')
meuCachorro.dizerNome();
meuCachorro.latir();
meuCachorro.dizerOla();