// Función: guarda el nombre y la ciudad, y cambia de página
function guardar() {
 // Lo escrito en la caja; si está vacía, usa lo que ya había guardado
 const nombre = document.getElementById("nombre").value.trim() || localStorage.getItem("nombre") || "";
 const ciudad = document.getElementById("ciudad").value.trim() || localStorage.getItem("ciudad") || "";
 const mensaje = document.getElementById("mensaje");

 mensaje.textContent = "";

 // Si falta algún dato, avisa y no deja seguir
 if (nombre === "") {
  mensaje.textContent = "Tienes que ingresar el nombre. ";
 }
 if (ciudad === "") {
  mensaje.textContent += "Tienes que ingresar la ciudad.";
 }
 if (nombre === "" || ciudad === "") {
  return;   // detiene la función: no guarda ni cambia de página
 }

 localStorage.setItem("nombre", nombre);
 localStorage.setItem("ciudad", ciudad);
 window.location.href = "pagina2.html";
}

document.getElementById("btn-guardar").addEventListener("click", guardar);