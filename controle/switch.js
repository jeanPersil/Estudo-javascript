function aprov(n1, n2, n3) {
  let res = (n1 + n2 + n3) / 3;

  switch (Math.floor(res)) {
    case (7, 8, 9, 10): {
      return console.log("Voce foi aprovado!");
      break;
    }
    case (4, 5, 6): {
      return console.log("Voce esta de recuperacao!");
      break;
    }
    case (0, 1, 2, 3): {
      return console.log("Voce esta de reprovado!");
      break;
    }
  }
}
aprov(8, 9, 9);
