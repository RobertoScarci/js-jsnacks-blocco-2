

// ======Function=======
function customDom (parent, child) {
    const newElement = document.createElement(child); 
    parent.append(newElement);
}

const wrapper = document.querySelector('div.wrapper');
customDom(wrapper, 'p');