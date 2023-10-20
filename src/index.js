let botaoEnvia = document.getElementById("enviar");

botaoEnvia.addEventListener("click", function () {
    const valorInputs = document.querySelectorAll(".input-dados");
    // valorInputs.forEach( function(item){
    let valores = [].map.call(valorInputs, function (input) {
        return retorno(input.value);
        // console.log(input.value);
    });
})

function retorno(item) {
    const ativando = document.querySelectorAll(".campo-obrigatorio");
    const bordaCaixas = document.querySelectorAll(".ativacao-borda");
    if (item === '') {
        ativando.forEach(function (item) {
            item.classList.add("ativado")
        });

        bordaCaixas.forEach(function (item) {
            item.classList.add("borda")
        });
    } else if (item) {
        ativando.forEach(function (item) {
            item.classList.remove("ativado");
        });

        bordaCaixas.forEach(function (item) {
            item.classList.remove("borda")
        });

    }
}






// let valor = document.querySelectorAll(".input-dados");

// let valores = [].map.call(valor, function (input) {
// //   return input.value;
//   if(input.value == ''){


//     let ativa = array.forEach(element => {

//     }); document.getElementsByClassName("campo-obrigatorio");
//   }
// })
// console.log(valores);
// });



// let teste = document.querySelectorAll(".input-dados").values;
// console.log(teste);