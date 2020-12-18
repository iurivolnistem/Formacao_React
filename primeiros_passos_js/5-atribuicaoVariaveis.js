console.log("Atribuição de Variáveis");

const idade = 21;
// const nome = "Iuri";
let nome = "Iuri";
const sobrenome = "Volnistem";

// console.log(nome + " " + sobrenome);
console.log(nome, sobrenome);
console.log(`Meu nome é ${nome} ${sobrenome}`); //utilização de interpolação com a crase ao invés de concatenar as strings

// nome = nome + sobrenome; isso não acontece porque a declaração da variavel é uma constante e não pode ser atribuida novamente
nome = nome + sobrenome;

console.log(nome);