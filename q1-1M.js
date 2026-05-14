function resumir(lista) {
    return lista.reduce(
        function (resumo, f) {
            // Gênero
            if (f.genero === 'F')
                resumo.mulheres++
            else
                resumo.homens++
            // Média salarial
            resumo.media_salarial += f.salario / lista.length
            // Idade máxima
            if (f.idade > resumo.idade_max)
                resumo.idade_max = f.idade
            // Idade mínima
            if (f.idade < resumo.idade_min)
                resumo.idade_min = f.idade
            return resumo
        },
        {
            mulheres: 0,
            homens:0,
            media_salarial: 0,
            idade_max: -1,
            idade_min: Infinity,
        }
    )
}

let funcionarios = [
    { nome: 'Alice', idade: 40, genero: 'F', salario: 6000 },
    { nome: 'Bruna', idade: 28, genero: 'F', salario: 3200 },
    { nome: 'Carlos', idade: 51, genero: 'M', salario: 7000 },
]

console.log(resumir(funcionarios))