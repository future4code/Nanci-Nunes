/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 * 
 * NOTA: Estou enviando desta forma pra não ficar com falta. Porém, após
 * o envio vou começar a (re)assistir todas as aulas dadas nesta semana sobre js
 * e tentar fazer o projeto no final de semana, pois como disse nos feedbacks, na aula 
 * compreendo o conteúdo exposto, porém na prática (com os exercícios propostos) fica difícil.
 * 
 */

if(confirm("quer iniciar uma nova rodada?")){
   const carta = comprarCarta()
   const jog1 = comprarCarta()
   const jog2 = comprarCarta()
   const comp1 = comprarCarta ()
   const comp2 = comprarCarta ()

   const somaJog = jog1.valor + jog2.valor
   const somacomp = comp1.texto + comp2.texto

   console.log("Jogador: ")
}