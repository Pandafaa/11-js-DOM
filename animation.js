const box = document.getElementById('box');
const container = document.getElementById('container');

let pos = 1;
setInterval(move, 10);

let width = container.clientWidth-box.clientWidth;
console.log(width)

let r = false;

function move() {
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';
    // if(r) pos--; else pos++;
    pos=r?pos-1:pos+1;
    // if(pos==width+1) r=true; else if(pos==0) r=false; else;
    r=(pos===width+1)?true:
        (pos===0)?false:
            r;
}