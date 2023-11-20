
const firstUserNumber = parseInt(prompt('Type a number'))
const secondUserNumber = parseInt(prompt('Type a number'))

if(numberDivisibile(firstUserNumber, secondUserNumber)){
    console.log(true)
} else {
    console.log(false)
}

if(firstUserNumber === secondUserNumber){
    console.log( firstUserNumber)
}

// ====Function====
function numberDivisibile(numberOne, numberTwo) {
    if( numberOne % numberTwo === 0){
        return true;
    } else {
        return false;
    }
}