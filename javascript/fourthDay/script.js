let minimo = 0;
let maximo = 10;
let valor = Math.floor(Math.random() * (maximo - minimo + 1 + minimo));
var tentativas  = 3; 

function Chutar() {
    var valorEscolhido = parseInt(document.getElementById("valor").value);
    var resposta = document.getElementById("resposta");

    while(tentativas <= 3) {
        if (valorEscolhido === valor) {           
            resposta.innerHTML = "Parabéns! Você acertou!"
            return;
        }else {            
            resposta.innerHTML = `Errou! Você tem ${tentativas - 1}`
            tentativas--;             
        }

        if (tentativas == 0) {
            var valorSecreto = document.getElementById("valorSecreto");
            valorSecreto.innerHTML = `Valor secreto é ${valor}`
        }
        return;
    }
}





