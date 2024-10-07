export function createInputElement(type, className, placeholder) {
    const input = document.createElement('input');
    input.type = type;
    input.classList.add(className);
    input.placeholder = placeholder;

    return input;
};

export function createButton(className, textCont) {
    const btn = document.createElement('button');
    btn.textContent = textCont;
    btn.classList.add(className);

    return btn;
};

export function createSubHeader(name) {
    const subheader = document.createElement('h2');
    subheader.textContent = name;

    return subheader;
};

export function capFirstLetters(str) {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
}