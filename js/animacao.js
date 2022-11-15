const container = document.querySelector(".container-animacao");
let tempoExecucao = 80 * 1000;
let tempoAttConquistas = 800;

const conquistasMbappe = [
    "• 1x Campeão do Mundo",
    "   2018 - França",
    " ",
    "• 5x Campeão de França",
    "   21/22 - FC Paris Saint-Germain",
    "   19/20 - FC Paris Saint-Germain",
    "   18/19 - FC Paris Saint-Germain",
    "   17/18 - FC Paris Saint-Germain",
    "   16/17 - AS Mônaco",
    " ",
    "• 3x Vencedor da Taça de França",
    "   20/21 - FC Paris Saint-Germain",
    "   19/20 - FC Paris Saint-Germain",
    "   17/18 -	FC Paris Saint-Germain",
    " ",
    "• 3x Vencedor da Supertaça de França",
    "   20/21 - FC Paris Saint-Germain",
    "   19/20 - FC Paris Saint-Germain",
    "   18/19 - FC Paris Saint-Germain",
    " ",
    "• 2x Vencedor da Taça da Liga de França",
    "   19/20 - FC Paris Saint-Germain",
    "   17/18 - FC Paris Saint-Germain",
    " ",
    "• 1x French Youth Cup winner (15/16)",
    " ",
    "• 3x O melhor jogador jovem",
    "   2018 - Copa do Mundo de 2018",
    "   2018 - Ligue 1",
    "   2017 - Ligue 1",
    " ",
    "• 1x Futebolista do ano",
    "   2018 - França",
    " ",
    "• 1x Vencedor UEFA Nations League",
    "   2021 - UEFA Nations League Finals",
    " ",
    "• 1x Top preparador",
    "   21/22 - FC Paris Saint-Germain",
    " ",
    "• 1x Campeão da Europa Sub19",
    "   2016 - França Sub19",
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
    " ",
    "• 1x Jogador da época",
    "   18/19	FC Paris Saint-Germain",
    " "
]

const conquistasHugo = [
    "• 1x Campeão do Mundo",
    "2018 - França",
    " ",
    "• 3x Participante no Campeonato do Mundo",
    "2018 - França",
    "2014 - França",
    "2010 - França",
    " ",
    "• 2x Participante na Liga Europa",
    "13/14 - Tottenham Hotspur",
    "12/13 - Tottenham Hotspur",
    " ",
    "• 2x Participante no Campeonato da Europa",
    "2016 - França",
    "2012 - França",
    " ",
    "• 1x Vencedor da Taça de França",
    "11/12 - Olympique Lyon",
    " ",
    "• 1x Vencedor da Supertaça de França",
    "12/13 - Olympique Lyon",
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
]

const conquistasZidane = [
    "• 1x Campeão do Mundo",
    "1998 - França",
    " ",
    "• 3x Melhor jogador do mundo",
    "2003 - Real Madrid CF",
    "2000 - Juventus FC",
    "1998 - Juventus FC	Juventus FC",
    " ",
    "• 1x Vencedor Ballon d'Or (1998)",
    " ",
    "• 1x Campeão da Europa",
    "2000 -França",
    " ",
    "• 3x Participante no Campeonato da Europa",
    "2004 - França",
    "2000 - França",
    "1996 - França",
    " ",
    "• 3x Participante no Campeonato do Mundo",
    "2006 - França",
    "2002 - França",
    "1998 - França",
    " ",
    "• 2x Vencedor da Taça do Mundo",
    "2002 - Real Madrid CF",
    "1996 - Juventus FC",
    " ",
    "• 1x Vencedor da Champions-League",
    "01/02 - Real Madrid CF",
    " ",
    "• 1x Campeão de Espanha",
    "02/03 - Real Madrid CF",
    " ",
    "• 1x Vencedor da Supertaça da Itália",
    "97/98 - Juventus FC",
    " ",
    "• 1x O melhor jogador jovem",
    "1994 - Ligue 1	Division 1",
    " ",
    "• 1x Vice-Campeão do Mundo",
    "2006 - França",
    " ",
    "• 1x Vice-goleador",
    "05/06 - França - 3 Gols",
    " ",
    "• 2x Finalista da Liga dos Campeões",
    "97/98 - Juventus FC",
    "96/97 - Juventus FC",
    " ",
    "• 2x Campeão de Itália",
    "97/98 - Juventus FC",
    "96/97 - Juventus FC",
    " ",
    "• 3x Futebolista do ano",
    "2002 - França",
    "2001 - Itália",
    "1998 - França",
    " ",
    "• 1x Médio da época",
    "97/98	Juventus FC",
    " ",
    "2x Jogador da Copa do Mundo",
    "05/06 - Copa do Mundo de 2006",
    "99/00 - Campeonato da Europa 2000",
    " ",
    "• 1x Top preparador",
    "00/01 - Juventus FC",
    " ",
    "• 2x Vencedor Uefa-Supercup",
    "01/02 - Real Madrid CF",
    "95/96 - Juventus FC",
    " ",
    "• 3x O melhor jogador estrangeiro",
    "2002 - Real Madrid CF",
    "2001 - Juventus FC",
    "1997 - Juventus FC",
    " ",
    "• 1x Finalista Uefa-Cup",
    "95/96 - FCG Bordeaux",
    " ",
    "• 2x Vencedor UI Cup",
    "99/00 - Juventus FC",
    "95/96 - FCG Bordeaux",
    " ",
    "• 2x Vencedor da Supertaça de Espanha",
    "03/04 - Real Madrid CF",
    "01/02 - Real Madrid CF",
    " ",
    "• 1x Jogador da época",
    "95/96 - FCG Bordeaux",
]

const conquistasBenzema = [
    "•1x Vencedor Bola de Ouro (2022)",
    "",
    "• 1x O melhor jogador da Europa",
    "2022 - Real Madrid CF",
    "",
    "• 5x Vencedor da Champions-League",
    "21/22 Real Madrid CF",
    "17/18 - Real Madrid CF",
    "16/17 - Real Madrid CF",
    "15/16 - Real Madrid CF",
    "13/14 - Real Madrid CF",
    "",
    "• 4x Campeão do Mundo FIFA - Club",
    "2018 - Real Madrid CF",
    "2017 - Real Madrid CF",
    "2016 - Real Madrid CF",
    "2014 - Real Madrid CF",
    "",
    "• 3x Participante no Campeonato da Europa",
    "2021 - França",
    "2012 - França",
    "2008 - França",
    "",
    "• 1x Participante no Campeonato do Mundo",
    "2014 - França",
    "",
    "• 4x Campeão de França",
    "07/08 - Lyon Olímpico",
    "06/07 - Lyon Olímpico",
    "05/06 - Lyon Olímpico",
    "04/05 - Lyon Olímpico",
    "",
    "• 4x Campeão de Espanha",
    "21/22 - Real Madrid CF",
    "19/20 - Real Madrid CF",
    "16/17 - Real Madrid CF",
    "11/12 - Real Madrid CF",
    "",
    "• 1x Vencedor da Taça de França",
    "07/08 - Lyon Olímpico",
    "",
    "• 4x Vencedor da Supertaça de França",
    "07/08 - Lyon Olímpico",
    "06/07 - Lyon Olímpico",
    "05/06 - Lyon Olímpico",
    "04/05 - Lyon Olímpico",
    "",
    "• 1x Vice - goleador",
    "20/21 - França - 4 Gols",
    "",
    "• 4x Futebolista do ano",
    "2021 - França",
    "2014 - França",
    "2012 - França",
    "2011 - França",
    "",
    "• 1x Vencedor UEFA Nations League",
    "2021 - Finais da Liga das Nações da UEFA",
    "",
    "• 2x Jogador do Torneio",
    "21/22 - Liga dos Campeões",
    "21/22 - Liga dos Campeões",
    "",
    "• 1x Top preparador",
    "11/12 - Liga dos Campeões",
    "",
    "• 4x Vencedor Uefa - Supercup",
    "22/23 - Real Madrid CF",
    "17/18 - Real Madrid CF",
    "16/17 - Real Madrid CF",
    "14/15 - Real Madrid CF",
    "",
    "• 2x Vencedor da Taça de Espanha",
    "13/14 - Real Madrid CF",
    "10/11 - Real Madrid CF",
    "",
    "• 4x Vencedor da Supertaça de Espanha",
    "21/22 - Real Madrid CF",
    "19/20 - Real Madrid CF",
    "17/18 - Real Madrid CF",
    "12/13 - Real Madrid CF",
    "",
    "• 1x Campeão da Europa Sub17",
    "2004 - França U17",
    "• 7x Jogador da época",
    "21/22 - Real Madrid CF",
    "21/22 - LaLiga	LaLiga",
    "19/20 - LaLiga	LaLiga",
    "19/20 - Real Madrid CF",
    "18/19 - Real Madrid CF",
    "15/16 - Real Madrid CF",
    "07/08 - Ligue 1",
    "",
    "• 5x Artilheiro",
    "21/22 - LaLiga - 27 Gols",
    "21/22 - Liga dos Campeões - 15 Gols",
    "21/22 - Supercopa - 2 Gols",
    "07/08 - Ligue 1 - 20 Gols",
    "07/08 - Copa da França - 6 Gols",
]

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
            if (index < 4) {
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
    }, 2800);
}
