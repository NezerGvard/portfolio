let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0
function zp(){
    for (const i in salaries) {
        sum += salaries[i]
    }
    if (sum === 0){
        return 0
    }else return sum
}
console.log(zp())