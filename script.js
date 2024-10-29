// Funções para mudar de tela
function goToInfo() {
    document.getElementById("welcomeScreen").classList.add("hidden");
    document.getElementById("infoScreen").classList.remove("hidden");
}

function goToRoute() {
    document.getElementById("infoScreen").classList.add("hidden");
    document.getElementById("routeScreen").classList.remove("hidden");
}

function resetApp() {
    document.getElementById("routeScreen").classList.add("hidden");
    document.getElementById("welcomeScreen").classList.remove("hidden");
}
