let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function mensagemConsole(){
    console.log('O botão foi clicado')

};

function mensagemAlerta() {
    alert('Eu amo JS');
    
};


function nomeCidade() {
    let cidade = prompt('Digite o nome de uma cidade');

    alert(`Estive em ${cidade} e lembrei de você`);
    
};

function soma() {
    let numero1 = parseInt(prompt('Digite primeiro numero'));
    let numero2 = parseInt(prompt('Digite segundo numero'));

    let soma = numero1 + numero2;

    alert(`A soma de ${numero1} + ${numero2} é: ${soma} `);

        
};