// -------------EXERCICIO DE INTEREPETAÇÃO DE CODIGO------------------------ //
/*

Leia o código abaixo:

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
```

a. O que vai ser impresso no console?
Resposta: 
10
50

b. O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a 
função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?


EXERCÍCIO 2

Leia o código abaixo:


let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Soter"];

const outraFuncao = function(array) {
	for (let i = 0; i < 2; i++) {
		console.log(array[i])
	}
}

outraFuncao(arrayDeNomes["Amanda", "Caio"])
```

a. Explicite quais são as saídas impressas no console
Resposta:
Darvas
Carlos

b. Se `arrayDeNomes` mudasse de valor para `["Amanda", "Caio"]`, o que vai ser impresso no console?
Resposta:
Amanda
Caio


EXERCÍCIO 3

O código abaixo mostra uma função que recebe um array e devolve outro array. 
Explique em poucas palavras o que ela faz e sugira um nome melhor para ela!

```jsx
	const metodo = (array) => {
  let arrayFinal = [];

  for (let x of array) {
		if (x % 2 === 0) {
	    arrayFinal.push(x * x)
		}
  }

  return arrayFinal;
}

*/

function minhaFuncao(variavel) {
	return variavel * 5
}

minhaFuncao(2)

minhaFuncao(10)