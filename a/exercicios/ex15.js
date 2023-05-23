/* 15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.*/

let revenda = 'Sedans'

switch (revenda) {
    case revenda='Hatch':
        console.log('Compra efetuada com Sucesso!')
        break;
    case revenda='Sedans':
    console.log('Tem certeza que não prefere esse modelo?')
    break;
    case revenda='Motocicletas':
    console.log('Tem certeza que não prefere esse modelo?')
    break;
    case revenda='Caminhonetes':
    console.log('Tem certeza que não prefere esse modelo?')
    break;

    default:
        revenda = 'Não trabalhamos com este tipo de automóvel aqui! '
        break;
}

console.log(revenda)