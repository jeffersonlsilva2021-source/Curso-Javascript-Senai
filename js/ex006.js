// 2. Número positivo, negativo ou zero
// Crie um programa que verifique e retorne se um número é positivo, negativo ou
// igual a zero.

// let numero = 0

// if (numero == 0){
//     console.log("O numero é zero!!")
// }else if (numero < 0){
//     console.log("Negativo")
// }else{
//     console.log("Positivo")
// }

// *************************************************************************************

// 3. Par ou ímpar
// Crie um programa que verifique e retorne se um número é par ou ímpar

// let numero = 320

// let resultado = numero % 2 

// if (resultado == 0){
//     console.log("PAR")
// }else{
//     console.log("ÍMPAR")
// }

// *************************************************************************************

// 4. Boletim escolar
// Crie um programa que classifique o resultado de um aluno com base na nota:
// • Nota maior ou igual a 70 → "Aprovado".
// • Nota entre 50 e 69 → "Recuperação".
// • Nota menor que 50 → "Reprovado".



// if (notaFinal >= 70){
//     console.log("Aluno Aprovado")
// }else if (notaFinal >=50 && notaFinal < 70){
//     console.log("Recuperação")
// }else{
//     console.log("Aluno Reprovado")
// }


// let notaFinal = 59

// if (notaFinal < 50){
//     console.log("Reprovado")
// }else if (notaFinal < 70){
//     console.log("Recuperação")
// }else{
//     console.log("Aprovado")
// }

// *************************************************************************************

// 6. Classificação de idade
// Crie um programa que classifique a idade de uma pessoa:
// • 0 a 12 anos → "Criança".
// • 13 a 17 anos → "Adolescente".
// • 18 a 59 anos → "Adulto".
// • 60 anos ou mais → "Idoso"

// let idade = 60
// console.log(`Com ${idade} anos de idade, você é: `)

// if(idade <= 12){
//     console.log("Criança")
// }else if (idade <= 17){
//     console.log("Adolescente")
// }else if (idade < 60){
//     console.log("Adulto")
// }else{
//     console.log("Idoso")
// }

//**************************************************************************************

// 7. Calculadora simples
// Crie um programa que receba dois números (n1 e n2) e um operador (+, -, *, /).
// Calcule e exiba o resultado de acordo com o operador informado.
// Caso seja divisão, verifique se o divisor não é zero.

let numero1 = 5
let numero2 = 2
let operador = "/"

if (operador == "+") {
    let resultado = numero1 + numero2
    console.log(`${numero1} ${operador} ${numero2} = ${resultado}`)
} else if (operador == "*") {
    let resultado = numero1 * numero2
    console.log(`${numero1} ${operador} ${numero2} = ${resultado}`)
} else if (operador == "-") {
    let resultado = numero1 - numero2
    console.log(`${numero1} ${operador} ${numero2} = ${resultado}`)
} else if (operador == "/") {
    if (numero2 == 0) {
        console.log("Não é possivel dividir por Zero!!")
    } else {
        let resultado = numero1 / numero2
        console.log(`${numero1} ${operador} ${numero2} = ${resultado}`)
    }
}
