// Función: lee el nombre y la ciudad y los muestra
function mostrarNombre() {
 const nombre = sessionStorage.getItem("nombre");
 const ciudad = sessionStorage.getItem("ciudad");
 const saludo = document.getElementById("saludo");

 const hayNombre = nombre !== null && nombre !== "";
 const hayCiudad = ciudad !== null && ciudad !== "";

 if (hayNombre && hayCiudad) {
  saludo.textContent = "Hola, " + nombre + ", de " + ciudad;
 } else if (hayNombre) {
  saludo.textContent = "Hola, " + nombre;
 } else if (hayCiudad) {
  saludo.textContent = "Hola, de " + ciudad;
 } else {
  saludo.textContent = "No hay ningún nombre guardado.";
 }
}

// Función: borra SOLO el nombre y vuelve a mostrar el resultado
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