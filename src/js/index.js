console.log('Mostrsr o document', document);

// Armazenar o botão do trailer na variavel "botaoTrailer".
const botaoTrailer = document.querySelector(".botao-trailer");

// Armazenar a modal na variavel "modal"
const modal = document.querySelector(".modal");

// Armazenar o botão "X" da modal na variavel "fecharModal".
const fecharModal = document.querySelector(".fechar-modal");

// Pegar o link do video e armazenar na variavel "linkVideo";
const video = document.getElementById("video");
const linkVideo = video.src;

// Função para alternar o abrir e fechar da modal.
function alternarModal (){
    modal.classList.toggle("aberto");
}

// Adicionar a ação de abrir a modal ao clicar no botão de trailer.
botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkVideo);
});

// Acicionar a ação de fechar a modal e encerrar o video caso seja fechado em execução.
fecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});