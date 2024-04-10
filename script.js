let nuns = document.querySelector('.numArray');
let btnAdicionar = document.getElementById('btn-adicionar');
let btnFinalizar = document.getElementById('btn-finalizar');
let areaAnalise = document.getElementById('container-resultado');
let nunsLista = [];

function inLista(n, l) {
    if (l.indexOf(n) == -1) {
        return true;
    } else {
        return false;
    }
}

btnAdicionar.onclick = () => {
    if ((nuns.value >= 1 && nuns.value <= 100) && inLista(nuns.value, nunsLista)) {
        nunsLista.push(nuns.value);

        document.querySelector('.container-adicionados').innerHTML = nunsLista.join(", ");
        document.querySelector('.container-adicionados').style.display = "block";
        areaAnalise.innerHTML = '';
    }
    else {
        document.getElementById('modalBtnAdicionar').showModal();
    }

    nuns.value = '';
    nuns.focus();
}

btnFinalizar.onclick = () => {
    if (nunsLista.length == 0) {
        document.getElementById('modalBtnFinalizar').showModal();
    } else {

        if (nunsLista.length == 1) {
            areaAnalise.innerHTML = `<p>Ao todo, temos ${nunsLista.length} número cadastrado.</p><br>`;
        } else {
            areaAnalise.innerHTML = `<p>Ao todo, temos ${nunsLista.length} números cadastrados.</p><br>`;
        }

        let menor = nunsLista.reduce((prevValor, valorAtual) => { return Math.min(prevValor, valorAtual) }
        );

        let maior = nunsLista.reduce((prevValor, valorAtual) => { return Math.max(prevValor, valorAtual) });

        let soma = nunsLista.map(Number).reduce((prevValor, valorAtual) => prevValor + valorAtual);

        let media = soma / nunsLista.length;

        areaAnalise.innerHTML += `
        <p>O menor valor informado foi ${menor}.</p><br>
        <p>O maior valor informado foi ${maior}.</p><br>
        <p>A soma de todos os valores é igual a ${soma}.</p><br>
        <p>E a média equivale a ${media.toFixed(2)}.</p>`;
    }
}

document.getElementById('btnModalAdicionar').addEventListener('click', () => {
    document.getElementById('modalBtnAdicionar').close();
    nuns.focus();
})

document.getElementById('btnModalFinalizar').addEventListener('click', () => {
    document.getElementById('modalBtnFinalizar').close();
    nuns.focus();
})