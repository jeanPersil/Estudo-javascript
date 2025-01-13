function aleat() {
  let numero;
  do {
    console.log(`Numero: ${numero}`);
    numero = Math.floor(Math.random() * 100);
  } while (numero !== 50);

  console.log(`O numero final chegou: ${numero}`)
}

aleat();
