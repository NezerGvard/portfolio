document.querySelector('.pom').onclick = myClick


function myClick(){
    let a = document.querySelector('.inp-1').value
    let b = document.querySelector('.inp-2').value
    let i
    i = a
    document.querySelector('.inp-1').value = b
    document.querySelector('.inp-2').value = i
}

