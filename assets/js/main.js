/* 
    Reglas de encriptación: 
        "e" es convertido para "enter" 
        "i" es convertido para "imes"
        "a" es convertido para "ai"
        "o" es convertido para "ober"
        "u" es convertido para "ufat"
*/

/* 
    Reglas de desencriptación: 
        "enter" es convertido para "e" 
        "imes" es convertido para "i"
        "ai" es convertido para "a"
        "ober" es convertido para "o"
        "ufat" es convertido para "u"
*/

var btnEncriptar = document.querySelector("#encriptar"); 
btnEncriptar.onclick = encriptacion;

var btnDesencriptar = document.querySelector("#desencriptar"); 
btnDesencriptar.onclick = desencriptacion;

var btnCopy = document.querySelector("#copy"); 
btnCopy.onclick = copy;


/* ======================= Funcion para encriptar el mensaje ==================== */
function encriptacion(){
    var texto = document.querySelector("#textarea-1").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector("#textarea-2").value = textoCifrado;
    document.querySelector("#textarea-1").value;
}

/* ======================= Funcion para Desencriptar el mensaje ==================== */
function desencriptacion (){ 
    var texto = document.querySelector("#textarea-1").value;
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector("#textarea-2").value = textoCifrado; 
    document.querySelector("#textarea-1").value;
}

/* ======================= Funcion para Copiar el resultado ==================== */
function copy() {
    var copyText = document.querySelector("#textarea-2").value;
    copyText.select();
    document.execCommand('copy');
    alert('Texto Copiado ✅');
}
