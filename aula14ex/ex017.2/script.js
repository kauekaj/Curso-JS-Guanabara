
function tabuada() {
    let nun = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (nun.value.length == 0) {
        window.alert('Por favor, digite um número!')
        
    } else {
        let n = Number(nun.value)
        tab.innerHTML = ''
        
        for (let c = 1;c <= 10;c++) {
            let item = document.createElement('option')
            item.text = `${n} + ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}