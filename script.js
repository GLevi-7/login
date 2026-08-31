const usuario = [{ "email": "oi@gmail.com", "senha": "1234" }];

const emailvar = document.getElementById("email");
const senhavar = document.getElementById("senha");
const botaovar = document.getElementById("botao");

botaovar.addEventListener("click", () => {

    if (usuario[0].email === emailvar.value && usuario[0].senha === senhavar.value) {
        alert("válido");
    } else {
        alert("inválido");
    }
});