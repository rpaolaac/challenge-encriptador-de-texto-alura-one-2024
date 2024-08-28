// Selección de elementos del DOM
var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".contenedormunieco");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

// Asociar eventos a los botones
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

// Función para encriptar el texto
function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto);
}

// Función para desencriptar el texto
function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
}

// Recupera el texto ingresado en el textarea
function recuperarTexto(){
    var cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value;
}

// Oculta elementos no necesarios después de encriptar/desencriptar
function ocultarAdelante(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

// Algoritmo para encriptar el texto
function encriptarTexto(mensaje){
    var textoFinal = "";
    for(var i = 0; i < mensaje.length; i++){
        switch(mensaje[i]) {
            case "a": textoFinal += "ai"; break;
            case "e": textoFinal += "enter"; break;
            case "i": textoFinal += "imes"; break;
            case "o": textoFinal += "ober"; break;
            case "u": textoFinal += "ufat"; break;
            default: textoFinal += mensaje[i];
        }
    }
    return textoFinal;
}

// Algoritmo para desencriptar el texto
function desencriptarTexto(mensaje){
    return mensaje.replace(/ai/g, "a")
                  .replace(/enter/g, "e")
                  .replace(/imes/g, "i")
                  .replace(/ober/g, "o")
                  .replace(/ufat/g, "u");
}

// Función para copiar el texto al portapapeles
const btnCopiar = document.querySelector(".btn-copiar"); 
btnCopiar.addEventListener("click", function() {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Texto copiado al portapapeles");
});