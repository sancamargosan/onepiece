const botoes = document.querySelectorAll('.botao');
const personagem = document.querySelectorAll('.personagem');
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        const btnSelecionado = document.querySelector(".botao.selecionado");
        btnSelecionado.classList.remove("selecionado");
        botao.classList.add('selecionado');

        const personagemSelecionado = document.querySelector('.personagem.selecionado');
        personagemSelecionado.classList.remove('selecionado')
        personagem[indice].classList.add('selecionado')
    });
});