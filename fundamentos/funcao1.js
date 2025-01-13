function imprimirSoma(a, b) 
{
  console.log(a + b);
}
imprimirSoma(5, 5)

imprimirSoma(5)

function soma (a, b = 0){
    return a + b;
}

console.log (soma(2));