

// ===Function===
function userWord( firstWord, secondWord){

    if( firstWord.lenght > secondWord.lenght){
        console.log(firstWord)
    } else if(firstWord.lenght < secondWord.lenght) {
        console.log(secondWord);
    } else {
        console.log(firstWord, secondWord)
    };
}

const firstWord = prompt('inserisci una parola');
const secondWord = prompt('inserisci una nuova parola');
userWord (firstWord, secondWord);





