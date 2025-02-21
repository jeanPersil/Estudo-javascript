function falarDepoisDe(segundos, frase) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(frase);
    }, segundos * 1000);
  });
}

falarDepoisDe(2, "To pegando legal").then((frase) => console.log(frase));
