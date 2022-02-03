let tipeAge
function people(name, age) {
    if (age >= 1 & age <= 17) {
        tipeAge = 'ребенок(ая)'
    } else if (age >= 18 & age <= 30) {
        tipeAge = 'молодой(ая)'
    } else if (age >= 31 & age <= 55) {
        tipeAge = 'зрелый(ая)'
    } else if (age >= 55) {
        tipeAge = `старый(ая)`
    } else if (age <= 0 ) {
        tipeAge = `еще не родилось`
    }
    console.log( name + ` ${age} лет и он(a) ` +  tipeAge )
}

people('Ване', 20)
people('Владу', 0)