"use strict"

const point = document.querySelector('.point');
const text = document.getElementById('text_box');
document.querySelector('.container').addEventListener('mousemove', (event) => {
    const X = event.clientX;
    const Y = event.clientY;
    let newPointY, newPointX;
    if (event.target === text || event.target.classList.contains('text_top')) {
        newPointX = X - 100;
        newPointY = Y - 100;
        point.style.height = '200px';
        point.style.width = '200px';
    } else {
        newPointX = X - 5;
        newPointY = Y - 5;
        point.style.height = '10px';
        point.style.width = '10px';

    }
    if (window.screen.height <= newPointY + 10) {
        newPointY = window.screen.height - 10
    }
    if (window.screen.width <= newPointX + 10) {
        newPointX = window.screen.width - 10
    }
    point.style.left = newPointX + 'px';
    point.style.top = newPointY + 'px';
});

text.addEventListener('mouseover', (event) => {
    const X = event.clientX;
    const Y = event.clientY;
    event.target.style.color = 'white';
    console.log(event.target)
})

text.addEventListener('mouseout', (event) =>{
    event.target.style.color = 'black';
})