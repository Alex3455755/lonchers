"use strict"

const point = document.querySelector('.point');
const text = document.getElementById('text_box');
document.addEventListener('mousemove', (event) => {
    const X = event.clientX;
    const Y = event.clientY;
    let newPointY, newPointX;
    if (event.target === text || event.target === document.getElementById('text')) {
        newPointX = X - 100;
        newPointY = Y - 100;
    } else {
        newPointX = X - 5;
        newPointY = Y - 5;
    }
    point.style.left = newPointX + 'px'
    point.style.top = newPointY + 'px'
});

text.addEventListener('mouseover', (event) => {
    point.style.height = '200px';
    point.style.width = '200px';
});

text.addEventListener('mouseout', (event) => {
    console.log(event.toElement)
    if (event.toElement !== point) {
        point.style.height = '10px';
        point.style.width = '10px';
    }
})