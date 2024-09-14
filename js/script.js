
const images = [
    "assets/img10.jpeg",
    "assets/img9.jpeg",
    "assets/img8.jpeg",
    "assets/img7.jpeg",
    "assets/img6.jpeg",
    "assets/Logo.png",
    "assets/img4.jpg",
    "assets/img3.jpg",
    "assets/gif.gif",
];

// Referencia a la tabla
const table = document.getElementById('imageTable');
let row;

// Iterar sobre la lista de imágenes
images.forEach((image, index) => {
    if (index % 4 === 0) {
        // Crear nueva fila cada 4 imágenes
        row = document.createElement('tr');
        table.appendChild(row);
    }
    // Crear una celda y añadir la imagen
    const cell = document.createElement('td');
    const imgElement = document.createElement('img');
    imgElement.src = image;
    cell.appendChild(imgElement);
    row.appendChild(cell);
});
