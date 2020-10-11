const box = document.getElementById('box');
const container = document.getElementById('container');

let pos = 1;
let x = 1;
let y = 1;
setInterval(move, 10);

let width = container.clientWidth-box.clientWidth;
let height = container.clientHeight-box.clientHeight;

console.log(width)

let lu = false;
let ld = false;
let ru = false;
let rd = true;

function move() {
    box.style.left = x + 'px';
    box.style.top = y + 'px';
    if(rd) {
        x++;
        y++;
    }
    if(ru) {
        x++;
        y--;
    }
    if(lu) {
        x--;
        y--;
    }
    if(ld) {
        x--;
        y++;
    }

    if(x==width+1 && ru) {
        ru=false;
        lu = true;
    }
    if(x==width+1 && rd) {
        rd = false;
        ld = true;
    }
    if(y==height+1 && ld) {
        ld = false;
        lu = true;
    }
    if(y == height+1 && rd) {
        rd = false;
        ru = true;
    }
    if(x==0 && lu) {
        lu = false;
        ru = true;
    }
    if(x==0 && ld) {
        ld = false;
        rd = true;
    }
    if(y==0 && ru) {
        ru = false;
        rd = true;
    }
    if(y==0 && lu) {
        lu = false;
        ld = true;
    }
}