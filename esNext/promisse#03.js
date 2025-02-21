function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log("executando promesse");
      resolve("Vish");
    }, tempo * 1000);
  });
}

esperarPor(2).then((dado) => console.log(dado));
