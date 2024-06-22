//Declarando a biblioteca para leitura de entrada
const read = require('readline-sync');

//Função nivel do jogador
function determinarNivel (vitorias){
    if(vitorias < 10){
        return "Ferro";
    } else if(vitorias >= 11 && vitorias <= 20){
        return "Bronze";
    } else if(vitorias >= 21 && vitorias <= 50){
        return "Prata";
    } else if(vitorias >= 51 && vitorias <= 80){
        return "Ouro";
    } else if(vitorias >= 81 && vitorias <= 90){
        return "Diamante";
    } else if(vitorias >= 91 && vitorias <= 100){
        return "Lendario";
    } else {
        return "Imortal";
    }
}

//Função para calcular o saldo
function calcularSaldo(vitorias, derrotas){
    const saldoVitoria = vitorias - derrotas;
    const nivel = determinarNivel(vitorias);
    return { saldoVitoria, nivel};
}

const vitorias = parseInt(read.question('Digite o numero de vitorias: '));
const derrotas = parseInt(read.question('Digite o numero de derrotas: '));

const resultado = calcularSaldo(vitorias, derrotas);

console.log(`O Herói tem um saldo de ${resultado.saldoVitoria} está no nível ${resultado.nivel}`);
