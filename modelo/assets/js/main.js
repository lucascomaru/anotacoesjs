function calculadoraIMC() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const pesoInput = form.querySelector('.peso').value;
        const alturaInput = form.querySelector('.altura').value / 100;

        const calcularIMC = pesoInput / (alturaInput * alturaInput);

        if (calcularIMC < 18.5) {
            resposta = 'Você está abaixo do peso';
        } else if (calcularIMC >= 18.5 && calcularIMC <= 24.9) {
            resposta = 'Peso normal';
        } else if (calcularIMC >= 25 && calcularIMC <= 29.9) {
            resposta = 'Sobrepeso';
        } else if (calcularIMC >= 30 && calcularIMC <= 34.9) {
            resposta = 'Obesidade grau 1';
        } else if (calcularIMC >= 35 && calcularIMC <= 39.9) {
            resposta = 'Obesidade grau 2';
        } else if (calcularIMC >= 40) {
            resposta = 'Obesidade grau 3';
        }

        resultado.innerHTML = `<div>Seu IMC é de ${calcularIMC.toFixed(
            2
        )} - (${resposta})</div>`;
    }

    const botao = document.getElementById('botao');
    botao.addEventListener('click', recebeEventoForm);
}

calculadoraIMC();
