## Capturando dados do usuário
Tanto o alert() quanto o prompt() são usados para criar caixas de diálogo e interagir com o usuário, mas eles são diferentes entre si.

O alert() é usado para mostrar uma mensagem simples ao usuário.

Exemplo:

alert("Olá, pessoal!");

Já o prompt() precisa que o usuário insira algum valor, que você poderá manipular.

Exemplo:

const cidade = prompt("Digite a sua cidade:");
const msg = `Você é de ${cidade}!`;
alert(msg);