console.log(`Trabalhando com listas`);
const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (
    idadeComprador >= 18 
    || estaAcompanhada
) {
    console.log("Boa viagem!!");
    listaDeDestinos.splice(2,1); 
} else {
    console.log("Não é maior de idade e não posso vender.");
}

console.log("Embarque: \n\n");
if (
    idadeComprador > 18
    && temPassagemComprada
) {
    console.log("Boa viagem");
} else {
    console.log("Você não pode embarcar");
}

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);

