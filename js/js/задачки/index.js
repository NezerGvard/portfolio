// let int = 0
// function mas(z){
//     for (let i = 0; i < z.length; i++) {
//         for (let j = 0; j < z[i].length; j++) {
//         if (z[i][j]==='x'){
//                 int = int+4
//             }
//         }
//     }
// }
// mas([['x',3,2],[1,'x','x'],[1,'x',2]])
//
// console.log(int)
let x
    x = 0.1+0.2
console.log((0.1+0.2).toFixed(2))
console.log(typeof(x))
function random (min,max) {
    return  Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(random(5,41))
console.log(typeof(random(5,41)))
console.log(typeof(true))
console.log(typeof('das'+12))
console.log(typeof(null))
console.log(typeof({
    con: 'gay',
    faf: 'das'
}))
console.log(typeof(undefined))

let arrPredicat = (a,p) => {
    for (let i = 0; i < a.length; i++) {
        if (!p(a[i])) {return false}
    }
    return true
}
let arr=[2,4,1,6,8]
console.log (arrPredicat(arr, function (x) {return (x%2==0)}))
// false

