let a = []
let b
for (let i = 0; b != false; i++) {

    for (let i = 0; i < 10; i++) {
        a[i] = Math.floor(Math.random() * 10)
    }

    function trueAndFalse() {
        for (let i = 0; i < 10; i++) {
            if (a[i] % 2 === 1) {
                return b = true;
                break;
            } else if (a[i] % 2 === 0) {
                b = false
            }
        }
        return b

    }

    console.log(trueAndFalse(), a, i)
}