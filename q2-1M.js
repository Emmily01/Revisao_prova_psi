class Estoque {
    constructor() {
        this.itens = []
        this.registros = []
    }

    abastecer(novo) {
        this.registros.push(`Abasteceu ${novo.quantidade}un. de ${novo.id}`)
        for (let i of this.itens) {
            if (i.id === novo.id) {
                i.quantidade += novo.quantidade
                return
            }
        }
        this.itens.push(novo)
    }

    retirar(id, quantidade) {
        for (let i of this.itens) {
            if (id === i.id) {
                if (i.quantidade >= quantidade){
                    i.quantidade -= quantidade
                    this.registros.push(`Retirou -${quantidade}un. de #${id}`)
                } else
                    throw new Error(`Item #${id} tem menos de ${quantidade}un.`)
                return
            }
        }
        throw new Error(`Item #${id} não existe.`)
    }
}

let estoque = new Estoque()
console.log(estoque)


estoque.abastecer({id: 1, descricao: 'Caixa de Tintas', quantidade: 40})
estoque.abastecer({id: 2, descricao: 'Pincel', quantidade: 20})
estoque.abastecer({id: 3, descricao: 'Papel', quantidade: 500})
estoque.abastecer({id: 4, descricao: 'Tesoura', quantidade: 15})
estoque.abastecer({id: 2, descricao: 'Pincel', quantidade: 10})

estoque.retirar(1, 10)
estoque.retirar(2, 30)
estoque.retirar(4, 10)
try {
    estoque.retirar(4, 10)
} catch (err) {
    console.log('Erro:', err.message)
}
estoque.retirar(4, 5)

console.log(estoque)