let jogador = {
    nome: "",
    vida: 100,
    forca: 50,
    recursos: 20,
};

function mostrarStatus() {
    console.log(`Status Atual de ${jogador.nome}:`);
    console.log(`Vida: ${jogador.vida}`);
    console.log(`Força: ${jogador.forca}`);
    console.log(`Recursos: ${jogador.recursos}`);
}

function desafio() {
    let resultado = Math.random();
    if (resultado < 0.5) {
        let dano = Math.floor(Math.random() * 20);
        jogador.vida -= dano;
        console.log(`${jogador.nome} enfrentou um desafio e perdeu ${dano} de vida!`);
    } else {
        let ganho = Math.floor(Math.random() * 15);
        jogador.recursos += ganho;
        console.log(`${jogador.nome} superou o desafio e ganhou ${ganho} recursos!`);
    }
    mostrarStatus();
}

function start() {
    // Pergunta o nome do jogador
    jogador.nome = prompt("Qual é o seu nome, aventureiro?");
    if (!jogador.nome) {
        jogador.nome = "Aventureiro Desconhecido";
    }

    console.log(`O jogo começou! Bem-vindo, ${jogador.nome}! Prepare-se para a aventura!`);
    mostrarStatus();

    // Loop para os dias da aventura
    for (let i = 0; i < 5; i++) {
        let continuar = confirm(`Deseja avançar para o próximo dia? (Dia ${i + 1})`);
        if (!continuar) {
            console.log(`${jogador.nome} decidiu pausar a aventura. Fim do jogo.`);
            return;
        }
        
        desafio();

        // Verifica se o jogador foi derrotado
        if (jogador.vida <= 0) {
            console.log(`${jogador.nome} foi derrotado. Fim do jogo.`);
            return;
        }
    }
    console.log(`${jogador.nome} completou a aventura com sucesso!`);
}

// Para iniciar o jogo, digite `start()` no console do navegador.
