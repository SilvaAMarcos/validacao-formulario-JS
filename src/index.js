let botaoEnvia = document.getElementById("enviar");

botaoEnvia.addEventListener("click", function () {
    const valorInputs = document.querySelectorAll(".input-dados");
    let valores = [].map.call(valorInputs, function (input) {
        const caixaMensagem = document.querySelector(".mensagem").value;
        return retorno(input.value, caixaMensagem);
    });

})

function retorno(item, caixaMensagem) {
    const ativando = document.querySelectorAll(".campo-obrigatorio");
    const bordaCaixas = document.querySelectorAll(".ativacao-borda");
    if (item === '' || caixaMensagem === '') {
        ativando.forEach(function (item) {
            item.classList.add("ativado")
        });
        console.log(caixaMensagem);

        bordaCaixas.forEach(function (item) {
            item.classList.remove("borda-todosPreenchidos")
            item.classList.add("borda")
        });
    } else if (item) {
        ativando.forEach(function (item) {
            item.classList.remove("ativado");
        });

        bordaCaixas.forEach(function (item) {
            item.classList.remove("borda");
            item.classList.add("borda-todosPreenchidos")
        });
        

    }
}