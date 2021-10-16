let valor = document.getElementById("txtNumero");
let boton = document.getElementById("btnNumero");
let marco1 = document.getElementById('marco');
let sonPerfectos = [];
boton.addEventListener('click', esPerfectoClick);

function esPerfecto(numero) {
  let perfecto = 0;
  let contador = 2;
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

function esPerfectoClick() {

  try {
    let numero = parseInt(valor.value);
  esPerfecto(numero);
  marco1.innerHTML += `<h3>Los numeros perfectos que se encuentran dentro de tu numero son: <br/> <br/> ${sonPerfectos} </h3>`
  } catch (error) {
    marco1.innerHTML += `<p>Error: ${error.message} </p>`
  }
}




