// Funções para simular a troca de telas, exibir mensagens estáticas e reproduzir áudios

// Carregar áudios
const audioBemVindo = new Audio("audio/bem_vindo.mp3");
const audioInfoTransporte = new Audio("audio/info_transporte.mp3");
const audioDirecoes = new Audio("audio/direcoes.mp3");

function goToInfo() {
    // Oculta a tela de boas-vindas e exibe a tela de informações
    document.getElementById("welcomeScreen").classList.add("hidden");
    document.getElementById("infoScreen").classList.remove("hidden");

    // Exibe mensagem simulada e reproduz áudio
    document.getElementById("infoScreen").querySelector("p").innerText =
        "Próximo ônibus para Estação A parte em 5 minutos na plataforma 1, que está à sua direita.";
    audioInfoTransporte.play();
}

function goToRoute() {
    // Oculta a tela de informações e exibe a tela de direções
    document.getElementById("infoScreen").classList.add("hidden");
    document.getElementById("routeScreen").classList.remove("hidden");

    // Exibe mensagem simulada e reproduz áudio
    document.getElementById("routeScreen").querySelector("p").innerText =
        "Siga em frente e vire à direita para chegar à plataforma 1.";
    audioDirecoes.play();
}

function resetApp() {
    // Reseta para a tela de boas-vindas e reproduz o áudio de boas-vindas
    document.getElementById("routeScreen").classList.add("hidden");
    document.getElementById("welcomeScreen").classList.remove("hidden");

    audioBemVindo.play();
}
