let notas = [];

function adicionarNota() {
    let input = document.getElementById('nota');
    let valor = Number(input.value);

    if (input.value === '') {
        alert('Digite uma nota!');
        return;
    }

    notas.push(valor);
    atualizarListaNotas();
    input.value = '';
}

function atualizarListaNotas() {
    let lista = document.getElementById('notas');
    lista.innerHTML = '';

    for (let i = 0; i < notas.length; i++) {
        let li = document.createElement('li');
        li.textContent = notas[i];
        lista.appendChild(li);
    }
}

function calcularMedia() {
    if (notas.length === 0) {
        document.getElementById('resultado').textContent = 'Adicione notas primeiro';
        return;
    }

    let soma = 0;

    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }

    let media = soma / notas.length;

    if (media >= 6) {
        document.getElementById('resultado').textContent = 'APROVADO';
    } else {
        document.getElementById('resultado').textContent = 'REPROVADO';
    }
}