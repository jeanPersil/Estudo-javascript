function retornarArray(elemento, index) {
  let array = [];

  for (let i = 0; i < index; i++) {
    array.push(elemento);
  }
  return array;
}

console.log(retornarArray(5, 3));
