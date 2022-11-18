console.log("Lucas Lira");
console.log("Curso de JavaScript");

// Variáveis 
let idade = 22;
console.log(idade);

let peso = 75;
console.log(peso);

let altura = 169;
console.log("a altura dele é: " + altura);

//Constantes 
let ValorIngressoAdulto = 30;
ValorIngressoAdulto = 30;
console.log(ValorIngressoAdulto);
// O let pode ser designado para você sempre alterar o valor, já o Const, será um valor constante(Que não precisam ser redefinidos).

//Tipos Primitivos
let nome = 'Lucas'; //string literal
let idade = 22; //number literal
let estaAprovado = true; //boolean
let sobrenome = undefined; //undefined
let corSelecionada = null; //null / Redefinir um valor

//Objetos
let pessoa = {
    nome: 'Lucas',
    idade: 22,
    peso: 75,
    estaAprovado: true,
    sobrenome: 'Lira'
};
console.log(pessoa);

//Arrays
let familia = [25, 50, 22, 45];
console.log(familia);

//functions = Para nomear pense sempre assim: Verbo + Substantivo
    Let corSite = "Azul";
function resetaCor() {
    corSite = "";
};
console.log(corSite);
resetaCor();                                         //FUNÇÃO SEM PARÂMETRO

//FUNÇÃO COM PARÂMETRO
let corSite = "Azul";
function resetaCor(cor) {
    corSite = cor;
};
console.log(corSite);

//Tipos de função
//Realizar uma tarefa, não devolve nada 
function dizerNome() {
    console.log("Lucas");
};

dizerNome();
//Faz um cálculo ou operação e retorna algo
function MultiplicarPorDois(valor) {
    return valor * 2;
};
//console.log(MultiplicarPorDois(5));
let resultado = MultiplicarPorDois(5);
console.log(resultado);

//Operadores
//Operadores aritméticos/ou/matemáticos
//Operadores atribuição
//Operadores de comparação
//Operadores lógicos
//Operadores bitwise

//Operadores aritméticos
let salario = 100;
// +, -, *, /; 
console.log(salario + salario);
"" - ""
"" * ""
"" / ""
"" ** ""
//console.log(5**5); = Exponencial.
//Incrementos = ++ ou --
let idade = 22;
console.log(idade++); //ou console.log(++idade);
console.log(idade);

//Operadores de atribuição
let valorTecladoGamer = 100;
//valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;
valorTecladoGamer += valorTecladoGamer; //Valido tbm com o sinal de -
console.log(valorTecladoGamer);

//Operadores de igualdade
//Igualdade estrita
console.log(1 === 1);
console.log('1' === 1);

//Igualdade solta
console.log(1 == 1);
console.log('1' == 1);

//Operador Ternário
let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

//Operadores Lógicos
//Operador lógico "e" ("&&")
//Retorna TRUE se os dois operandos forem true
console.log(true && true); // Vai retornar true;
console.log(false && true); // Vai retornar false, pois os operandos são diferentes;

let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
console.log(podeAplicar);

//Operador Lógico "ou" ("||")
//Retorna TRUE se um dos operandos forem TRUE;
let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
console.log('Pode Aplicar:', podeAplicar);

//Operador  NOT (!)
let candidatoRecusado = !podeAplicar;
console.log('Candidato Recusado', candidatoRecusado);

//Comparações NÃO Boleanos
// Temos o Falsy
// undefined
// null
// 0
// false
// ''
//NaN - not a number

// E temos o truthy

let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;
console.log(corPerfil);

//If..Else
// Se a hora estiver entre 06:00 até 12:00 : Bom Dia!
// Se estiver entre 12:00 até 18:00 : Boa Tarde!
// Caso contrário : Boa Noite!
let hora = 10;
if (condicao) {
    //codigo a ser executado
}
else if (outraCondicao) {
    //codigo a ser executado
}
else {
    //codigo a ser executado
}
//Exemplo abaixo:
let hora = 10;
if (hora > 6 && hora < 12) {
    console.log("Bom Dia!");
}
else if (hora > 12 && hora < 18) {
    console.log("Boa Tarde!");
}
else {
    console.log("Boa Noite!");
}

//Switch Case
let permissao; //usuário comum, gerente, diretor
permissao = 'diretor';
switch (permissao) {
    case 'comum':
        console.log('usuário comum');
        break;

    case 'gerente':
        console.log('usuário gerente');
        break;

    case 'diretor':
        console.log('usuário diretor');
        break;

    default:
        console.log('usuário não reconhecido!');
}

// Laço/Loop for
console.log('Estou aprendendo!');
console.log('Estou aprendendo!');
console.log('Estou aprendendo!');
console.log('Estou aprendendo!');
console.log('Estou aprendendo!');                // FORMA RUIM DE SE FAZER 

// Temos 5 Loops
// 1. For
// 2. While
// 3. Do While
// 4. For In
// 5. For Of

//For
for (let i = 0; i < 5; i++) {
    console.log('Estou aprendendo!', i);
};
//ou
for (let i = 5; i >= 1; i--) {
    if (i % 2 !== 0) {
        console.log(i);
    };
};

//While loop
let i = 5;

while (i >= 1) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i--;
}

//Do While
let i = 0;
do {
    console.log('digitando!', i);
    i++;
} while (i < 10)

//For In
const pessoa = {
    nome: 'Lucas',
    idade: 22
};

for (let chave in pessoa) {
    console.log(chave, pessoa.nome);
}

const cores = ['Vermelho', 'Azul', 'Verde'];

for (let indice in cores) {
    console.log(indice, cores[indice]);
}

//For Of
const cores = ['Vermelho', 'Azul', 'Verde'];
for (let cor of cores) {
    console.log(cor);
}