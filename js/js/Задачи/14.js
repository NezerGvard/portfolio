let block = document.querySelector('.block').onclick = blocking
let unBlock = document.querySelector('.unblock').onclick = unblocking
let elem = document.querySelector('.inp')

function blocking() {
    elem.disabled = true
}

function unblocking(){
    elem.disabled = false
}

