// Funções para mudar de tela e buscar dados do backend
async function goToInfo() {
    // Oculta a tela de boas-vindas e exibe a tela de informações
    document.getElementById("welcomeScreen").classList.add("hidden");
    document.getElementById("infoScreen").classList.remove("hidden");

    // Tenta buscar dados do backend
    try {
        const response = await fetch("/api/transporte");
        const dados = await response.json();

        const info = dados[0]; // Exemplo de exibição do primeiro item de dados
        document.getElementById("infoScreen").querySelector("p").innerText =
            `Próximo ônibus para ${info.destino} parte às ${info.horario} na plataforma ${info.plataforma}, que está ${info.direcao}.`;
    } catch (error) {
        console.error("Erro ao buscar dados de transporte:", error);
    }
}

async function goToRoute() {
    // Oculta a tela de informações e exibe a tela de rota
    document.getElementById("infoScreen").classList.add("hidden");
    document.getElementById("routeScreen").classList.remove("hidden");

    // Tenta buscar dados do backend para o destino
    try {
        const response = await fetch("/api/transporte/Estação B");
        const info = await response.json();

        document.getElementById("routeScreen").querySelector("p").innerText =
            `Siga ${info.direcao} para chegar à plataforma ${info.plataforma} para o destino ${info.destino}.`;
    } catch (error) {
        console.error("Erro ao buscar dados de rota:", error);
    }
}

function resetApp() {
    // Reseta para a tela de boas-vindas
    document.getElementById("routeScreen").classList.add("hidden");
    document.getElementById("welcomeScreen").classList.remove("hidden");
}
