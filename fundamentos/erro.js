function imprimirNome(obj) {
  try {
    console.log(obj.nome.toUpperCase() + "!!");
  } catch (e) {
    throw new Error("...");
    throw {
      nome: nome.name,
      msg: erro.message,
    };
  } finally {
    console.log("final");
  }
}

const obj = { name: "roberto" };

imprimirNome(obj);
