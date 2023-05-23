let diaDaSemana = 7
let diaSemana

switch (diaDaSemana) {
    case 1:
        diaSemana = 'Domingo - Final de semana'
        break;
    case 2:
        diaSemana = 'Segunda - Dia útil'
        break;
    case 3:
        diaSemana = 'Terça - Dia útil'
    break;
    case 4:
        diaSemana = 'Quarta - Dia útil'
    break;
    case 5:
        diaSemana = 'Quinta - Dia útil'
    break;
    case 6:
        diaSemana = 'Sexta - Dia útil'
    break;
    case 7:
        diaSemana = 'Sábado - Final de semana'
    break;

    default:
        diaSemana = 'Dia inválido'
        break;
}

console.log(diaSemana)