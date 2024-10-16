export function createInputElement(type, className, placeholder, onKeydownHandler) {
    const input = document.createElement('input');
    input.type = type;
    input.classList.add(className);
    input.placeholder = placeholder;
    input.onkeydown = onKeydownHandler;

    return input;
};

export function createButton(className, textCont, onClickHandler) {
    const btn = document.createElement('button');
    btn.textContent = textCont;
    btn.classList.add(className);
    btn.onclick = onClickHandler;

    return btn;
};

export function createSubHeader(name) {
    const subheader = document.createElement('h2');
    subheader.textContent = name;

    return subheader;
};

export function createList(className) {
    const list = document.createElement('ul');
    list.classList.add(className);

    return list;
};

export function createDiv(className, id) {
    const div = document.createElement('div');
    div.classList.add(className);
    div.id = id;

    return div;
}

export function capFirstLetters(str) {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
}