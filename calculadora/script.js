let valor1 = [];
let valor2 = [];

let segundoNumero = false;
let operacao;
let painel;
let reset = false;

function adicionarNumero(numero){
    const display = document.getElementById("display");
    if(reset){
        excluirTudo();
        reset = false;
    }

    if(segundoNumero == false){
    valor1.push(numero);
    painel = valor1.join("");
    display.textContent = painel;
    }else{
        valor2.push(numero);
        painel = valor2.join("");
        display.textContent = painel;
    }
}

function definirOperacao(opr){
    const display = document.getElementById("display");
    display.textContent = opr;
    operacao = opr;
    segundoNumero = true;
}

function finalizarOperacao(){
    if(valor1 == [] || valor2 == []){
        excluirTudo();
        return;
    }
    let num1 = parseInt(valor1.join(""));
    let num2 = parseInt(valor2.join(""));

    let resultado;
    console.log("chegou");
    
    switch(operacao){
        case "+":
            resultado = num1 + num2;
            break;

        case "-":
            resultado = num1 - num2;
            break;

        case "X":
            resultado = num1 * num2;
            break;

        case ":":
            resultado = num1 / num2;
            break;
    }

    const display = document.getElementById("display");
    display.textContent = resultado;
    reset = true;
}


function excluirTudo(){
    const display = document.getElementById("display");
    display.textContent = "";
    valor1 = [];
    valor2 = [];
    segundoNumero = false;

}
