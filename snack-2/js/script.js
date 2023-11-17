// inizio a creare le liste 
const nameArray = [
    'Pierino',
    'Rocco',
    'Matilde',
    'Anakin',
    'Padme',
    'Walter'
]

const lastNameArray = [
    'Mattei',
    'Bruno',
    'Trinciabue',
    'Skywalker',
    'Organa',
    'White'
]

resultArray = [];


// creo una lista unendo i nomi e i cognomi
for( let i = 0; i < nameArray.length; i++){
    
    let firstName = nameArray[ Math.floor( Math.random() * nameArray.length)];
    let lastName = lastNameArray[ Math.floor( Math.random() * lastNameArray.length)];

    let completeName = firstName + lastName;

    resultArray.push(completeName)

    console.log( firstName, lastName)
}

console.log(resultArray)