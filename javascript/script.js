// var resposta = confirm("Deseja excluir esse arquivo?");

// console.log(resposta)

// const a = 10;
// const b = 34;

// alert(a + b)

function somar(a,b) {
    
    return a + b;

}

// console.log(somar(2,5))

document.querySelector("#calcular").addEventListener("click", function(){

    let valorA = document.querySelector("#valorA").value;
    let valorB = document.querySelector("#valorB").value;
    if(valorA.length > 0 && valorB.length > 0){
        alert(parseInt(valorA) + parseInt(valorB));
    }else {
        alert("Digite os valores para o cálculo");
    }
    

});