//  Desafio do Felipão : Criar herois com niveis 

// 1 - Criar Arrays e objetos com as informações dos campeões 

// 2 - certificar que estou usando variável, operadores, laços de repetição e estruturas de decisões

// 3 - estando tudo conforme o plano exibir mensagens de saída. 

// Definição dos campeões
let campeões = [
    {
        nome: "Aatrox",
        nivel: 2545,
        rota: "Solo",
        imagem: "./src/images/Aatrox.jpg"
    },
    {
        nome: "Draven",
        nivel: 5514,
        rota: "Duo/Atirador",
        imagem: "./src/images/draven.jpg"
    },
    {
        nome: "Garen",
        nivel: 245,
        rota: "Solo",
        imagem: "./src/images/garen.jpg"
    },
    {
        nome: "Gragas",
        nivel: 3545,
        rota: "Solo",
        imagem: "./src/images/gragas.jpg"
    },
    {
        nome: "Hecarim",
        nivel: 10545,
        rota: "Solo",
        imagem: "./src/images/hecarim.jpg"
    },
    {
        nome: "Thresh",
        nivel: 545,
        rota: "Solo",
        imagem: "./src/images/thresh.jpg"
    },
    {
        nome: "Twich",
        nivel: 8545,
        rota: "Solo",
        imagem: "./src/images/twitch.jpg"
    },
    {
        nome: "Urgot",
        nivel: 545,
        rota: "Solo",
        imagem: "./src/images/urgot.jpg"
    },
    {
        nome: "Zed",
        nivel: 4545,
        rota: "Solo",
        imagem: "./src/images/zed.jpg"
    }
];

// Função para obter parâmetros da URL
function getParameterByName(name) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

let campeoesContainer = document.getElementById("campeoes-container");
campeões.forEach(campeão => {
    let campeaoElement = document.createElement("div");
    campeaoElement.classList.add("campeao");
    
    campeaoElement.innerHTML = `
        <p>Nome: ${campeão.nome}</p> 
        <p>Nível: ${campeão.nivel}</p> 
        <p>Rota: ${campeão.rota}</p> 
        <img src="${campeão.imagem}" alt="${campeão.nome}">
    `;

    campeaoElement.addEventListener("click", function() {
    
        window.location.href = `detalhes_campeao.html?nome=${campeão.nome}&nivel=${campeão.nivel}&rota=${campeão.rota}&imagem=${campeão.imagem}`;
    });

    campeoesContainer.appendChild(campeaoElement);
});
