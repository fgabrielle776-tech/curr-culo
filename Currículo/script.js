const nome = document.querySelector("#nome");
const cidade = document.querySelector("#cidade");
const editar = document.querySelector("#editar");
const sair = document.querySelector("#sair");

editar.addEventListener("click", function() {
    const novoNome = prompt("Digite seu nome:");
    if (novoNome !== null && novoNome.trim() !== "") {
        nome.textContent = novoNome.trim();
    }

    const novaCidade = prompt("Digite sua nova cidade:");
    if (novaCidade !== null && novaCidade.trim() !== "") {
        cidade.textContent = novaCidade.trim();
    }
});

sair.addEventListener("click", function() {
    const resposta = confirm("Deseja realmente sair do perfil?");
    if (resposta) {
        alert("Você saiu do perfil!");
    }
});
