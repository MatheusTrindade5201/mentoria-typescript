// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldo = 0;

limparSaldo();

function somarAoSaldo(soma:number) {
    if(campoSaldo){
        saldo += soma;
        campoSaldo.innerHTML = saldo.toString();
        limparSoma();
    }
    
}

function limparSaldo() {
    if(campoSaldo){
        saldo = 0;
        campoSaldo.innerHTML = saldo.toString();
        limparSoma();
    }
    
}

function limparSoma(){
    soma.value = ''
}

if(botaoAtualizar){
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
        
    });
}

if(botaoLimpar){
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}

