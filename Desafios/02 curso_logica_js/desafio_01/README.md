1) Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

```js
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';
```

2) Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

html
```html
<button onclick="mensagemConsole()" class="button">Console</button>
```
js
```js
function mensagemConsole(){
    console.log('O botão foi clicado')
};
```

3) Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado
html
```html
<button onclick="mensagemAlerta()" class="button">Alert</button>
```
js
```js
function mensagemAlerta() {
    alert('Eu amo JS');   
};

```

4) Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
```html
<button onclick="nomeCidade()" class="button">Prompt</button>
```
js
```js
function nomeCidade() {
    let cidade = prompt('Digite o nome de uma cidade');

    alert(`Estive em ${cidade} e lembrei de você`);
    
};

```

5) Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
```html
<button onclick="soma()" class="button">Soma</button>
```
js
```js
function soma() {
    let numero1 = parseInt(prompt('Digite primeiro numero'));
    let numero2 = parseInt(prompt('Digite segundo numero'));

    let soma = numero1 + numero2;

    alert(`A soma de ${numero1} + ${numero2} é: ${soma} `);

        
};
```


