//3BAR TOGGLE
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    
});

const mseg = document.querySelector('#mesage');
const msegLinks = document.querySelector('.msg');
const bground = document.querySelector('.hero');
const xbut = document.querySelector('.close')

xbut.addEventListener('click',function(){
    msegLinks.classList.toggle('active');
    bground.classList.toggle('active');
    document.getElementById('mbox').value='';
    document.getElementById('mname').value='';
});
mseg.addEventListener('click', function() {
    msegLinks.classList.toggle('active');
    bground.classList.toggle('active');
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    
});

 
function send() {
    var z = document.querySelector('#mname').value;
    var y = document.querySelector('#mbox').value;
    if((z == "")||( y == "")) {
    alert("MUST FILL ALL THE BOX OK :)");
    
    return false
    }else if(z != "" && y != ""){
    mseg.classList.toggle('is-active');
    msegLinks.classList.toggle('active');
    bground.classList.toggle('active');
    document.getElementById('mbox').value='';
    document.getElementById('mname').value='';
    }
} 
