// Funções para simular a troca de telas e exibir mensagens estáticas

function goToInfo() {
    // Oculta a tela de boas-vindas e exibe a tela de informações
    document.getElementById("welcomeScreen").classList.add("hidden");
    document.getElementById("infoScreen").classList.remove("hidden");

    // Exibe uma mensagem de simulação na tela de informações
    document.getElementById("infoScreen").querySelector("p").innerText =
        "Próximo ônibus para Estação A parte em 5 minutos na plataforma 1, que está à sua direita.";
}

function goToRoute() {
    // Oculta a tela de informações e exibe a tela de rota
    document.getElementById("infoScreen").classList.add("hidden");
    document.getElementById("routeScreen").classList.remove("hidden");

    // Exibe uma mensagem de simulação na tela de rota
    document.getElementById("routeScreen").querySelector("p").innerText =
        "Siga em frente e vire à direita para chegar à plataforma 1.";
}

function resetApp() {
    // Reseta para a tela de boas-vindas
    document.getElementById("routeScreen").classList.add("hidden");
    document.getElementById("welcomeScreen").classList.remove("hidden");
}
