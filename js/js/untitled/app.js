// const persone1 = {
//     firstName: 'Вера',
//     lastName: 'Стрeлец',
//     year: 12,
//     hobbi:['risovanie','4tenie'],
//     isGay: false
// }
// const persone2 = {
//     firstName: 'Денис',
//     lastName: 'Пуйда',
//     year: 17,
//     hobbi: ['игра в танки онлайн на пк и телефоне', 'баю бай засыпай шейли попадают в рай, не ультуй не стреляй, не ультуй не стреляй'],
//     isGay: null
// }
//
// // let persone3;
// // persone3 = {
// //     // firstName: prompt("Имя"),
// //     // lastName: prompt('Фамилия'),
// //     // year: prompt('Возраст'),
// //     // hobbi: prompt('Хобби'),
// //     // isGay: prompt('Вы гей'),
// //     // longDick: prompt('Вы гей')
// // };
// function persone(firstName, lastName, year, hobbi, isgay, longDick){
//     return console.log(firstName,lastName,year,hobbi, isgay, longDick)
// }
// persone('Пуйда','Денис',17,'game computer gay, watch film', false, '41cm')
// // let firstName = prompt("Имя")
// // let lastName = prompt('Фамилия')
// // let age = prompt('Возраст')
// // let hobbi = prompt('Хобби')
// // let isGay = prompt('Вы гей')
// // let longDick = prompt('Вы гей')
// // persone(`${firstName}`,`${lastName}`,`${age}`,`${hobbi}`, `${isGay}`, `${longDick}`)
// console.log(randomeSize1(10, 4155))
//
// console.log(persone1,persone2)
// console.log(typeof 1 )
//
// console.log(persone2.firstName
// )
//
// function randomeSize1(min,max){
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }
//
//
//
//
// const arrow2 = name => console.log('загадка от жака фреско, на размышление 5 сек',name)
//
// arrow2('da')
//
// function people(firstname,lastname,age,){
//     return console.log(firstname,lastname,age)
// }
// let name1='Олег'
// let age1='18'
//
// people(`Игорь ${name1} швайко моё имя и мне ${age1} лет`,`аххахаха я самый умный`,`${age1}`)
//
// // let a  = prompt('you gay?')
// // if (a === 'da'){
// //     alert('faf')
// // }
//
// for (let i = 111 ;i>1 ;i = i-7){
//     console.log(`чичло i = ${i}`)
// }
//
// let a = 'привет, как дела?'
// const text14 = a.split('').reverse().join('  ')
// console.log(text14)
//
//
// let fibanat4i = [1, 1, 2, 3, 5]
//     for (let i=0; i<=20; i++){
//         fibanat4i[fibanat4i.length]=fibanat4i[fibanat4i.length-1]+fibanat4i[fibanat4i.length-2]
//         console.log(fibanat4i)
//     }

// let a = prompt(); b=prompt(); c = prompt(); d = ''; x1= ''; x2= ''
// d = (b**2-4*a*c)*1/2
// if (d>0){
//     x1 = (-b+d)/2*a
//     x2 = (-b-d)/2*a
//     console.log(x1,x2)
// }else if (d=0){
//     x1 = (-b+d)/2*a
//     console.log(x1)
// }else console.log('нет корней')

// let mass= ['Дома','Арбуз','Гей','Владик']
// console.log(mass)
// console.log(mass.sort())
// console.log(mass.sort().reverse())
//
//
// function compare(a, b) {
//     if (a<b) {
//         return -1;
//     }
//     if (a>b) {
//         return 1;
//     }
//     // a должно быть равным b
//     return 0;
// }
//
//
// console.log(compare(1, 5));
//
// var numbers = [4, 2, 5, 1, 3];
// numbers.sort();
// console.log(numbers);





let b
const a = prompt('камень,ножницы,бумага')
if (a === 'камень'){
    b = 1
}
if (a === 'ножницы'){
    b = 2
}
if (a === 'бумага'){
    b = 3
}
function c(min,max){
    return  Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(c(1, 3))
if (c === b){
    alert('Нечья')
}else if (c === 1 && b === 3 || c === 2 && b === 1 || c === 3 && b === 2){
    alert('победа')
}else alert('поражение')