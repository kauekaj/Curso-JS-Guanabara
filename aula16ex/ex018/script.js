let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.querySelector('div#res')
let valores = []


function adicionar() {
    let n = Number(num.value)
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número entre 1 e 100!')
    } else
        
        if (n < 1 || n > 100 || valores.includes(n)) {
            window.alert('Valor inválido ou já cadastrado na lista')
        } else {
            let item = document.createElement('option')
            item.text = `Valor ${n} adicionado`
            valores.push(n)
            lista.appendChild(item)          
        }
    num.value = ''
    num.focus()
}

