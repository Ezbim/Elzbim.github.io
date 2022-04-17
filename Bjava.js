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
//toggle button
const light = document.getElementById('lightmode');
let terangMode = localStorage.getItem('terangMode'); 

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('light--mode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('terangMode', 'enabled');
  document.getElementById('radmobile').src="./assets/Logo/SVG2/radaja2.svg";
    document.getElementById('radiant1').src="./assets/Logo/SVG2/Aset 1.svg";
    document.getElementById('radiant3').src="./assets/Logo/SVG2/Aset 3.svg";
    document.getElementById('radiant4').src="./assets/Logo/SVG2/Aset 4.svg";
    document.getElementById('radiant5').src="./assets/Logo/SVG2/Aset 5.svg";
    document.getElementById('radiant6').src="./assets/Logo/SVG2/Aset 6.svg";
    document.getElementById('radiant7').src="./assets/Logo/SVG2/Aset 7.svg";
    document.getElementById('radiant8').src="./assets/Logo/SVG2/Aset 8.svg";
    document.getElementById('radiant9').src="./assets/Logo/SVG2/Aset 9.svg";
    console.log("terang")
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('light--mode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('terangMode', null);
  document.getElementById('radmobile').src="./assets/Logo/SVG/radaja.svg";
    document.getElementById('radiant1').src="./assets/Logo/SVG/Asset 1.svg";
    document.getElementById('radiant3').src="./assets/Logo/SVG/Asset 3.svg";
    document.getElementById('radiant4').src="./assets/Logo/SVG/Asset 4.svg";
    document.getElementById('radiant5').src="./assets/Logo/SVG/Asset 5.svg";
    document.getElementById('radiant6').src="./assets/Logo/SVG/Asset 6.svg";
    document.getElementById('radiant7').src="./assets/Logo/SVG/Asset 7.svg";
    document.getElementById('radiant8').src="./assets/Logo/SVG/Asset 8.svg";
    document.getElementById('radiant9').src="./assets/Logo/SVG/Asset 9.svg";
    console.log("gelap")
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (terangMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
light.addEventListener('click', () => {
  // get their darkMode setting
  terangMode = localStorage.getItem('terangMode'); 
  
  // if it not current enabled, enable it
  if (terangMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
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
