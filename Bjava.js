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
const xbut = document.querySelector('.close');

xbut.addEventListener('click',function(){
    msegLinks.classList.toggle('active');
    document.getElementById('mbox').value='';
    document.getElementById('mname').value='';
});
mseg.addEventListener('click', function() {
    msegLinks.classList.toggle('active');
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    
});

const light = document.getElementById('lightmode')
const tog = document.getElementById('radiant3').value='1';
light.onclick = function (){
    document.body.classList.toggle('light-mode')
    
    if (document.getElementById('radiant3').value=='1')
    {
        document.getElementById('radiant3').value='3';
        document.getElementById('radmobile').src="./assets/Logo/SVG2/radaja2.svg";
        document.getElementById('radiant1').src="./assets/Logo/SVG2/Aset 1.svg";
        document.getElementById('radiant3').src="./assets/Logo/SVG2/Aset 3.svg";
        document.getElementById('radiant4').src="./assets/Logo/SVG2/Aset 4.svg";
        document.getElementById('radiant5').src="./assets/Logo/SVG2/Aset 5.svg";
        document.getElementById('radiant6').src="./assets/Logo/SVG2/Aset 6.svg";
        document.getElementById('radiant7').src="./assets/Logo/SVG2/Aset 7.svg";
        document.getElementById('radiant8').src="./assets/Logo/SVG2/Aset 8.svg";
        document.getElementById('radiant9').src="./assets/Logo/SVG2/Aset 9.svg";
    }else{
        document.getElementById('radiant3').value='1';
        document.getElementById('radmobile').src="./assets/Logo/SVG/radaja.svg";
        document.getElementById('radiant1').src="./assets/Logo/SVG/Asset 1.svg";
        document.getElementById('radiant3').src="./assets/Logo/SVG/Asset 3.svg";
        document.getElementById('radiant4').src="./assets/Logo/SVG/Asset 4.svg";
        document.getElementById('radiant5').src="./assets/Logo/SVG/Asset 5.svg";
        document.getElementById('radiant6').src="./assets/Logo/SVG/Asset 6.svg";
        document.getElementById('radiant7').src="./assets/Logo/SVG/Asset 7.svg";
        document.getElementById('radiant8').src="./assets/Logo/SVG/Asset 8.svg";
        document.getElementById('radiant9').src="./assets/Logo/SVG/Asset 9.svg";
    }
}
 
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
