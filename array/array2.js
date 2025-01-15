const array = ["primeiro", "Segundo", "terceiro"];
const novoArray = ["JEAN", "Lucas", "Pereira", "Silva"];

array.pop(); // remove o ultimo elememento da lista.

console.log(array);

array.shift(); // remove o primeiro

console.log(array);

array.unshift("jean"); // adiciona um elemento a primeira posicao

console.log(array);

let array2 = novoArray.slice(0, 3);

console.log(array2);
