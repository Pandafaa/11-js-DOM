const box = document.getElementById('box');
const container = document.getElementById('container');

let pos = 1;
let x = 1;
let y = 1;
setInterval(move, 5);

let width = container.clientWidth-box.clientWidth;
let height = container.clientHeight-box.clientHeight;

let right = true;
let down = true;

function move() {
    box.style.left = x + 'px';
    box.style.top = y + 'px';
    x = right?x+2:x-2;
    y = down?y+1:y-1;

    if(x>=width+1 || x<=0) {
        right=!right;
    }
    if(y>=height+1 || y<=0) {
        down=!down;
    }
}