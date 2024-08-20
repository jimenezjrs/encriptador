// Definir selectores de elementos
const inputDeTextoACifrarODescifrar = document.getElementById('frase-de-cifrado');
const botonEncriptar = document.getElementById('boton-encriptar');
const botonDesencriptar = document.getElementById('boton-desencriptar');
const parrafoResultadoDeCifrado = document.getElementById('resultado-de-cifrado');


// Agregar eventos a los botones de click
botonEncriptar.addEventListener('click', function() {
    const textoACifrar = inputDeTextoACifrarODescifrar.value;
    const textoCifrado = encriptarTexto(textoACifrar);
    console.log(`Texto cifrado: ${textoCifrado}`);

    // Modificar el texto en el párrafo de resultado-de-cifrado
    parrafoResultadoDeCifrado.textContent = textoCifrado;
});

botonDesencriptar.addEventListener('click', function() {
    const textoADescifrar = inputDeTextoACifrarODescifrar.value;
    const textoDescifrado = desencriptarTexto(textoADescifrar);
    console.log(`Texto descifrado: ${textoDescifrado}`);

    // Modificar el texto en el párrafo de resultado-de-cifrado
    parrafoResultadoDeCifrado.textContent = textoDescifrado;
});

// Funciones que encriptaran y desencriptaran los valores
function encriptarTexto(texto) {
    /* Usar expresiones regulares en todo el texto para cambiar
       las vocales a la versión encriptada

       a -> ai
       e -> enter
       i -> imes
       o -> ober
       u -> ufat
    */

       const reemplazos = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    let textoCifrado = '';

    for (let caracter of texto) {
        if (reemplazos[caracter]) {
            textoCifrado += reemplazos[caracter];
        } else {
            textoCifrado += caracter;
        }
    }

    return textoCifrado;
}

function desencriptarTexto(texto) {
    /* Usar expresiones regulares en todo el texto para cambiar
       de regreso las palabras encritadas a las vocales originales

       ai -> a
       enter -> e
       imes -> i
       ober -> o
       ufat -> u
    */

    let textoDescifrado = texto
    // /ai/g -> busca todas las 'ai' en el texto y las reemplaza por 'a'
    textoDescifrado = textoDescifrado.replace(/ai/g, 'a');
    // /enter/g -> busca todas las 'enter' en el texto y las reemplaza por 'e'
    textoDescifrado = textoDescifrado.replace(/enter/g, 'e');
    // /imes/g -> busca todas las 'imes' en el texto y las reemplaza por 'i'
    textoDescifrado = textoDescifrado.replace(/imes/g, 'i');
    // /ober/g -> busca todas las 'ober' en el texto y las reemplaza por 'o'
    textoDescifrado = textoDescifrado.replace(/ober/g, 'o');
    // /ufat/g -> busca todas las 'ufat' en el texto y las reemplaza por 'u'
    textoDescifrado = textoDescifrado.replace(/ufat/g, 'u');

    return textoDescifrado;
}
    