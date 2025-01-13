function random(min = 0, max = 1000 ) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

const obj = { maximo: 50, minimo: 100 };

console.log(random({ obj }));
console.log(random({ min: 50 }));
console.log(random({ max: 50 }));
console.log(random({}));
console.log(random());

