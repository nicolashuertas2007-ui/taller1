// Función: guarda el nombre y la ciudad, y cambia de página
function guardar() {
 const nombre = document.getElementById("nombre").value.trim();
 const ciudad = document.getElementById("ciudad").value.trim();

 // Reto 2: si el nombre está vacío, no guardar y avisar
 if (nombre === "") {
  document.getElementById("mensaje").textContent = "Por favor escribe tu nombre.";
  return;
 }else if (ciudad === "") {
    document.getElementById("mensaje").textContent = "Por favor escribe tu ciudad.";
    return;
    }

 sessionStorage.setItem("nombre", nombre);   // guarda en la bodega
 sessionStorage.setItem("ciudad", ciudad);   // Reto 1
 window.location.href = "pagina2.html";      // cambia de página
}

// Evento: al hacer clic en el botón, se ejecuta guardar
document.getElementById("btn-guardar").addEventListener("click", guardar);
