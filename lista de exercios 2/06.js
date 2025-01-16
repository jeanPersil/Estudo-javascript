function multiplicarSemOperador(n1, n2) {
  let mult = 0;
  for (let i = 0; i < n2; i++) {
    mult += n1;
  }
  return mult;
}

console.log(multiplicarSemOperador(10, 5));
