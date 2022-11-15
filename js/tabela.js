const tabelaAnos = [
    "1930", "1934", "1938", "1950", "1954", "1958", "1962", "1966", "1970", "1974", "1978", "1982", "1986", "1990", "1994", "1998", "2002", "2006", "2010", "2014", "2018", "2022" 
];

const tabelaResultados = [
    "Eliminada na 1ª fase",
    "Eliminada na 1ª fase",
    "eliminada nas quartas-de-final",
    "Não se classificou",
    "Eliminada na 1ª Fase",
    "3º lugar",
    "Não se classificou",
    "Eliminada na 1ª Fase",
    "Não se classificou",
    "Não se classificou",
    "Eliminada na 1ª Fase",
    "4º lugar",
    "3º lugar",
    "Não se classificou",
    "Não se classificou",
    "Campeã",
    "Eliminada na 1ª Fase",
    "Vice-campeã",
    "Eliminada na 1ª Fase",
    "Eliminada nas Quartas de Final",
    "Campeã",
    "Disputará a Copa do Mundo do Catar de 2022"
];
/* 22l*/

function criarTabela() {
    let tabela = document.createElement("table");
    tabela.classList.add("tabela");
    let section = document.getElementById("container-tabela");

    let i = 0;
    let linhasC1 = [];
    tabelaAnos.forEach(element => {
        linhasC1[i] = document.createElement("td");
        linhasC1[i].textContent = element;
        linhasC1[i].classList.add("coluna-1");
        i++;
    });

    i = 0;
    let linhasC2 = [];
    tabelaResultados.forEach(element => {
        linhasC2[i] = document.createElement("td");
        linhasC2[i].textContent = element;
        linhasC2[i].classList.add("coluna-2");
        i++;
    });

    i = 0;
    let linhasTr = [];

    while (i < linhasC1.length){
        linhasTr[i] = document.createElement("tr");

        if (i%2) {
            linhasTr[i].classList.add('linha-cor');
        }

        linhasTr[i].appendChild(linhasC1[i]);
        linhasTr[i].appendChild(linhasC2[i]);
        tabela.appendChild(linhasTr[i]);
        i++;
    }

    section.appendChild(tabela);
}


function atualizarTabela() {
    let linhaDel = document.querySelector(".tabela tr");
    let linhaCinza = linhaDel.classList.value == "linha-cor";
    linhaDel.classList.add("linha-ocultar");
    
    let c1Del = linhaDel.querySelector(".coluna-1");
    let c2Del = linhaDel.querySelector(".coluna-2");

    setTimeout(() => {
        let tabela = document.querySelector(".tabela");
        
        let temp = document.createElement("tr");
        let tempC1 = document.createElement("td");
        let tempC2 = document.createElement("td");
        tempC1.classList.add("coluna-1");
        tempC2.classList.add("coluna-2");
        tempC1.textContent = c1Del.textContent;
        tempC2.textContent = c2Del.textContent;
    
        if (linhaCinza) {
            temp.classList.add("linha-cor");
        }
    
        temp.appendChild(tempC1);
        temp.appendChild(tempC2);
    
        linhaDel.remove();
        tabela.appendChild(temp);

    }, 550);
}
