//var a
console.log("a =", a);
var a = 2;  
/* 
O que acontece basicamente é que a declaração primeiro (VAR A) é jogada para o inicio do codigo, dessa forma na primeira chamada a vale como undefined.
Por isso que não ocorre um erro de que a variavel nao existe. Ela ja existe, mas não inicializada,
foi inicializada somente na linha 3 
*/
console.log("a =", a);

//---------------------------------------------

console.log("b =", b);

/* let ja não tem este comportamento, let da erro */

let b = 2;

console.log("b =", b);