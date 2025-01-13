const valores = ["JEAN", "LUCAS", "PEREIRA"];

console.log(valores[0], valores[2], valores[50]);

valores[3] = "SILVA";

console.log(valores.length); // mostra o tamanho da lista

valores.push(5); // adiciona elementos ao array

console.log(valores);

valores.pop(); // Apaga o ultimo elemento do array

console.log(valores.length);

delete valores[0]; // faz a exclusão de um item do array com base na sua posição

console.log(valores.length);
console.log(valores);
