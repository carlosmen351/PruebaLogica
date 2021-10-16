let numero;
let perfecto = 0;
let contador = 2;
let sonPerfectos = [];

function esPerfecto(numero) {
  if (typeof numero !== 'number' || !Number.isInteger(numero) || numero <= 0) {
    throw TypeError('El dato que ingresaste debe ser un numero entero positivo')
  }
  while (contador <= numero) {
    if (numero % contador == 0) {
      perfecto = perfecto += (numero / contador);
    }
    if (contador == 6 && contador != numero) {
      sonPerfectos.push(contador);
    };
    if (contador == 28 && contador != numero) {
      sonPerfectos.push(contador);
    };
    if (contador == 496 && contador != numero) {
      sonPerfectos.push(contador);
    };
    if (contador == 8128 && contador != numero) {
      sonPerfectos.push(contador);
    };
    if (contador == 33550336 && contador != numero) {
      sonPerfectos.push(contador);
    };
    contador++;
  };
  if (perfecto == numero) {
    sonPerfectos.push(perfecto);
  }
};

try {
  esPerfecto(33550337);
  console.log(`Los numeros perfectos que hay en tu numero son: ${sonPerfectos}`)
} catch (error) {
  console.log(`Error: ${error.message}`)
}