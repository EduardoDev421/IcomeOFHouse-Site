// Obtém o id da URL
const parametros = new URLSearchParams(window.location.search);
const id = Number(parametros.get("id"));

// Busca as plantas no JSON
fetch("../data/plantas.json")
    .then(resposta => {
        if (!resposta.ok) {
            throw new Error("Não foi possível carregar o arquivo JSON.");
        }
        return resposta.json();
    })
    .then(plantas => {

        // Procura a planta pelo id
        const planta = plantas.find(item => item.id === id);

        if (!planta) {
            document.querySelector(".detalhes").innerHTML = `
                <h1>Planta não encontrada.</h1>
                <p>Verifique se a planta existe.</p>
            `;
            return;
        }

        // Preenche os dados da página
        document.getElementById("imagemPlanta").src = planta.imagem;
        document.getElementById("imagemPlanta").alt = planta.nome;

        document.getElementById("nomePlanta").textContent = planta.nome;
        document.getElementById("descricao").textContent = planta.descricao;

        document.getElementById("area").textContent = planta.area;
        document.getElementById("quartos").textContent = planta.quartos;
        document.getElementById("banheiros").textContent = planta.banheiros;
        document.getElementById("garagem").textContent = planta.garagem;
        document.getElementById("terreno").textContent = planta.terreno;
        document.getElementById("estilo").textContent = planta.estilo;
    })
    .catch(erro => {
        console.error(erro);

        document.querySelector(".detalhes").innerHTML = `
            <h1>Erro ao carregar os dados.</h1>
            <p>Verifique se o arquivo plantas.json está na pasta correta.</p>
        `;
    });