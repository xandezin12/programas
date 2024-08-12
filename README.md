# programas 
detalhes de cada um dos comandos no código:

1. **Importação do Módulo `readline`**

```javascript
const readline = require('readline');
```

- **Descrição:** Importa o módulo `readline`, que é nativo do Node.js e permite ler entradas do usuário via linha de comando.
- **Uso:** Usado para criar uma interface de entrada e saída para interagir com o usuário.

2. **Criação da Interface `readline`**

```javascript
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
```

- **Descrição:** Cria uma interface de leitura e escrita.
  - `input: process.stdin` especifica que a entrada será lida a partir do teclado.
  - `output: process.stdout` especifica que a saída será exibida no console.
- **Uso:** Usado para receber e exibir informações no terminal.

3. **Função `obterEscolha`**

```javascript
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
```

- **Descrição:** Solicita ao usuário que escolha "par" ou "ímpar" e garante que a escolha seja válida.
- **Parâmetros:**
  - `promptMsg`: Mensagem que será exibida para o usuário.
  - `callback`: Função que será chamada com a escolha válida do usuário.
- **Uso:**
  - `rl.question(promptMsg, (escolha) => { ... })`: Exibe o prompt e lê a resposta do usuário.
  - `escolha.toLowerCase()`: Converte a entrada para minúsculas para garantir a consistência na comparação.
  - `if (escolha === 'par' || escolha === 'impar')`: Verifica se a escolha é válida.
  - `callback(escolha)`: Chama a função de callback com a escolha válida.
  - `else { ... }`: Se a escolha não for válida, solicita novamente.

4. **Função `obterNumero`**

```javascript
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
```

- **Descrição:** Solicita ao usuário um número entre 1 e 5 e garante que o número seja válido.
- **Parâmetros:**
  - `promptMsg`: Mensagem que será exibida para o usuário.
  - `callback`: Função que será chamada com o número válido do usuário.
- **Uso:**
  - `rl.question(promptMsg, (input) => { ... })`: Exibe o prompt e lê a resposta do usuário.
  - `parseInt(input)`: Converte a entrada para um número inteiro.
  - `if (!isNaN(numero) && numero >= 1 && numero <= 5)`: Verifica se o número é válido e dentro do intervalo.
  - `callback(numero)`: Chama a função de callback com o número válido.
  - `else { ... }`: Se o número não for válido, solicita novamente.

5. **Obtenção das Entradas dos Jogadores e Determinação do Vencedor**

```javascript
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
```

- **Descrição:** Obtém as escolhas e números dos jogadores e determina o vencedor.
- **Uso:**
  - `obterEscolha("Jogador I, você escolhe 'par' ou 'ímpar'? ", (escolha1) => { ... })`: Solicita a escolha do Jogador I e chama a função de callback com a escolha.
  - `obterNumero("Jogador 1, escolha um número de 1 a 5: ", (n1) => { ... })`: Solicita o número do Jogador 1 e chama a função de callback com o número.
  - `obterNumero("Jogador 2, escolha um número de 1 a 5: ", (n2) => { ... })`: Solicita o número do Jogador 2 e chama a função de callback com o número.
  - `let soma = n1 + n2;`: Calcula a soma dos números escolhidos pelos jogadores.
  - `if ((soma % 2 === 0) === (escolha1 === 'par'))`: Verifica se a paridade da soma coincide com a escolha do Jogador I.
  - `console.log("GANHADOR FOI: Jogador I");` e `console.log("GANHADOR FOI: Jogador 2");`: Imprime o vencedor baseado na condição.
  - `rl.close();`: Fecha a interface `readline`.

Esses comandos juntos permitem que o código interaja com o usuário, receba entradas, e determine o vencedor com base nas regras do jogo. Se precisar de mais alguma coisa, é só avisar!
