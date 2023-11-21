const wrapper = document.querySelector('div.wrapper');
const newElement = document.createElement('p');
newElement.innerHTML = 'ciao'

// ======Function=======
function customDom (parent, child) { 
    child.append(parent);
}

customDom(newElement, wrapper);
