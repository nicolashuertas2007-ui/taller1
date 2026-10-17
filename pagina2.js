// Función: lee el nombre y la ciudad y los muestra
function mostrarNombre() {
 const nombre = sessionStorage.getItem("nombre");
 const ciudad = sessionStorage.getItem("ciudad");
 const saludo = document.getElementById("saludo");

 if (nombre === null) {
  saludo.textContent = `No hay ningún nombre guardado. ciudad: ${ciudad}`;   
 } else if (ciudad === null || ciudad === "") {
  saludo.textContent = "Hola, " + nombre;
 } else {
  saludo.textContent = "Hola, " + nombre + ", de " + ciudad;   // Reto 1
 }
}

// Función: borra el nombre (y la ciudad) y vuelve a mostrar el resultado
function borrar() {
 sessionStorage.removeItem("nombre");
 mostrarNombre();
}

// Reto 4: borra todo lo que haya en sessionStorage
function limpiarTodo() {
 sessionStorage.clear();
 mostrarNombre();
}

// Eventos
document.addEventListener("DOMContentLoaded", mostrarNombre);
document.getElementById("btn-borrar").addEventListener("click", borrar);
document.getElementById("btn-limpiar").addEventListener("click", limpiarTodo);
