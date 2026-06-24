// Buscar os valores preenchidos

// Criar variaveis para cada elemento criado (buscar id's dentro dos elemntos, nao na div)
const avaliar = document.getElementById('avaliar');
// Ao clicar avaliar, devera executar a funcao valoresIMC (Por isso deixei a a variavel fora da funcao)

function valoresIMC() {
    const nome = document.getElementById('campoNome').value
    const altura = document.getElementById('campoAltura').value
    const peso = document.getElementById('campoPeso').value

    const resultado = document.getElementById('campoResultado');

    // Ler os valores recebidos e calcular o resultado
    if (nome !== "" && altura !== "" && peso !== "") {
        const imc = (peso / (altura * altura)).toFixed(1)

        // Classificacao de acordo com o resultado dado 
        let classificacao = '';
        if (imc <= 20) {
            classificacao = 'Come mais seu desnutrido/a!'
        } else if (imc <= 35) {
            classificacao = 'Seu peso esta good!'
        } else if (imc <= 50) {
            classificacao = 'Melhor Fazer dieta!'
        } else if (imc >= 60) {
            classificacao = 'Cuidado seu obeso/a, daqui a pouco vais explodir!'
        }
        // Exibir o resultado imc, com nome e classificacao
        resultado.value = ` ${nome}, o seu IMC deu ${imc}. ${classificacao}`

    } else {
        resultado.value = ' --Burro! Preencha todos campos...---'
    }


}
avaliar.addEventListener('click', valoresIMC);