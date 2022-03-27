const cidade = prompt("Você gosta de Roma ou Paris? ");
const elementoImg = document.getElementById("imagem");

if (cidade == "Roma"){    
    elementoImg.innerHTML = "<img src=https://th.bing.com/th/id/OIP.lG36EnjNUlVqCdi3yK_HFwHaE8?pid=ImgDet&rs=1 >";
}
else if (cidade == "Paris") {
    elementoImg.innerHTML = "<img src='https://spguia.melhoresdestinos.com.br/system/fotos_local/fotos/775/show/torre-eiffel-iluminada.jpg' width='400px' height='600px' >";

}
else {
    alert("Você não digitou nenhuma cidade válida")
}