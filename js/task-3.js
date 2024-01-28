'use strict';

const input = document.querySelector("input");
const output = document.querySelector("span");


    
input.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim()) {
        output.textContent = event.currentTarget.value.trim();
    } 
});





