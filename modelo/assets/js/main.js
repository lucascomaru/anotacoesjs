function calculadoraIMC() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const pesoInput = form.querySelector('.peso').value;
        const alturaInput = form.querySelector('.altura').value / 100;

        const calcularIMC = pesoInput / (alturaInput * alturaInput);

        resultado.innerHTML = `<div>Seu IMC é de ${calcularIMC.toFixed(
            2
        )}</div>`;
    }

    const botao = document.getElementById('botao');
    botao.addEventListener('click', recebeEventoForm);
}

calculadoraIMC();
