let docTitle = document.title;

window.addEventListener("blur", () => {
    document.title = "! VOLTA PARA O JOGO!"
})
window.addEventListener("focus", () => {
    document.title = docTitle
})