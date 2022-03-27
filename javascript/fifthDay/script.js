const frutas = [];
const laticinios = [];
const congelados = [];
const doces = [];
let perguntaSimNao = prompt(
  "Você deseja adicionar um alimento a sua lista de compras? (responda com 1 para sim ou 2 não)"
);
while (perguntaSimNao === "1") {
  var alimento = prompt("Qual alimento você deseja inserir?");

  var categoria = prompt(
    "Em qual categoria esse alimento se encaixa? (responda 1 = frutas, 2 = laticinios, 3 = congelados ou 4 = doces?)"
  );

  if (categoria === "1") {
    frutas.push(alimento);
  } else if (categoria === "2") {
    laticinios.push(alimento);
  } else if (categoria === "3") {
    congelados.push(alimento);
  } else if (categoria === "4") {
    doces.push(alimento);
  }

  perguntaSimNao = prompt(
    `Você deseja adicionar um alimento a sua lista de compras? (responda com 1 para sim ou 2 para não ou 3 para remover algum elemento da lista)`
  );
}

while (perguntaSimNao === "3") {
  var removerItem = prompt(
    `Você deseja remover um item de qual categoria? (1 = frutas, 2 = laticinios, 3 = congelados, 4 = doces)`
  );

  if (removerItem === "1") {
    const removerFrutas = prompt(
      `Os itens dessa categoria são: ${frutas}. Qual você deseja remover?`
    );
    const iFrutas = frutas.indexOf(removerFrutas);
    frutas.splice(iFrutas, 1);
    alert(`${removerFrutas} foi removido com sucesso!`);
    perguntaSimNao = prompt(
      `Você deseja adicionar um alimento a sua lista de compras? (responda com 1 para sim ou 2 para não ou 3 para remover algum elemento da lista)`
    );
  }
}

if (perguntaSimNao === "2") {
  document.getElementById(
    "listaCompras"
  ).innerHTML = `<h3>Frutas:</h3> ${frutas}<br> <h2>Laticínios:</h2> ${laticinios} <h2>Congelados:</h2>${congelados}<br> <h2>Doces:</h2> <br> ${doces}`;
}
