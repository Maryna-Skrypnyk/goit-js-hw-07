// const refs = {
//     boxes: document.querySelector('#boxes'),
//     input: document.querySelector('input'),
//     container: document.querySelector('#controls'),
//     renderButton: document.querySelector('button[data-action="render"]'),
//     destroyButton: document.querySelector('button[data-action="destroy"]')
// }

// // const boxesEl = document.querySelector('#boxes');
// // const inputEl = document.querySelector('input');
// // const containerEl = document.querySelector('#controls');
// // const renderButtonEl = document.querySelector('button[data-action="render"]');
// // const destroyButtonEl = document.querySelector('button[data-action="destroy"]');

// const amount = (event) => event.currentTarget.value;

// // const onTargetInput = event => {
// //     const amount = event.currentTarget.value;
// //     return amount;
// // };

// const onRenderButtonClick = () => {

//     const createBoxes = amount => {

//     for (let i = 0; i < amount; i += 1) {
//         const boxEl = document.createElement('div');
//         boxEl.style.width = 30 + (i * 10) + 'px';
//         boxEl.style.height = 30 + (i * 10) + 'px';
//         const r = Math.round(Math.random() * 255);
//         const g = Math.round(Math.random() * 255);
//         const b = Math.round(Math.random() * 255);
//         const bgColor = `rgb(${r}, ${g}, ${b})`;
//         boxEl.style.backgroundColor = bgColor;

//         return boxEl;
//     }

//         refs.boxes.append(boxEl);

//         return createBoxes(amount);
// };


// const onDestroyButtonClick = (event) => {
//     refs.boxes.innerHTML = "";
//     event.currentTarget.value = "";
//     return;
// };

    const onDestroyButtonClick = () => {
        const destroyElements = refs.boxes.childNodes;
        Array.from(destroyElements).forEach(node => node.remove());
    };
    
refs.input.addEventListener('input', amount);
refs.renderButton.addEventListener('click', onRenderButtonClick);
refs.destroyButton.addEventListener('click', onDestroyButtonClick);
