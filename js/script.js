const cpf = document.getElementById("cpf");
const telefone = document.getElementById("telefone");
const cep = document.getElementById("cep");


cpf.addEventListener("input", () => {
    cpf.value = cpf.value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
});

telefone.addEventListener("input", () => {
    telefone.value = telefone.value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
});

cep.addEventListener("input", () => {
    cep.value = cep.value
        .replace(/\D/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2");
});

document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault();

    if (this.checkValidity()) {
        document.getElementById("mensagemSucesso").textContent =
            "Cadastro realizado com sucesso! Obrigado por participar.";
        this.reset();
    } else {
        this.reportValidity();
    }
});