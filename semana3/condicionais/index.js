/*Exercícios de interpretação de código

EXERCICIO 1
===========

Qual o teste que ele realiza?
R: Checa se o resto da divisão por 2 resulta em 0

Para que tipos de números ele imprime no console "Passou no teste"?
R: números pares

Para que tipos de números a mensagem é "Não passou no teste"? 
R: números ímpares


EXERCICIO 2
===========

a. Para que serve o código acima?
R: Para checar o preço decada fruta

b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
R: O preço da fruta maçã é R$2.25

c. Considere que um usuário queira comprar uma `Pêra`, 
qual seria a mensagem impressa no console se retirássemos o `break` que está logo 
acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
R: O preço da fruta Pêra é R$ 5



EXERCICIO 3
===========

a. O que a primeira linha está fazendo?
R: A linha está declarando que é pra digitar o primeiro número

b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
R: Se o número fosse 10 msg seria Esse número passou no teste. Se fosse -10 a msg seria como não definida.

c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
Sim, haverá erro porque o let está dentro do bloco.

*/

/*Exercícios de escrita de código

EXERCICIO 4
===========

Vamos criar programas que lidem com entradas do usuário! Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

1. Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
2. Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para 
isso.
3. Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
*/


let idadeUsuario = prompt('Digite sua idade:')
idade = (Number(idadeUsuario))
console.log("Idade do usuário é", idade) 
{
if(idade >=18) 
console.log ('Você pode dirigir')
else if(idade <18)
    console.log ('você não pode dirigir')}
 

/*

//EXERCICIO 5

let Turno = prompt('Qual seu turno? Digite M para Matutino, V para Vespertino ou N para Noturno')

turnoMatutino = M 
turnoVerspertino = V  
turnoNoturno = N
{
    if(turnoMatutino)
console.log('Bom dia!')
else if(turnoVerspertino)
console.log('Boa tarde')
}



/*

EXERCICIO 6



EXERCICIO 7
*/


