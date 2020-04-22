// document.querySelector(".red").addEventListener('click', () => {
//     document.querySelector(".red").style['background-color'] = 'red';
//     document.querySelector(".red").style['color'] = 'white';
//     document.querySelector(".body").style['background-color'] = 'red';

//   });

//   document.querySelector(".white").addEventListener('click', () => {
//     document.querySelector(".white").style['background-color'] = 'white';
//     document.querySelector(".body").style['background-color'] = 'white';
//     document.querySelector(".white").style['color'] = 'red';
//   });


const red = document.querySelector('.red');
const white = document.querySelector('.white');
const body = document.querySelector('.body');
const changeBackColor = () => {

    red.addEventListener('click', () => {
        body.style['background-color'] = 'red';
        red.style['background-color'] = 'red';
        red.style['color'] = 'white';
        });

    white.addEventListener('click', () => {
        body.style['background-color'] = 'white';
        white.style['background-color'] = 'white';
        white.style['color'] = 'red';
        });
};
changeBackColor();