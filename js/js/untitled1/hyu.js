var button = document.querySelector("button");
button.addEventListener("click", function() {
    let c =  Math.floor(Math.random() * (2 - 1 + 1) + 1)
    let d
    if (c === 1){
         d = 'ПИЗДА'
    }else if (c === 2){
         d = 'Хуй'
}
console.log(1)
document.getElementById('out').innerHTML = d
})