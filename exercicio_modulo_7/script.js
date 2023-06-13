var botão = document.getElementById('verificar')
botão.addEventListener('click', clicar)

function clicar() {
    var nA = document.getElementById('txta').value
    var nB = document.getElementById('txtb').value
    var res = document.getElementById('resultado')
    if (nA.length == 0 || nB.length == 0) {
        res.innerHTML = `Impossível verificar!`
    } else {
        nA = Number(nA)
        nB = Number(nB)
        //Se B for maior que A
        if (nB > nA) {
            res.innerHTML = `Correto! \u{1F973} ${nB} é maior que ${nA}`
        //Se B for igual a A
        } else if (nB == nA) {
            res.innerHTML = `Errado! ${nB} é igual a ${nA}`
        //Se B for menor que A
        } else {
            res.innerHTML = `Errado! ${nB} é menor que ${nA}`
        }
    }
}