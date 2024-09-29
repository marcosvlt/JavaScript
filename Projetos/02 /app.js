let numeroSecreto = gerarNumeroAleatorio();

function exibirTexto(tag, texto){

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

};

exibirTexto('h1', 'Jogo do número secreto');
exibirTexto('p', 'Escolha um número entre 1 e 10');

function verificarChute(params) {
    
    let chute = document.querySelector('input').value;
    
};

function gerarNumeroAleatorio() {   

    return parseInt(Math.random() * 10 + 1);
    
}


console.log(numeroSecreto);