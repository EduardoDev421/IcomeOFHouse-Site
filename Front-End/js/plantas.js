const container = document.querySelector(".cards-plantas");

fetch("../data/plantas.json")
    .then(resposta => resposta.json())
    .then(plantas => {

        plantas.forEach(planta => {

            const card = document.createElement("article");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${planta.imagem}" alt="${planta.nome}">

                <h2>${planta.nome}</h2>

                <p>
                    ${planta.area} •
                    ${planta.quartos} Quartos •
                    ${planta.banheiros} Banheiros •
                    ${planta.garagem}
                </p>

                <a href="DetalhePlanta.html?id=${planta.id}">
                    <button>Detalhes</button>
                </a>
            `;

            container.appendChild(card);

        });

    })
    .catch(erro => {
        console.error("Erro ao carregar as plantas:", erro);

        container.innerHTML = `
            <h2>Não foi possível carregar as plantas.</h2>
        `;
    });