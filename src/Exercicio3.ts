// Construa um programa que seja possivel somar o valor do saldo atual e o anterior, atualizar para o valor
// da entrada atual e limpar seu valor o zerando.

let entrada = document.getElementById('entrada') as HTMLInputElement;
let botaoSomar = document.getElementById('somar') as HTMLButtonElement;
let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLDivElement;
let saldo = 0;

function somarAoSaldo(valor:number) {
    saldo += valor;
    campoSaldo.innerHTML = `Seu saldo é: ${saldo.toString()}`;
}

function atualizarSaldo(valor:number) {
    saldo = valor;
    campoSaldo.innerHTML = `Seu saldo é: ${saldo.toString()}`;
}

function limparSaldo() {
    campoSaldo.innerHTML = 'Seu saldo é:';
    saldo = 0;
}

botaoSomar.addEventListener('click', () => somarAoSaldo(Number(entrada.value)));

botaoAtualizar.addEventListener('click', () => atualizarSaldo(Number(entrada.value)));

botaoLimpar.addEventListener('click', () => limparSaldo());
