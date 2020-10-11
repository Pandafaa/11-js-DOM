// console.log(document.body.innerHTML);
// document.body.innerHTML = '<h1>Hello world!</h1>';
const div1 = document.getElementById('div1');
//console.log(div1.innerHTML);
div1.style.border = '1px solid black';
const phrs = document.querySelectorAll('#div1 > p');
for (let i = 0; i < phrs.length; i++) {
    phrs[i].innerHTML = `<span>new text ${i + 1}</span>`;
}
const children = div1.children;
console.log(children.length);
console.log(p1.children[0].childNodes.length);
for (let i = 0; i < children.length; i++) {
    children[i].style.color = 'red';
}
const newP = document.createElement('p');
const newPText = document.createTextNode('this text created by special method');
newP.append(newPText);
div1.append(newP);
// div1.append(newP);
// div1.append(newP);
//div1.insertBefore(newP, div1.lastElementChild);
//document.body.insertBefore(newP, div1.nextElementSibling);
//div1.insertBefore(newP, children[1]);
const newP2 = document.createElement('p');
const  newP2Text = document.createTextNode('p2 text');
newP2.append(newP2Text);
div1.replaceChild(newP2, div1.firstElementChild);
//div1.removeChild(div1.children[1]);
div1.removeChild(div1.firstElementChild.nextElementSibling);
