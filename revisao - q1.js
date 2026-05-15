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

[
  {
    genero: 'F',
    salario: 'Acima de 3 salários mínimos',
    idade: 'Adulto'
  },
  {
    genero: 'F',
    salario: 'Mais de 1 até 3 salários mínimos (R$ 4.863,00)',
    idade: 'Adulto'
  },
  {
    genero: 'M',
    salario: 'Acima de 3 salários mínimos',
    idade: 'Adulto'
  },
  {
    genero: 'M',
    salario: 'Até 1 salário mínimo (R$ 1.621,00)',
    idade: 'Menor'
  }
]
