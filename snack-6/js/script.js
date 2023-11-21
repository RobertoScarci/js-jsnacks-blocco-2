const userNumber = parseInt( prompt('Type a number!'));
const wrapper = document.querySelector('section.wrapper');

// ====Function====
function generateSquare(numberSquare) {
    for(let i = 0; i < numberSquare; i++){
        const newSquare = document.createElement('div');
        newSquare.className = 'square' 
        wrapper.append(newSquare);
    }
}

generateSquare(userNumber);