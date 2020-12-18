console.log(`Trabalhando com condicionais`);
//operadores lógicos < > = <= >=

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const acompanhado = false;

console.log("Destinos possíveis");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//   console.log("Comprador maior de idade");
//   listaDeDestinos.splice(1, 1);
// } else if(acompanhado){
//   console.log("Comprador acompanhado");
//   listaDeDestinos.splice(1, 1);
// }else{
//     console.log("Comprador menor de idade e não está acompanhado");
// }


if (idadeComprador >= 18 || acompanhado) {
    console.log("Pode comprar");
    listaDeDestinos.splice(1, 1);
  }else{
      console.log("Comprador menor de idade e não está acompanhado");
  }

console.log(listaDeDestinos);


