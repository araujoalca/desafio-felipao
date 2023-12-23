/* Desafio Curso DIO: Classificador de nível de Herói.

   O Que deve ser utilizado:
   - Variáveis
   - Operadores
   - Laços de repetição
   - Estruturas de decisões

   Deve-se utilizar uma estrutura de decisão para apresentar uma das mensagens abaixo:
   Se XP for menor do que 1.000 = Ferro
   Se XP for entre 1.001 e 2.000 = Bronze
   Se XP for entre 2.001 e 5.000 = Prata
   Se XP for entre 5.001 e 7.000 = Ouro
   Se XP for entre 7.001 e 8.000 = Platina
   Se XP for entre 8.001 e 9.000 = Ascendente
   Se XP for entre 9.001 e 10.000= Imortal
   Se XP for maior ou igual a 10.001 = Radiante

   obs: percebendo que a pontuação de cada nível começa com o 
   'valor máximo do nível anteriror + um', estou considerando que 
   houve um erro no enunciado, e o nível 'Ferro' é 'menor ou igual a 1.000'
   e não apenas 'menor do que 1.000', como anunciado.

   Gere como SAÍDA a seguinte mensagem:
   "O Herói de nome **{nome}** está no nível **{nivel}**"
*/

// Criando as variáveis para armazenar os dados do Herói
const nomeHeroi = "LionvitaLy";
let totalXP = 0;
let nivelHeroi = "";

// variáveis para testar o código (e incorporadas ao mesmo no switch)
const nivelFerro = 1000;
const nivelBronze = 2000;
const nivelPrata = 5000;
const nivelOuro = 7000;
const nivelPlatina = 8000;
const nivelAscendente = 9000;
const nivelImortal = 10000;
const nivelRadiante = nivelImortal + 1;

// variável para testar o nível desejado
// altere aqui para a variável do nível que se quer testar
// tais como: nivelFerro, nivelBronze, etc.
let nivelTestado = nivelOuro;


/* Aumentando a quantidade de XPs:

   Aqui foi utilizada uma estrutura de repetição apenas como uma forma 
   de cumprir uma das exigências do desafio: usar uma estrutura de repetição.
   Ela é utilizada para estabelecer a quantidade de experiência (XP) do herói.

      Obs: a estrutura 'for' foi escolhida porque a quantidade de iterações 
      é fixa de antemão (pela variável nivelTestado), mas
      o 'while' poderia ter sido utilizado também.    
*/
for (let i = 0; i <= nivelTestado; i++) {
    totalXP = i;
}


// descomente a linha de código abaixo, e altere o valor 
// de totalXP para testes com valores mais extremos ou inválidos
//
// totalXP = 'texto_Erro';  // *teste



// Usando a estrutura de decisão 'switch' para determinar o nível do Herói.
// A condição 'true' é utilizada, pois a decisão varia de acordo com uma
// faixa de valores: caso fosse utilizada uma verificação de valores fixos,
// então seria possível utilizar a varável 'totalXP' como condição do switch.
switch (true) {
    case totalXP <= nivelFerro:
        nivelHeroi = 'Ferro';
        break;
    case totalXP <= nivelBronze:
        nivelHeroi = 'Bronze';
        break;
    case totalXP <= nivelPrata:
        nivelHeroi = 'Prata';
        break;
    case totalXP <= nivelOuro:
        nivelHeroi = 'Ouro';
        break;
    case totalXP <= nivelPlatina:
        nivelHeroi = 'Platina';
        break;
    case totalXP <= nivelAscendente:
        nivelHeroi = 'Ascendente';
        break;
    case totalXP <= nivelImortal:
        nivelHeroi = 'Imortal';
        break;
    case totalXP >= nivelRadiante:
        nivelHeroi = 'Radiante';
        break;
    default:
        nivelHeroi = 'Desconhecido';
}


// Saída
console.log('\n---------------------------------------------------------\n');
console.log('(Teste) totalXP = ' + totalXP);  // *teste
console.log('O Herói de nome ' + nomeHeroi + ' está no nível ' + nivelHeroi + '!');
console.log('\n---------------------------------------------------------\n');