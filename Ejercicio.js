// Ejercicio 1: Creación y Adición de Nodos
// 1.1. Utiliza document.createElement('etiqueta') para crear un nuevo elemento HTML <div>. Asigna este elemento a una variable llamada nuevoDiv.
let nuevoDiv = document.createElement('div');

// 1.2. Usa document.createTextNode('texto') para crear un nuevo nodo de texto con el contenido "Nuevo elemento de lista". Asigna este nodo a una variable llamada textoNuevo.
let textoNuevo = document.createTextNode('Nuevo elemento de lista');

// 1.3. Utiliza nuevoDiv.appendChild(nuevoNodo) para agregar textoNuevo como hijo del nuevoDiv. Luego, agrega nuevoDiv como último hijo del elemento con el id "lipsum" en tu página web de ejemplo.
nuevoDiv.appendChild(textoNuevo);
let divLipsum = document.getElementById('lipsum');
divLipsum.appendChild(nuevoDiv);

// 1.4. Añade a la página:
// Un nuevo párrafo al final del DIV ‘lipsum’ con el texto “Nuevo párrafo añadido por javascript” (fíjate que una palabra estça en negrita)
let parrafoNuevo = document.createElement('p');
parrafoNuevo.innerHTML+='Nuevo párrafo <strong>añadido</strong> por javascript'
divLipsum.appendChild(parrafoNuevo);

// Un nuevo elemento al formulario tras el ‘Dato 1’ con la etiqueta ‘Dato 1 bis’ y el INPUT con id ‘input1bis’ que al cargar la página tendrá escrito “Hola”
let label1 = document.querySelector("label[for='input1']");
let labelNuevo = document.createElement('label');
labelNuevo.innerHTML += 'Dato 1 bis';
let inputNuevo = document.createElement('input');
inputNuevo.setAttribute('id','input1bis');
inputNuevo.value = "Hola";
labelNuevo.appendChild(inputNuevo);
label1.after(labelNuevo);


// Ejercicio 2: Inserción de Nodos
// 2.1. Utiliza document.querySelector() para obtener el primer párrafo dentro del div con id "lipsum" en tu página web de ejemplo. Almacena este nodo en una variable llamada primerParrafo.
let primerParrafo = document.querySelector("#lipsum p");

// 2.2. Crea un nuevo elemento <p> con el texto "Este es el nuevo segundo párrafo" y almacénalo en una variable llamada nuevoParrafo.
let nuevoParrafo = document.createElement('p');
nuevoParrafo.innerHTML+= "Este es el nuevo segundo párrafo";

// 2.3. Utiliza el método primerParrafo.before(nuevoParrafo) para insertar nuevoParrafo antes del primer párrafo dentro del div "lipsum".
primerParrafo.before(nuevoParrafo);


// Ejercicio 3: Reemplazo y Eliminación de Nodos
// 3.1. Utiliza document.querySelector() para obtener el primer elemento <li> dentro de una lista en tu página web de ejemplo. Almacena este nodo en una variable llamada primerElemento.
