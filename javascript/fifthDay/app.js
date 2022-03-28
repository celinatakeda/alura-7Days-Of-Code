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
var titulo = document.getElementById("titulo");
var perguntaQuatro = document.getElementById("pergunta4");
var remover = document.getElementById("inputRemover");
var voltar = document.getElementById("voltar");

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
        document.getElementById("botaoSim").style.display = 'none';
        document.getElementById("botaoNao").style.display = 'none'; 
        document.getElementById("botaoRemover").style.display = 'none';     

        pergunta.innerHTML = `<h2>Lista de compras:</h2><h5>Frutas: ${frutas.join(",  ")} <br><br> Legumes: ${legumes.join(", ")}<br><br>Laticínios: ${laticinios.join(", ")}<br><br> Congelados: ${congelados.join(", ")}<br><br> Doces: ${doces.join(", ")}</h5>`;
        voltar.innerHTML = "<a href='index.html': history.go(-1)'>Go Back</a>"        
    }  

    function Remover() {        
        Imprimir(); 
        perguntaQuatro.innerHTML = "Qual produto gostaria de remover? "       
        remover.innerHTML = "<input id='alimento' type='text' placeholder='produto'></input><button type='submit' onclick='Confirma()'>Ok</button> "
    }

    function Confirma() {
        perguntaTres.innerHTML = "Qual categoria o alimento se encaixa?"
               
        categoria.innerHTML = "<button type='submit' onclick='RemoverFrutas()'>Frutas</button> <button type='submit' onclick='RemoverLegumes()'>Legumes</button> <button type='submit' onclick='RemoverLaticinios()'>Laticínios</button> <button type='submit' onclick='RemoverCongelados()'>Congelados</button> <button type='submit' onclick='RemoverDoces()'>Doces</button>"
    }

    function RemoverFrutas() {
        var alimento = document.getElementById("alimento").value;
        var pos = frutas.indexOf(alimento);

        if (pos == -1) {
            alert("Não foi possível encontrar o item dentro da lista!");
        }

        frutas.splice(pos, 1);   
        alert("Produto removido com sucesso!");     
        Imprimir()
        return;
    }

    function RemoverLegumes() {
        var alimento = document.getElementById("alimento").value;
        var pos = legumes.indexOf(alimento);

        if (pos == -1) {
            alert("Não foi possível encontrar o item dentro da lista!");
        }

        legumes.splice(pos, 1);   
        alert("Produto removido com sucesso!");     
        Imprimir()
        return;
    }

    function RemoverLaticinios() {
        var alimento = document.getElementById("alimento").value;
        var pos = laticinios.indexOf(alimento);

        if (pos == -1) {
            alert("Não foi possível encontrar o item dentro da lista!");
        }

        laticinios.splice(pos, 1);   
        alert("Produto removido com sucesso!");     
        Imprimir()
        return;
    }

    function RemoverCongelados() {
        var alimento = document.getElementById("alimento").value;
        var pos = congelados.indexOf(alimento);

        if (pos == -1) {
            alert("Não foi possível encontrar o item dentro da lista!");
        }

        congelados.splice(pos, 1);   
        alert("Produto removido com sucesso!");     
        Imprimir()
        return;
    }

    function RemoverDoces() {
        var alimento = document.getElementById("alimento").value;
        var pos = doces.indexOf(alimento);

        if (pos == -1) {
            alert("Não foi possível encontrar o item dentro da lista!");
        }

        doces.splice(pos, 1);   
        alert("Produto removido com sucesso!");     
        Imprimir()
        return;
    }



    
    

    
   
