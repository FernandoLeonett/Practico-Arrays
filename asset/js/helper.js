function obtenerCampo(_texto) {
    return document.getElementById(_texto).value;

}
function obtenerElementoHtml(_elemento) {
    return document.getElementById(_elemento);

}
function esMayorque(_texto, _numero) {


    return (Number(_texto) > _numero);


}


function esNumero(_texto) {



    return (!isNaN(_texto) && _texto !== "");

}

function eliminarCaracter(pTexto, pCaracter) {
    let nuevaPalabra = '';
    for (let i = 0; i < pTexto.length; i++) {
        if (pTexto[i] !== pCaracter) {
            nuevaPalabra += pTexto[i];
        }
    }
    return nuevaPalabra;


}
function remplazarCaracter(pTexto, pCaracterViejo, pCaracterNuevo) {
    let nuevaPalabra = '';
    for (let i = 0; i < pTexto.length; i++) {
        if (pTexto[i] === pCaracterViejo) {
            nuevaPalabra += pCaracterNuevo;
        } else {
            nuevaPalabra += pTexto[i];
        }
    }
    return nuevaPalabra;


}
