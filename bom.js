//open('https://www.tel-ran.com/');
// alert('Hello from DOM');
// let name = prompt('Enter your name:');
// console.log(name);
// alert(name);
// let checker = confirm('Are you older then 18?');
// alert(checker);

console.log(navigator.userAgent);
console.log(navigator.platform);
navigator.geolocation.getCurrentPosition(p => console.log(p.coords.latitude, p.coords.longitude));
console.log(location.origin);
