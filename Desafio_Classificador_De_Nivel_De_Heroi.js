// Variáveis para armazenar o nome do herói e a quantidade de experiência (XP) 
let nomeHeroi = "Homem de ferro"
let quantidadeXp = 1000

// Variável para armazenar o nível do herói
let nivelHeroi = ""           

// Estrutura de decisão para determinar o nível com base na quantidade de XP
if (quantidadeXp <= 1000) {
    nivelHeroi = "Ferro"
} else if (quantidadeXp >= 1001 && quantidadeXp <= 2000) {
    nivelHeroi = "Bronze"
} else if (quantidadeXp >= 2001 && quantidadeXp <= 5000) {
    nivelHeroi = "Prata"
} else if (quantidadeXp >= 5001 && quantidadeXp <= 7000) {
    nivelHeroi = "Ouro"
} else if (quantidadeXp >= 7001 && quantidadeXp <= 8000) {
    nivelHeroi = "Platina"
} else if (quantidadeXp >= 8001 && quantidadeXp <= 9000) {
    nivelHeroi = "Ascendente"
} else if (quantidadeXp >= 9001 && quantidadeXp <= 10000) {
    nivelHeroi = "Imortal"
} else {
    nivelHeroi = "Radiante"
}

// Saída
 
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);