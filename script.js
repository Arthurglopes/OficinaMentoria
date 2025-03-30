const nomeAluno = document.querySelector('#nomeAluno');
const primeiraUnidade = document.querySelector('#primeiraUnidade');
const segundaUnidade = document.querySelector('#segundaUnidade');
const adicionarBtn = document.querySelector('#adicionarBtn'); 
const tabela = document.querySelector('table tbody');

function adicionarNota() {
    const media = (Number(primeiraUnidade.value) + Number(segundaUnidade.value)) / 2;
    
   
    if (nomeAluno.value && primeiraUnidade.value && segundaUnidade.value) {
        tabela.innerHTML += `
            <tr>
                <td>${nomeAluno.value}</td>
                <td>${primeiraUnidade.value}</td>
                <td>${segundaUnidade.value}</td>
                <td>${media.toFixed(1)}</td>
                <td style="color:${media < 6 ? 'red' : 'green'};">${media < 6 ? 'Reprovado' : 'Aprovado'}</td>
            </tr>
        `;
    } else {
       
    }

    
    nomeAluno.value = 'Arthur Lopes';
    primeiraUnidade.value = '7';
    segundaUnidade.value = '8';
}

adicionarBtn.addEventListener('click', adicionarNota);
