const container = document.querySelector(".container-animacao");

function animacaoMain() {
    imgJogador("img/fotoMbappe.jpg");
    nomeJogador("Kylian Sanmi Mbappé Lottin");

    /*setTimeout(() => {
        resetAnimacao();
    }, 60*1000);*/

}

function imgJogador(pathFoto) {
    let img = document.createElement("img");
    img.setAttribute("src", pathFoto);
    img.setAttribute("alt", "Imagem " + pathFoto);
    img.classList.add("imagem-jogador");

    let dinamicDivImg = document.createElement("div");
    dinamicDivImg.classList.add("dinamic-div-img");

    let backgroundImg = document.createElement("div");
    backgroundImg.classList.add("back-img-jogador");

    backgroundImg.appendChild(img);
    dinamicDivImg.appendChild(backgroundImg)
    container.appendChild(dinamicDivImg);
}

/*terminar funcao nomeJogador*/ 
function nomeJogador(nome) {
    let divNome = document.createElement("div");
    divNome.classList.add("div-nome");
    divNome.textContent = nome;

    container.appendChild(divNome);
}


function resetAnimacao() {
    container.innerHTML = "";
}
