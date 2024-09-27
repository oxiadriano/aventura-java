let heroi = {
    nome: "Elara",
    vida: 100,
    forca: 50,
    recursos: 20,
};

function mostrarStatus() {
    console.log(`Status Atual de ${heroi.nome}:`);
    console.log(`Vida: ${heroi.vida}`);
    console.log(`Força: ${heroi.forca}`);
    console.log(`Recursos: ${heroi.recursos}`);
}

function desafio() {
    let resultado = Math.random();
    if (resultado < 0.5) {
        let dano = Math.floor(Math.random() * 20);
        heroi.vida -= dano;
        console.log(`${heroi.nome} enfrentou um desafio e perdeu ${dano} de vida!`);
    } else {
        let ganho = Math.floor(Math.random() * 15);
        heroi.recursos += ganho;
        console.log(`${heroi.nome} superou o desafio e ganhou ${ganho} recursos!`);
    }
    mostrarStatus();
}

function iniciarJogo() {
    console.log("O jogo começou! Prepare-se para a aventura!");
    mostrarStatus();

    for (let i = 0; i < 5; i++) {
        desafio();

        if (heroi.vida <= 0) {
            console.log(`${heroi.nome} foi derrotado. Fim do jogo.`);
            return;
        }
    }
    console.log(`${heroi.nome} completou a aventura com sucesso!`);
}

// Para iniciar o jogo, digite `iniciarJogo()` no console do navegador.
