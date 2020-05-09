// This is a JavaScript code
var pageTitle = document.getElementById('page-title');
var button1 = document.getElementById('btn1');
var button2 = document.getElementById('btn2');
var button3 = document.getElementById('btn3');

button1.addEventListener('click',() => {
    pageTitle.innerHTML = "Hello World";
})

button2.addEventListener('click',() => {
    pageTitle.innerHTML = "Sample Title";
})

button3.addEventListener('click',() => {
    pageTitle.innerHTML = "Demo Repository";
})