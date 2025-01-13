function compras(trabalho1, trabalho2) {
  const comprarSoverte = trabalho1 || trabalho2;
  const comprarTV52 = trabalho1 && trabalho2;
  const comprarTV32 = trabalho1 != trabalho2;
  const manterSaudavel = !comprarSoverte;

  return { comprarSoverte, comprarTV52, comprarTV32, manterSaudavel };
}

console.log(compras(true, true));
console.log(compras(false, true));
console.log(compras(false, false));


