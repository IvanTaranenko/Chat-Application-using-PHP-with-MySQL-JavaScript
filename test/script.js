console.log(0);


const resultBlock = document.querySelector('#result');
const pageNumberEl = document.querySelector('#page-number');
const clickMeButton = document.querySelector('#click-me');

    //Функция в обертке
    clickMeButton.addEventListener('click', () => {
        const  promise = getImagesOld(pageNumberEl.value);
        promise
            .then(onDataReceived);
    });



// function onDataReceived(data) {
//     data.forEach(el => {
//         const img = document.createElement('img');
//         img.src = el.thumbnail;
//         document.querySelector('#result').appendChild(img);
//     })
// };




