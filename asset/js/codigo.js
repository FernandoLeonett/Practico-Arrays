
// Ejercicio 1
retornarLargoARray(['casa', 'arbol', 'pez', 'te', 'murcielago', 'ornitorrinco'])
function retornarLargoARray(pArray) {
    let nuevoArray = [];

    for (let i = 0; i < pArray.length; i++) {
        nuevoArray.push(pArray[i].length);// se mide la longiud de cada elemento(Palabra) y se agrega al nuevo array
    }
    console.log('Ejercicio 1');
    console.log(nuevoArray)
    return nuevoArray;

}
let vectorEj2 = [];
document.getElementById('btnEj2Ingresar').addEventListener('click', btnHandlerEj2);
document.getElementById('btnEj2Mostrar').addEventListener('click', mostrarMayorNumeroEj2);

// Ejercicio 2
function btnHandlerEj2() {

    let numero = Number(obtenerCampo('txtEj2'));
    document.getElementById('txtEj2').value = '';
    if (esNumero(numero)) {
        vectorEj2.push(numero);
    } else {
        obtenerElementoHtml('msgEj2').innerText = 'Solo numeros';
    }
}

function mostrarMayorNumeroEj2() {
    let numMayor = vectorEj2[0];

    for (let i = 0; i < vectorEj2.length; i++) {
        if (vectorEj2[i] > numMayor) {
            numMayor = vectorEj2[i]
        }
    }
    obtenerElementoHtml('msgEj2').innerText = numMayor;

}

// Ejercicio 3
let vectorPalabras = [];
document.getElementById('btnEj3Ingresar').addEventListener('click', btnHandlerEj3);
document.getElementById('btnEj3CrearTabla').addEventListener('click', crearTablaEj3);
document.getElementById('tblEj3').style.display = 'none';
function btnHandlerEj3() {


    let palabra = obtenerCampo('txtEj3');
    document.getElementById('txtEj3').value = '';
    vectorPalabras.push(palabra);


}
function crearTablaEj3() {
    const body = document.querySelector('#tblEj3 tbody');
    document.getElementById('tblEj3').style.display = 'block';

    body.innerHTML = '';
    for (let i = 0; i < vectorPalabras.length; i++) {
        body.innerHTML += `<tr><td>${vectorPalabras[i]}</td></tr>`
    }
}

// Ejercicio 4
let vectorEj4 = [];
document.getElementById('btnEj4Ingresar').addEventListener('click', btnHandlerEj4);
document.getElementById('btnEj4Mostrar').addEventListener('click', mostrarPromedioEj4);

function btnHandlerEj4() {

    let numero = Number(obtenerCampo('txtEj4'));
    document.getElementById('txtEj4').value = '';
    if (esNumero(numero)) {
        vectorEj4.push(numero);
    } else {
        obtenerElementoHtml('msgEj4').innerText = 'Solo numeros';
    }
}

function mostrarPromedioEj4() {
    let promedio = 0;

    for (let i = 0; i < vectorEj4.length; i++) {

        promedio += vectorEj4[i] / vectorEj4.length;

    }

    obtenerElementoHtml('msgEj4').innerText = promedio;

}

// Ejercicio 5
function retornalElementosMayoresA20(pArray) {
    let nuevoArray = [];

    for (let i = 0; i < pArray.length; i++) {
        if (pArray[i] > 20) {
            nuevoArray.push(pArray[i])
        }
    }
    console.log('Ejercicio 5');
    console.log(nuevoArray);
    return nuevoArray;

}
//Ejercicio 6
let vectorAlias = [];
document.getElementById('tblEj6').style.display = 'none';

document.getElementById('btnEj6Alias').addEventListener('click', btnHandlerEj6);

document.getElementById('tblEj6').style.display = 'none';
function btnHandlerEj6() {



    let alias = obtenerCampo('txtEj6');
    if (alias.trim() === alias && vectorAlias.indexOf(alias) === -1) {
        document.getElementById('txtEj6').value = '';
        vectorAlias.push(alias);
        dibujarTabla('tblEj6');

    }

}
function dibujarTabla(idtabla) {
    document.getElementById(idtabla).style.display = 'block';
    const body = document.querySelector(`#${idtabla} tbody`);

    body.innerHTML = '';
    for (let i = 0; i < vectorAlias.length; i++) {
        body.innerHTML += `<tr><td>${vectorAlias[i]}</td></tr>`
    }
}
//Ejercicio 7
document.getElementById('btnEj7Nombre').addEventListener('click', btnHandlerEj7);
document.getElementById('btnEj7Buscar').addEventListener('click', btnHandlerEj7Buscar);
document.getElementById('btnEj7Remplazar').addEventListener('click', btnhandlerEj7Remplazar);
function btnhandlerEj7Remplazar() {
    let pos;
    obtenerElementoHtml('msg3Ej7').innerText = '';
    let nuevoNombre;
    let nombre = obtenerCampo('txtNombreABuscarEj7');
    if (nombre === nombre.trim()) {
        pos = vectorNombres.indexOf(nombre);
        if (pos !== -1) {
            nuevoNombre = obtenerCampo('txtNombreNuevoEj7');
            vectorNombres[pos] = nuevoNombre;
            dibujarTablaEj7('tblEj7')
        } else {
            obtenerElementoHtml('msg3Ej7').innerText = 'No se encontro';
        }
    }
}
function btnHandlerEj7Buscar() {

    const elemento = Number(obtenerCampo('txtEj7Buscar'));
    if (esNumero(elemento) && elemento < vectorNombres.length) {

        obtenerElementoHtml('msgEj7').innerText = `Elemento encontrado: ${vectorNombres[elemento]}`
        obtenerElementoHtml('msg2Ej7').innerText = `Ultimo Elemento ${vectorNombres[vectorNombres.length - 1]}`;
    }

}

document.getElementById('tblEj7').style.display = 'none';
let vectorNombres = [];
function btnHandlerEj7() {



    let nombre = obtenerCampo('txtEj7');

    document.getElementById('txtEj7').value = '';
    vectorNombres.push(nombre);
    dibujarTablaEj7('tblEj7');

}


function dibujarTablaEj7(idtabla) {
    document.getElementById(idtabla).style.display = 'block';
    const body = document.querySelector(`#${idtabla} tbody`);

    body.innerHTML = '';
    for (let i = 0; i < vectorNombres.length; i++) {
        body.innerHTML += `<tr><td>${vectorNombres[i]}</td></tr>`
    }
    body.innerHTML += `<tr><td> Cantidad de Elementos : ${vectorNombres.length}</td></tr>`
}

//Ejercicio 8
function fibonacci() {
    let a = 1
    let b = 1
    let c = 0;
    let i = 0;
    let vectorFibonacci = [1, 1];
    while (i < 20) {
        c = b + a;
        vectorFibonacci.push(c);
        a = b;
        b = c;
        i++;
    }
    console.log('Ejercicio 8');
    console.log(vectorFibonacci);
    return vectorFibonacci;
}
//Ejercicio9
function fibonacciHasta1000() {
    let a = 1
    let b = 1
    let c = 0;
    // sucesion a,b,c
    let vectorFibonacci = [a, b];
    while (c <= 1000) {

        c = b + a;

        vectorFibonacci.push(c);


        a = b;
        b = c;

    }
    console.log('Ejercicio 9');
    console.log(vectorFibonacci);
    return vectorFibonacci;
}
// Ejercicio 10
retornarArraySinRepeticion([1, 1, 'a', 'b', 2, 3, 'a'])
function retornarArraySinRepeticion(pArray) {
    for (let i = pArray.length - 1; i >= 0; i--) {// se cuenta al reves porque si hay una repeticion el index of obtiene la primera repeticion aca sabremos si el indice que encuentra es difernte a lo que devulve el indexOf y si es mayor entonces es porque hay otra antes
        if (pArray.indexOf(pArray[i]) !== i) {
            pArray.splice(i, 1)// se elimina el elemento repetido del array
        }
    }
    console.log('Ejercicio 10');
    console.log(pArray);

}
// Ejercicio 11
let vectorMascotas = ['bob', 'nemo', 'tom', 'firulais', 'pulgoso', 'pelusa'];
nombresQueTerminanCon(vectorMascotas, 'o')
function nombresQueTerminanCon(pVector, pletra) {
    let nuevoArray = []
    let palabra = ''
    for (let i = 0; i < pVector.length; i++) {
        palabra = pVector[i];
        if (palabra.substr(-1) === pletra) {
            nuevoArray.push(palabra);
        }

    }
    console.log('Ejercicio 11');
    console.log(nuevoArray)


}
nombresConMasde7Letras(vectorMascotas);

function nombresConMasde7Letras(pVector) {
    let nuevoArray = []
    let palabra = ''
    let contador = 0;
    for (let i = 0; i < pVector.length; i++) {
        palabra = pVector[i];
        if (palabra.length <= 7) {
            nuevoArray.push(palabra);
        } else {
            contador++;
        }

    }
    console.log('Ejercicio 11');
    console.log(`Nombres mas cortos: ${nuevoArray}`)
    console.log(`Mayores que 7: ${contador}`)

}
//Ejercicio 12
mayorresquePrimero([4, 2, 1, 1, 3, 4, 5, 0, -1])
function mayorresquePrimero(pVector) {
    let nuevoArray = [];
    for (let i = 1; i < pVector.length; i++) {// considero al primer elemento solo para comparar y no lo devuelvo
        if (pVector[i] >= pVector[0]) {
            nuevoArray.push(pVector[i])
        }
    }
    console.log('Ejercicio 12');
    console.log(nuevoArray);
    return nuevoArray;

}