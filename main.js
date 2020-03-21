
const botao = document.getElementById('botao-calc');

const calcCarne = (pessoas, horas) => {
    const x = (50 * pessoas) * horas;
    return `${x} gramas`; 
};

const calcVeg = (pessoas, horas) => {
    const x = (50 * pessoas) * horas;
    return `${x} gramas`;
};

const calcRefri = (pessoas, horas) => {
    const x = (100 * pessoas) * horas;
    return `${x} militros`;
};

const calcCerveja = (pessoas, horas) => {
    const x = (365 * pessoas) * horas;
    return `${x} militros`;
};

function calcTotal() {
    const carnivoros = document.getElementById('input-carnivoros').value;

    const vegetarianos = document.getElementById('input-vegetarianos').value;

    const horas = document.getElementById('input-horas').value;

    const pessoas = carnivoros + vegetarianos;

    document.getElementById('qtd-carne').innerHTML = calcCarne(carnivoros, horas);
    document.getElementById('qtd-vegetais').innerHTML = calcVeg(vegetarianos, horas);
    document.getElementById('qtd-refri').innerHTML = calcRefri(pessoas, horas);
    document.getElementById('qtd-cerveja').innerHTML = calcCerveja(pessoas, horas);
}


botao.addEventListener('click', calcTotal);