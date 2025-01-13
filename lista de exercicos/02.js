function formarTriangulo({ a = 0, b = 0, c = 0 }) {
    if (a + b < c || a + b == c) {
      console.log("Não é possivel formar um triangulo");
    } else if (a == b && b == c) {
      console.log("Seu triangulo é EQUILATERO");
    } else if (a == b || b == c || c == a) {
      console.log("Seu triangulo é ISOCELES");
    } else if (a != b && b != c && c != a) {
      console.log("seu triangulo é ESCALENO");
    }
  }
  
  formarTriangulo({ a: 5, b: 5, c: 5 });
  