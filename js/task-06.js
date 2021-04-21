const inputEl = document.querySelector("#validation-input");

const dataLength = inputEl.getAttribute("data-length");
 
const onInputBlur = event => {
    event.currentTarget.value.length === Number(dataLength) ?
        inputEl.classList.add('valid') : inputEl.classList.add('invalid');
};

const onInputFocus = () => {
    inputEl.classList.remove('valid', 'invalid');
}

inputEl.addEventListener("blur", onInputBlur);
inputEl.addEventListener("focus", onInputFocus);
