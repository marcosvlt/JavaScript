1) Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".


```js
let diaDaSemana = prompt("Qual o dia da semana?");

if (diaDaSemana == "Sabado") {
    alert('Bom fim de semana!"');  
  } else if (diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!"');
  } else {
    alert('Boa semana');
  }
```

2) Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

```js
let numero = prompt("Digite um numero");

if (numero >= 0) {
  alert('Numero Positivo');
  
} else {
  alert('Numero Negativo');
  
}
```
3) Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

```js
pontuacao = 200;
if (pontuacao >= 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}

```

4) Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.


```js
let saldo = 900;

alert(`Seu saldo é: R$${Saldo}`);
```

5) Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

```js
let nome = prompt('Qual o seu nome?');

alert(`Boas vindas ${nome}`);
```
