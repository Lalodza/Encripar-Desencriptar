var btnEncriptar = document.querySelector('#encriptar');
var btnDesencriptar = document.querySelector('#desencriptar')
var btnCopy = document.querySelector('#copy');

var text1 = document.querySelector('#textarea-1').value;
/* var textNormal = text1.value; */
/* var textEncriptar = document.textContent(textNormal); */


function encriptar(){
    console.log('se dio click en el botoonnnnnnnn');
    console.log(`El texto ingresado es: ${text1} y es ek que va a cambiar`);
}

btnEncriptar.addEventListener('click',encriptar);
