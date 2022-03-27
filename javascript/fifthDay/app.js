let frutas = [];
let legumes = [];
let laticinios = [];
let congelados = [];
let doces = [];
let produto = "";

var pergunta = document.getElementById("pergunta");
var perguntaDois = document.getElementById("pergunta2");
var input = document.getElementById("input");
var categoria = document.getElementById("categoria");
var perguntaTres = document.getElementById("pergunta3");
var listaCompras = document.getElementById("listaCompras");
var botaoSim = document.getElementById("botaoSim");
var titulo = document.getElementById("titulo");
var botaoNao = document.getElementById("botaoNao");

function NaoContinuar() {
    Imprimir();          
}

function Continuar() {
    perguntaDois.innerHTML = "Qual alimento você deseja inserir? ";    

    input.innerHTML = "<input id='produto' type='text' placeholder='Insira o alimento'></input><button type='submit' onclick='Confirmar()'>Ok</button> "
    }

    function Confirmar() {
        perguntaTres.innerHTML = "Qual categoria o alimento se encaixa?"
               
        categoria.innerHTML = "<button type='submit' onclick='InserirFrutas()'>Frutas</button> <button type='submit' onclick='InserirLegumes()'>Legumes</button> <button type='submit' onclick='InserirLaticinios()'>Laticínios</button> <button type='submit' onclick='InserirCongelados()'>Congelados</button> <button type='submit' onclick='InserirDoces()'>Doces</button>"        
    }

    function InserirFrutas() {
        var produto = document.getElementById("produto").value;        
        frutas.push(produto);
        pergunta.innerHTML = "Gostaria de continuar? "
        perguntaTres.innerHTML = "";
        categoria.innerHTML = "";
        return;
    }

    function InserirLegumes() {
        var produto = document.getElementById("produto").value;        
        legumes.push(produto);
        perguntaTres.innerHTML = "";
        categoria.innerHTML = "";
        pergunta.innerHTML = "Gostaria de continuar? "        
        return;
    }

    function InserirLaticinios() {
        var produto = document.getElementById("produto").value;        
        laticinios.push(produto);
        pergunta.innerHTML = "Gostaria de continuar? "
        perguntaTres.innerHTML = "";
        categoria.innerHTML = "";
        return;
    }

    function InserirCongelados() {
        var produto = document.getElementById("produto").value;        
        congelados.push(produto);
        pergunta.innerHTML = "Gostaria de continuar? "
        perguntaTres.innerHTML = "";
        categoria.innerHTML = "";
        return;
    }

    function InserirDoces() {
        var produto = document.getElementById("produto").value;        
        doces.push(produto);
        pergunta.innerHTML = "Gostaria de continuar?"
        perguntaTres.innerHTML = "";
        categoria.innerHTML = "";        
        return;
    }  

    function Imprimir() {
        pergunta.innerHTML = "";
        perguntaDois.innerHTML = "";
        input.innerHTML = "";
        perguntaTres.innerHTML = "";
        categoria.innerHTML = "";
        titulo.innerHTML = "";
        botaoSim.innerHTML = "";
        botaoNao.innerHTML = "";      

        pergunta.innerHTML = `<h2>Lista de compras:</h2><h4>Frutas: ${frutas.join(",  ")} <br><br> Legumes: ${legumes.join(", ")}<br><br> Laticínios: ${laticinios.join(", ")}<br><br> Congelados: ${congelados.join(", ")}<br><br> Doces: ${doces.join(", ")}</h4>`;
    }



    
    

    
   
