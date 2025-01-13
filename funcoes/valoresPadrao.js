// Definindo valores padrao

function soma(a, b, c) {
  //caso o valor que esteja dentro das variavies seja false, o valor padrao sera 1
  a = a || 1;
  b = b || 1;
  c = c || 1;

  return a + b + c;
}

console.log(soma(2, 0, 0));

// 3 estrategias também para definir valores padrao
function soma2(a, b, c) {
  a = a !== undefined ? a : 1;
  b = 1 in arguments ? b : 1;
  c = isNaN(c) ? 1 : c;

  return a + b + c;
}

console.log(soma2(2, 0, 0));

// estrategia atualizada do ecma2015 (Nem todos os navegadores suportam)

function soma3(a = 1, b = 2, c = 3) {
  return a + b + c;
}

console.log(soma3(2, 2, 2));
console.log(soma3(2, 0, 0));
