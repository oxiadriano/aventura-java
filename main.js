let vida = 100;
let forca = 10;
let recurso = 50;
const totalRodadas = 5;
let rodadaAtual = 0;

function start() {
    console.log("O jogo começou! Você tem que sobreviver a " + totalRodadas + " rodadas.");
    proximaRodada();
}

function proximaRodada() {
    if (rodadaAtual < totalRodadas) {
        console.log(`Rodada ${rodadaAtual + 1}`);
        console.log(`Vida: ${vida}, Força: ${forca}, Recurso: ${recurso}`);
        
        // Desafios aleatórios
        let desafio = Math.floor(Math.random() * 3);
        enfrentarDesafio(desafio);
        
        rodadaAtual++;
        proximaRodada();
    } else {
        console.log("Jogo terminado!");
        if (vida > 0) {
            console.log("Parabéns! Você venceu!");
        } else {
            console.log("Você foi derrotado...");
        }
    }
}

function enfrentarDesafio(desafio) {
    switch (desafio) {
        case 0:
            console.log("Você encontrou um inimigo!");
            let dano = Math.floor(Math.random() * 30);
            vida -= dano;
            console.log("Você perdeu " + dano + " de vida.");
            break;
        case 1:
            console.log("Você encontrou um baú!");
            let ganho = Math.floor(Math.random() * 20);
            recurso += ganho;
            console.log("Você ganhou " + ganho + " de recursos.");
            break;
        case 2:
            console.log("Você treinou e aumentou sua força!");
            let aumento = Math.floor(Math.random() * 5);
            forca += aumento;
            console.log("Sua força aumentou em " + aumento + ".");
            break;
    }
    
    if (vida <= 0) {
        console.log("Você morreu!");
    }
}

// Para iniciar o jogo, execute start() no console do navegador.
