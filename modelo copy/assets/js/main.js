const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        const data = new Date(segundos * 1000);
        const hora = data.getUTCHours().toString().padStart(2, '0');
        const minutos = data.getUTCMinutes().toString().padStart(2, '0');
        const segundosFormatados = data
            .getUTCSeconds()
            .toString()
            .padStart(2, '0');
        relogio.innerHTML = `${hora}:${minutos}:${segundosFormatados}`;
    }, 1000);
}

document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }
    if (el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }
    if (el.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('pausado');
    }
});
