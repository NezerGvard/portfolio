let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}
function multiplyNumeric(key) {
    for (let i in key) {
        if(typeof key[i] === 'number'){
                  console.log( key[i] * 2)
            }
        }
    }
multiplyNumeric(menu)
