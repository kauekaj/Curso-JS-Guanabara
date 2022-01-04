let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.querySelector('div#res')
let valores = []

//Função para adicionar o número na lista
function adicionar() {
    let n = Number(num.value)
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número entre 1 e 100!')
    } else
        
        if (n < 1 || n > 100 || valores.includes(n)) {
            window.alert('Valor inválido ou já cadastrado na lista')
        } else {
            let item = document.createElement('option')
            item.text = `Valor ${n} adicionado.`
            valores.push(n)
            lista.appendChild(item)
            res.innerHTML = ''         
        }
    num.value = ''
    num.focus()
}

// Função para calcular e mostar os dados com base nos números da lista
function finalizar() {
    if (lista.length == 0) {
        alert('A lista está vazia')
    } else {
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0

    for (let pos in valores) {
        soma += valores[pos]

        if (valores[pos] > maior)
            maior = valores[pos]
        if (valores[pos] < menor)
            menor = valores[pos]
        
    }
    media = soma / total

    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
    res.innerHTML += `<p>O maior número é o ${maior}.</p>`
    res.innerHTML += `<p>O menor número é o ${menor}.</p>`
    res.innerHTML += `<p>A soma dos números é ${soma}.</p>`
    res.innerHTML += `<p>A média dos números é ${media}.</p>`
    }
}

// Função para limpar os dados da lista
function limparDados () {
    res.innerHTML = ''
    lista.length =''
    valores = []
}