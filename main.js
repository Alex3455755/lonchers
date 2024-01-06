"use strict"

document.addEventListener("DOMContentLoaded",()=>{
    const title = document.querySelector('.title');
    const cursor = document.createElement('div');
    const menuElems = document.querySelectorAll('.text_top');
    const cursorWidth = 25;
    const cursorHeight = 25;
    const cursorWidthHover = 150;
    const cursorHeightHover = 150;
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);
    console.log(cursor);

    document.body.addEventListener('mousemove',(e) =>{
        let x = e.clientX;
        let y = e.clientY;

        const titleRect = title.getBoundingClientRect();
        const helloMe = menuElems[0].getBoundingClientRect();
        const contact = menuElems[1].getBoundingClientRect();
        const inTitle = (x>titleRect.left && x<titleRect.right && y > titleRect.top && y < titleRect.bottom)||
        (x>helloMe.left && x<helloMe.right && y > helloMe.top && y < helloMe.bottom)||
        (x>contact.left && x<contact.right && y > contact.top && y < contact.bottom);
        console.log(inTitle);
        if (inTitle){
            cursor.style.top = (y-cursorHeightHover/2)+'px';
            cursor.style.left = (x-cursorWidthHover/2)+'px';
            cursor.style.width = cursorWidthHover +'px';
            cursor.style.height = cursorHeightHover +'px';
        }else{
            cursor.style.top = (y-cursorHeight/2)+'px';
            cursor.style.left = (x-cursorWidth/2)+'px';
            cursor.style.width = cursorWidth +'px';
            cursor.style.height = cursorHeight +'px';
        }
    })
})