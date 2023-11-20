const firstWord = prompt('inserisci una parola');
const secondWord = prompt('inserisci una nuova parola');

if( userWord(firstWord, secondWord)){
    console.log(firstWord, secondWord)
} else if(firstWord.length < secondWord.length) {
    console.log(secondWord);
} else {
    console.log(firstWord)
};

// ===Function===
function userWord( oneWord, twoWord){
    if (oneWord.length === twoWord.length){
        return true;
    } else {
        return false;
    }
}






