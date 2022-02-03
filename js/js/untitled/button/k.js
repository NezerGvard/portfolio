
var button = document.querySelector("button2");
button.addEventListener("click", function() {
    let d
    let c = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    let b = 1
    if (c == b) {
        d = 'Нечья'
    } else if ((c == 1 && b == 3) || (c == 2 && b == 1) || (c == 3 && b == 2)) {
        d = 'победа'
    } else {
        d = 'поражение'
    }
    document.getElementById('out').innerHTML = (d)
})
