const area = prompt("Qual área você gostaria de seguir (frontend ou backend)? ");

if (area == "frontend") {
    const tecnologia = prompt("Gostaria de aprender react ou vue? ");
}

if(area == "backend") {
    const tecnologia = prompt("Gostaria de aprender C# ou Java? ");
}

const especializacao = prompt("Escolha a área que gostaria de continuar seguindo (frontend, backend ou fullstack? ");

if (especializacao == "frontend") {
    alert("Que ótimo!")
}

if (especializacao == "backend") {
    alert("Legal!")
}

if (especializacao == "fullstack") {
    alert("Muito bom!")
}

const resposta = prompt("Tem mais alguma tecnologia que você gostaria aprender? ");

while (resposta == "sim") {   
    const tec = prompt("Qual tecnologia gostaria de aprender ou conhecer? ")
    alert("Que ótimo!!")
    const resposta = prompt("Tem mais alguma tecnologia que você gostaria aprender? ");
    if (resposta != "sim") {
        break;
    }
}

alert("Continue assim!!")



