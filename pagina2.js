function mostrarNombre() {
 const nombre = localStorage.getItem("nombre");
 const ciudad = localStorage.getItem("ciudad");
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

// Función: borra el nombre (y la ciudad) y vuelve a mostrar el resultado
function borrar() {
 localStorage.removeItem("nombre");
 mostrarNombre();
}

// Reto 4: borra todo lo que haya en localStorage
function limpiarTodo() {
 localStorage.clear();
 mostrarNombre();
}

// Eventos
document.addEventListener("DOMContentLoaded", mostrarNombre);
document.getElementById("btn-borrar").addEventListener("click", borrar);
document.getElementById("btn-limpiar").addEventListener("click", limpiarTodo);
