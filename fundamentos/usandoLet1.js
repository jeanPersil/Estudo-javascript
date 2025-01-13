let numero = 2;
{
  let numero = 1;
  console.log(`Dentro: ${numero}`);
}

console.log(`Fora: ${numero}`);

/**
 * Variaveis definidas como VAR tem:
 * Escopo GLOBAL
 * Escopo de FUNÇÃO
 
 * Ja variaveis definias como LET tem:
 * Escopo GLOBAL
 * Escopo de FUNÇÃO
 * Escopo de BLOCO
 */