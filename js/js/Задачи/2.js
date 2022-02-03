let a = []
let b = ' '
function trueAndFalse() {
    for (let i = 0; i < 10; i++) {
        function random1(max = 20) {
            return (Math.floor(Math.random() * max))
        }

        a[i] = random1()
            if (a[i] % 2 === 0) {
                b = true
            } else b = false
            if (b === false){ return false; break;}


    }
}
trueAndFalse()
    console.log(a, a.length, b)



