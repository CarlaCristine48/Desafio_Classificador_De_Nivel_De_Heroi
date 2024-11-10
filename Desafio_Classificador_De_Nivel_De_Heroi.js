// Variáveis para armazenar o nome do herói e a quantidade de experiência (XP) 
let nomeHeroi = "Homem de ferro"
let quantidadeXp = 1.000

// Variável para armazenar o nível do herói
let nivelHeroi = ""           

// Estrutura de decisão para determinar o nível com base na quantidade de XP
if (quantidadeXp <= 1.000) {
    nivelHeroi = "Ferro"
} else if (quantidadeXp >= 1.001 && quantidadeXp <= 2.000) {
    nivelHeroi = "Bronze"
} else if (quantidadeXp >= 2.001 && quantidadeXp <= 5.000) {
    nivelHeroi = "Prata"
} else if (quantidadeXp >= 5.001 && quantidadeXp <= 7.000) {
    nivelHeroi = "Ouro"
} else if (quantidadeXp >= 7.001 && quantidadeXp <= 8.000) {
    nivelHeroi = "Platina"
} else if (quantidadeXp >= 8.001 && quantidadeXp <= 9.000) {
    nivelHeroi = "Ascendente"
} else if (quantidadeXp >= 9.001 && quantidadeXp <= 10.000) {
    nivelHeroi = "Imortal"
} else {
    nivelHeroi = "Radiante"
}

// Saída
 
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);