const nome = prompt("Qual o seu nome? ");
const idade = prompt("Quantos anos você tem? ");
const linguagem = prompt("Qual lingugem de programação você está estudando?");

const msg = alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

const resposta = prompt(`Você gosta de estudar ${linguagem}? Digite 1 para Sim ou 2 para Não`);

if (resposta == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
}

if(resposta == 2){
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
}
