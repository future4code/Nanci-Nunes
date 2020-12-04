/*
**Exercícios de interpretação de código**

EXERCÍCIO 1

O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

Resposta
O código está 
Resultado impresso no console é 10


EXERCÍCIO 2
Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

a. O que vai ser impresso no console?

b. Se eu quisesse acessar o **índice** de cada elemento dessa lista, 
o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

Resposta
a. será impresso no console números maiores que 18:
19
21
23
25
27
38

b. 
colocar o índice [i] =  console.log(numero[i])



*/


