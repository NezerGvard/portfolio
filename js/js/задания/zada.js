// 1
// function ymn(a,b){
//     return console.log(a*b)
// }
// ymn(51,51)
// ymn(31,11)

// 2
// function people(firstName,lastName,age){
//     return console.log(`${firstName} ${lastName}с возрастом ${age} лет`)
// }
// people('Иван','Петров',17)


//3
// function oprG(gender){
//     if('B' === gender){
//         console.log('Ваш пол мужской')
//     }else     if('G' === gender){
//         console.log('Ваш пол женский')
//     }else{
//         console.log('Ваш пол не определен')
//     }
// }
// oprG(`${prompt('Ваш пол B/G')}`)

//4
// function den(day){
//     switch (day){
//         case '1': console.log('Понедельник')
//             break
//         case '2': console.log('Вторник')
//             break
//         case '3': console.log('Среда')
//             break
//         case '4': console.log('Четверг')
//             break
//         case '5': console.log('Пятница')
//             break
//         case '6': console.log('Суббота')
//             break
//         case '7': console.log('Восскресенье')
//             break
//         default:console.log('В неделе только 7 дней')
//     }
// }
// den(`${prompt('1-7')}`)

//5
    for (let i=1; i>100; i++){
        if (i<=18){
            console.log(`${i} лет - ребенок`)
        }else if (i<=30){
            console.log(`${i} лет - молодой`)
        }else if (i<55){
            console.log(`${i} лет - зрелый`)
        }else{
            console.log(`${i} лет - старый`)
        }
    }
