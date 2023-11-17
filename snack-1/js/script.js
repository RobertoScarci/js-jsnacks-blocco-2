// creo l'array vuoto
const newArray = []
let somma = 0

while(somma < 50){
    const userNumber = parseInt(prompt('inserisci un numero'));

    if(!isNaN (userNumber)){
        somma += userNumber;
        newArray.push(userNumber);
    }
}

console.log(newArray, somma)
