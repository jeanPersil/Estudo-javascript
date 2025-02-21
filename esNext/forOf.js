const array = ["Jean", "Lucas", "Pereira"];

function recebeArray(array) {
  for (let nome of array) {
    if (nome === "Jean") {
      console.log("Muito foda");
    }
  }
}

console.log(recebeArray(array));
