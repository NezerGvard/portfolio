let a = []
for (let i = 0; i < 10; i++) {
    a[i] = Math.floor(Math.random()*100)
    console.log(a, 1)
}
var b = a.slice()
console.log(b, 1)

function a1() {
    a.push(a[0])
    a.shift()
    return a
}

function a2() {
    b[b.length] = b[0]
    b.shift()
    return b
}

console.log(a1(), a2())