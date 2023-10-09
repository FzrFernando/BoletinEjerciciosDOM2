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
