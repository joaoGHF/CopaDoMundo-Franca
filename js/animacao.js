const container = document.querySelector(".container-animacao");
let tempoExecucao = 23 * 1000;
let tempoAttConquistas = 800;
let delay = 4000;

const conquistasMbappe = [
    "• 1x Campeão do Mundo",
    "   2018 - França",
    " ",
    "• 1x Futebolista do ano",
    "   2018 - França",
    " ",
    "• 1x Jogador da época",
    "   18/19	FC Paris Saint-Germain",
    " ",
    "• 3x O melhor jogador jovem",
    "   2018 - Copa do Mundo de 2018",
    "   2018 e 2017 - Ligue 1",
    " ",
    "• 8x Artilheiro",
    "   21/22 - Ligue 1 - 28 Gols",
    "   21/22 - Coupe de France - 5 Gols",
    "   20/21 - Ligue 1 - 27 Gols",
    "   20/21 - Coupe de France - 7 Gols",
    "   20/21 - UEFA Nations League Finals - 2 Gols",
    "   19/20 - Ligue1 - 18 Gols",
    "   18/19 - Ligue 1 - 33 Gols",
    "   15/16 - Coupe Gambardella - 3 Gols",
    " "
] /*21*/

const conquistasHugo = [
    "• 1x Campeão do Mundo",
    "2018 - França",
    " ",
    "• 3x Participante na Copa do Mundo",
    "2018 - França",
    "2014 - França",
    "2010 - França",
    " ",
    "• 1x Vice-Campeão da Europa",
    "2016 - França",
    " ",
    "• 1x Finalista da Liga dos Campeões",
    "18/19 - Tottenham Hotspur",
    " ",
    "• 1x Vencedor UEFA Nations League",
    "2021 - UEFA Nations League Finals",
    " ",
    "• 1x Campeão da Europa Sub19",
    "2005 - França Sub19",
    " "
] /*19*/

const conquistasZidane = [
    "• 1x Campeão do Mundo",
    "1998 - França",
    " ",
    "• 1x Vencedor do Bola de Ouro (1998)",
    " ",
    "• 3x Melhor jogador do mundo",
    "2003 - Real Madrid CF",
    "2000 e 1998 - Juventus FC",
    " ",
    "• 3x Participante no Campeonato do Mundo",
    "- (2006/2002/1998) pela França",
    " ",
    "• 1x Vencedor da Champions-League",
    "01/02 - Real Madrid CF",
    " ",
    "• 1x O melhor jogador jovem",
    "1994 - Ligue 1	Division 1",
    " ",
    "• 1x Vice-Campeão do Mundo - 2006 - França",
    " ",
    "• 3x Futebolista do ano",
    "1998 e 2002 - França",
    "2001 - Itália",
    " ",
] /*23*/

const conquistasBenzema = [
    "•1x Vencedor Bola de Ouro (2022)",
    "",
    "• 5x Vencedor da Champions-League",
    "21/22 Real Madrid CF",
    "13/14, 15/16, 16/17 e 17/18 - Real Madrid CF",
    "",
    "• 4x Futebolista do ano",
    "2011, 2012, 2014 e 2021 - França",
    "",
    "• 4x Campeão do Mundo FIFA - Mundial de Clubes",
    "2014, 2016, 2017 e 2018 - Real Madrid CF",
    "",
    "• 1x Participante na Copa do Mundo",
    "2014 - França",
    "",
    "• 5x Artilheiro",
    "21/22 - LaLiga - 27 Gols",
    "21/22 - Liga dos Campeões - 15 Gols",
    "21/22 - Supercopa - 2 Gols",
    "07/08 - Ligue 1 - 20 Gols",
    "07/08 - Copa da França - 6 Gols",
] /*20*/

let dicDados = {
    0: {
        "foto": "img/fotoMbappe.jpg",
        "nome": "Kylian Sanmi Mbappé Lottin",
        "gols": "Marcou 243 gols em sua carreira",
        "anos": "☆ 20/12/1998 | Atualmente 23 anos",
        "conquistas": conquistasMbappe,
    },

    1: {
        "foto": "img/fotoHugo.jpeg",
        "nome": "Hugo Lloris",
        "gols": "245 jogos sem gols sofridos",
        "anos": "☆ 26/12/1986 | Atualmente 35 anos",
        "conquistas": conquistasHugo,
    },

    2: {
        "foto": "img/fotoZidane.jpg",
        "nome": "Zinédine Zidane",
        "gols": "Marcou 156 gols em sua carreira",
        "anos": "☆ 23/06/1972 | Atualmente 50 anos",
        "conquistas": conquistasZidane,
    },

    3: {
        "foto": "img/fotoBenzema.jpg",
        "nome": "Karim Benzema",
        "gols": "Marcou 419 gols em sua carreira",
        "anos": "☆ 19/12/1987 | Atualmente 34 anos",
        "conquistas": conquistasBenzema,
    },


}

let index = 0;
function animacaoMain() {
    imgJogador(dicDados[index].foto);
    nomeJogador(dicDados[index].nome);
    golsJogador(dicDados[index].gols);
    anosJogador(dicDados[index].anos);
    conquistasJogador(dicDados[index].conquistas);

    setTimeout(() => {
        ocultarElementos()

        setTimeout(() => {
            if (index <= 2) {
                index++;
            } else {
                index = 0;
            }
            animacaoMain()
        }, 1200);

    }, tempoExecucao);
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


function ocultarElementos() {
    let elementos = container.childNodes;
    elementos[0].remove();

    elementos.forEach(elemento => {
        elemento.classList.add("ocultar-elemento");
        setTimeout(() => {
            elemento.remove()
        }, 1000);
    });
}


function nomeJogador(nome) {
    let dinamicDivNome = document.createElement("div");
    dinamicDivNome.classList.add("dinamic-div-nome")

    let divNome = document.createElement("div");
    divNome.classList.add("div-texto");

    let span = document.createElement("span");
    span.classList.add("nome-jogador");
    span.textContent = nome;

    divNome.appendChild(span);
    dinamicDivNome.appendChild(divNome);
    container.appendChild(dinamicDivNome);
}


function anosJogador(texto) {
    let dinamicDivAnos = document.createElement("div");
    dinamicDivAnos.classList.add("dinamic-div-anos")

    let divAnos = document.createElement("div");
    divAnos.classList.add("div-texto");

    let span = document.createElement("span");
    span.classList.add("anos-jogador");
    span.textContent = texto;

    divAnos.appendChild(span);
    dinamicDivAnos.appendChild(divAnos);
    container.appendChild(dinamicDivAnos);
}


function golsJogador(texto) {
    let dinamicDivGols = document.createElement("div");
    dinamicDivGols.classList.add("dinamic-div-gols")

    let divGols = document.createElement("div");
    divGols.classList.add("div-texto");

    let span = document.createElement("span");
    span.classList.add("gols-jogador");
    span.textContent = texto;

    divGols.appendChild(span);
    dinamicDivGols.appendChild(divGols);
    container.appendChild(dinamicDivGols);
}


function conquistasJogador(lista) {
    let dinamicDivConq = document.createElement("div");
    dinamicDivConq.classList.add("dinamic-div-conquistas")

    let divConq = document.createElement("div");
    divConq.classList.add("div-lista-to-up");

    let div = document.createElement("div");
    div.classList.add("conquistas-jogador");

    lista.forEach(i => {
        div.innerHTML += "<span>" + i + "<br> </span>";
    });

    divConq.appendChild(div);
    dinamicDivConq.appendChild(divConq);
    container.appendChild(dinamicDivConq);

    function atualizarConquistas(tempo, tempoMax) {
        let tempoAtual = 0;

        let intervalAttConq = setInterval(() => {
            let filho1 = div.firstChild;
            let novoFilho = document.createElement("span");

            novoFilho.innerHTML = filho1.innerHTML
            div.appendChild(novoFilho)

            filho1.remove()

            tempoAtual += tempo;
        }, tempo);

        let timeoutAttMax = setTimeout(() => {
            clearInterval(intervalAttConq);
        }, tempoMax);
    }


    setTimeout(() => {
        atualizarConquistas(tempoAttConquistas, tempoExecucao);
    }, delay);
}
