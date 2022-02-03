let a = []
let b = []
for (let i = 0; i < 10; i++) {
    a[i] = Math.floor(Math.random()*100)
}
function k(){
    for (let i = 0; i < 10; i++) {
        if (a[i] % 5 === 0 ) {
            b[i] = a[i]
        }
    }
    return b
}
console.log(k())
console.log(a)