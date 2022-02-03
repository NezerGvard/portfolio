let a = []
let sr = 0

for (let i = 0; i < 10; i++) {
    a[i] = Math.floor(Math.random()*100)
}

function sred(){
    for (let i = 0; i < 10; i++) {
    sr = a[i] + sr
    }
    return Math.floor(sr / a.length)
}

console.log(sred(), a)