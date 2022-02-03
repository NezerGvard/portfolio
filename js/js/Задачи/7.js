let a = []
a[0] = 'Иван'
a[1] = '23'
function nameAge(name, age){
    return `Имя ${name}, возраст: ${age}`
}

console.log(nameAge(a[0], a[1]))