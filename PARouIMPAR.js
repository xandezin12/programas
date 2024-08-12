const readline = require('readline');

// Cria uma interface para ler entradas do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para obter uma escolha válida do usuário
function obterEscolha(promptMsg, callback) {
    rl.question(promptMsg, (escolha) => {
        escolha = escolha.toLowerCase();
        if (escolha === 'par' || escolha === 'impar') {
            callback(escolha);
        } else {
            console.log("Escolha inválida. Tente novamente.");
            obterEscolha(promptMsg, callback);
        }
    });
}

// Função para obter um número válido do usuário
function obterNumero(promptMsg, callback) {
    rl.question(promptMsg, (input) => {
        let numero = parseInt(input);
        if (!isNaN(numero) && numero >= 1 && numero <= 5) {
            callback(numero);
        } else {
            console.log("Número inválido. Tente novamente.");
            obterNumero(promptMsg, callback);
        }
    });
}

// Obtém as escolhas e números dos jogadores
obterEscolha("Jogador I, você escolhe 'par' ou 'ímpar'? ", (escolha1) => {
    obterNumero("Jogador 1, escolha um número de 1 a 5: ", (n1) => {
        obterNumero("Jogador 2, escolha um número de 1 a 5: ", (n2) => {
            // Calcula a soma dos números escolhidos
            let soma = n1 + n2;

            // Verifica se a soma é par ou ímpar
            if ((soma % 2 === 0) === (escolha1 === 'par')) {
                console.log("GANHADOR FOI: Jogador I");
            } else {
                console.log("GANHADOR FOI: Jogador 2");
            }
            
            // Fecha a interface readline
            rl.close();
        });
    });
});
