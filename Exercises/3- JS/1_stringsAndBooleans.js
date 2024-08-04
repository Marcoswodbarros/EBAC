// Strings and booleans
let nome = 'Marcos';
let nascimento = 1995;

let anoAtual = new Date();
let ano = anoAtual.getFullYear();

let idade = ano - nascimento;

if (idade > 18) {
    console.log(` ${nome}, você já tem ${idade} anos.\n Logo, já esta apto para tirar a carteira de motorista.`);

} else {
    console.log(`${nome}, como você ainda é menor de idade, não poderá tirar a carteira de motorista.`);
}
