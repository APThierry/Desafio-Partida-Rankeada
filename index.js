//Declarando a biblioteca para leitura de entrada
const read = require('readline-sync');

//Declaração de Variaveis e Constantes
const classe = [
    "1. Guerreiro: Espada Longa, Escudo de Aço, Armadura de Bronze \n", 
    "2. Mago: Cajado, Armadura de Couro, Adaga de Ferro \n", 
    "3. Arqueiro: Arco e flechas, Armadura de Malha, 10 felchas especiais \n"
];

const enemies = [
    {name: "Goblin", minExp: 100, maxExp: 500},
    {name: "Orc", minExp: 600, maxExp: 1100},
    { name: "Dragão", minExp: 1150, maxExp: 10100}
];

let nameHero;
let opcaoClasse;
let nomeClasse;
let experiencia = 0;
const chanceDeAcerto = 0.85;

// Função para gerar experiencia aleatoria
function gerarExperiencia(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para a chance de ataque
function sucessoAtaque(){
    return Math.random() < chanceDeAcerto; 
}

// Função para enfrentar inimigos
function enfrentarInimigo(inimigo){
    console.log(`Voce encontrou um ${inimigo.name}!`);
    let acao = read.question("O que voce deseja fazer? Atacar ou Fugir? ").toLowerCase();

    if(acao == "atacar" || acao == "Atacar"){
        if(sucessoAtaque()){
            let expGanha = gerarExperiencia(inimigo.minExp, inimigo.maxExp);
            experiencia += expGanha;
            console.log(`Voce derretou o ${inimigo.name} e ganhou ${expGanha} de exp!\n`);
        
        }else{
            console.log(`Voce errou o ataque e o ${inimigo.name} escapou!\n`);
        }
    }else if(acao == "fugir" || acao == "Fugir"){
        console.log(`Voce fugiu do ${inimigo.name} e não ganhou nada...\n`);
    
    }else{
        console.log("Voce perdeu sua chance de ganhar experiência\n");
    }
}

// Função para enconto aleatorio
function encontroAleatorio(){
    let inimigo = enemies[Math.floor(Math.random() * (enemies.length - 1))]; //Tira o Dragão
    enfrentarInimigo(inimigo);
}

//Input e Output
nameHero = read.question("Qual eh o seu nome aventureiro? ");

console.log("Qual classe voce deseja? ");
classe.forEach((classe) => {
    console.log(classe)
});

opcaoClasse = read.question("Digite a classe desejada: ");

switch(opcaoClasse){
    case "Guerreiro":
    case "1":
        nomeClasse = "Guerreiro"  ;  
        console.log("Voce escolheu a classe Guerreiro");
        break;
    case 'Mago':
    case '2':
        nomeClasse = "Mago";
        console.log("Voce escolheu a classe Mago");
        break;
    case 'Arqueiro':
    case '3':
        nomeClasse = "Arqueiro";
        console.log("Voce escolheu a classe Arqueiro");
        break;
    default:
        console.log("Opcao Invalida");
        nomeClasse = "Invalido"
    }
    

if (nomeClasse !== "Inválido") {
    console.log(`Seja bem-vindo a este mundo, ${nameHero}! Você é um ${nomeClasse}!\n`);
}

if(opcaoClasse == 'Guerreiro' || opcaoClasse == '1'){
    console.log(`O Guerreiro ${nameHero} caminha por uma estrada perigosa em direção ao castelo para falar com o rei.`);
    encontroAleatorio();
    console.log("Após esse encontro, o Guerreiro fala com o rei.");
    console.log("O rei fala que tem um dragão atacando o seu reino, e para encontra-lo, precisara atraessar a Floresta Encantada.\n");
    console.log(`${nameHero} chega na Floresta Encantada e ao final encontra outra ameaça.`);
    encontroAleatorio();
    console.log(`Finalmente depois de varios inimigos, o Guerreiro ${nameHero} encontra o Dragão.`);
    console.log("O Dragão tem asas enormes e o corpo de escamas de diamante, ao te ver ele prepara o seu ataque Po de Diamate!.");
    enfrentarInimigo(enemies[2]); // Chefe Dragão

} else if(opcaoClasse == 'Mago' || opcaoClasse == '2'){
    console.log(`O Mago ${nameHero} viaja através da floresta encantada em busca de conhecimento em uma torre antiga dos Magos Supremos.`);
    encontroAleatorio();
    console.log("Após esse encontro, o Mago continua sua jornada e encontra mais um desafio, atravessar a Floresta Amaldiçoada.");
    console.log(`Ao adentrar na Floresta Amaldiçoada, ${nameHero} eh surpreendido!`);
    encontroAleatorio();
    console.log(`Finalmente depois de atravessar Floresta Amaldiçoada, o Mago ${nameHero} chega à torre antiga dos Magos Supremos, o Mago olha para cima.\n`);
    console.log("O dragão desce com um rasante e os ventos fortes tremem a terra, o dragão tem a pela coberta por escamas vermelha magma.");
    console.log("O dragão olha pra voce e prepara o seu ataque Ave Fenix!")
    enfrentarInimigo(enemies[2]); // Chefe Dragão

} else if(opcaoClasse == 'Arqueiro' || opcaoClasse == '3'){
    console.log(`O Arqueiro ${nameHero} avança silenciosamente pela selva densa em uma missão.`);
    console.log("Sua missão é encontrar o dragão que esta atacando sua vila, para isso ele precisa ir no Pico da Montanha, mas no caminho ele é surpreendido");
    encontroAleatorio();
    console.log(`Após o primeiro encontro, o Arqueiro ${nameHero} segue seu caminho subindo a montanha.`);
    console.log(`Na sua escalada o Arqueiro ${nameHero} esta quase chegando no pico da montanha, mas da de cara com mais uma criatura.`);
    encontroAleatorio();
    console.log(`Finalmente, o Arqueiro ${nameHero} chega no Pico da Montanha, ao chegar escuta um rugido estronso que treme toda a montanha.`);
    console.log(`Ele encontra o dragão com o corpo coberto de escamas verde esmeralda, o Arqueiro ${nameHero} fica nervoso e esta pronto para...\n`);
    console.log("O dragão olha para o Arqueiro e prepara seu ataque Colera do Dragão!");
    enfrentarInimigo(enemies[2]); // Chefe Dragão

} else {
    console.log("Nenhuma aventura para uma opção inválida.\n");
}

console.log(`${nameHero}, parabéns por ter completado o desafio, você acumulou um total de ${experiencia} pontos de experiência!`);

if(experiencia <= 1000){
    console.log("Sua classificção eh Ferro!");

}else if(experiencia <= 2000){
    console.log("Sua classificção eh Bronze!");

}else if(experiencia <= 5000){
    console.log("Sua classificção eh Prata!");

}else if(experiencia <= 7000){
    console.log("Sua classificção eh Ouro!");

}else if(experiencia <= 8000){
    console.log("Sua classificção eh Platina!");

}else if(experiencia <= 9000){
    console.log("Sua classificção eh Ascendente!");

}else if(experiencia <= 1000){
    console.log("Sua classificção eh Imortal!");

}else if(experiencia > 1000){
    console.log("Sua classificção eh Radiante!");

}