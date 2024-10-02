1) Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

```js
function imc(altura,peso) {

    return imc = peso / (altura * altura)
        
}

let altura = parseFloat(1.81);
let peso = parseInt(100);


alert('Seu IMC é de: ' + parseFloat(imc(altura,peso).toFixed(2)));
```

2) Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
```js
function calculaFatorial(numero) {

    if (numero < 0) 
        return -1;
    
    else if (numero == 0) 
      return 1;
    
    else {
        //função recursiva
        return (numero * calculaFatorial(numero - 1));

    }
}

alert(calculaFatorial(5));
```

3) Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.


```js
function calculaDolar(valor) {
    let cotacaoDolar = 5.60
    return valor * cotacaoDolar;
    
}

alert('10 reais é igual a: ' +calculaDolar(10)+ ' Dolares')
```

4) Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.


```js
function calularAreaPerimetro(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
  }
  
  let altura = 3; 
  let largura = 5;
  
  calularAreaPerimetro(altura, largura);
  
  ```

  5) Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

```js
function calculaPerimetriRaio(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  }
    
  let raio = 4;
  calculaPerimetriRaio(raio);
  ```

  6) Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

```js
function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  
 let numero = 7;
 tabuada(numero);
 ```