let b = new Array()
let f = new Array()
let a = new Array()
let d = new Array()
let c,g = ''

function shifr(text){
    c = ''
    for (let i = 0; i<=text.length; i++){
        a[i] = text.charCodeAt(i)+10000
        b[i] = String.fromCharCode(a[i])


    }

    c = c + b
    c = c.replace(/[,]/gi, '')
    console.log(c)
    c = ''
}
shifr('Биба и Бова два долбаеба')
shifr('gasgsagsag')
shifr('gsagasgsazca')
shifr('большой писюн')
shifr('ты пидарас')


function deShifr(textShifr) {
    for (let i = 0; i <= textShifr.length; i++) {
        f[i] = textShifr.charCodeAt(i) - 10000
        d[i] = String.fromCharCode(f[i])
    }

    g = g + d
    g = g.replace(/[,]/gi, '')
    console.log(g)
    g = ''
}
deShifr('⭒⭛✰⭏⭈⭄⭀⭐⭀⭑')
deShifr('ты пидарас')
