function buscarJuego() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const juegos = document.querySelectorAll('.game-card');

  juegos.forEach(juego => {
    const titulo = juego.getAttribute('data-title').toLowerCase();
    if (titulo.includes(input)) {
      juego.style.display = '';  // Deja vacío para respetar el estilo CSS original (flex)
    } else {
      juego.style.display = 'none';
    }
  });
}

// Ejecuta búsqueda en tiempo real mientras escribes
document.getElementById('searchInput').addEventListener('input', buscarJuego);

// Redirigir al hacer click en la tarjeta (puedes cambiar las URLs a las que quieras)
document.querySelectorAll('.game-card').forEach(card => {
  card.addEventListener('click', () => {
    const title = card.getAttribute('data-title').toLowerCase();
    // Aquí decides a qué URL ir según el juego
    let url = '#';
    switch (title) {
      case 'dark souls 2':
        url = 'dark_souls_2.html';
        break;
      case 'dark souls 1 remastered':
        url = 'dark_souls_1.html';
        break;
      case 'devil may cry 5':
        url = 'dmc_5.html';
        break;
      case 'outlast 2':
        url = 'outlast_2.html';
        break;

      case 'elden ring deluxe edition':
        url = 'elden_ring.html';
        break;

      case 'halo 2':
        url = 'halo_2.html';
        break;

      case 'the last of us parte 2':
        url = 'tlou2.html';
        break;

       case 'call of duty modern warfare 2':
        url = 'codmw2.html';
        break;
    }
    window.location.href = url;
  });
});

// Función para agregar comentarios
function agregarComentario() {
  var comentarioInput = document.getElementById("comentarioInput");
  var comentarioTexto = comentarioInput.value;

  if (comentarioTexto.trim() === "") {
    alert("¡Escribe un comentario antes de publicarlo!");
    return;
  }

  // Crear un nuevo div para el comentario
  var comentarioDiv = document.createElement("div");
  comentarioDiv.classList.add("comentario");

  var comentarioP = document.createElement("p");
  comentarioP.textContent = comentarioTexto;

  comentarioDiv.appendChild(comentarioP);

  // Agregar el nuevo comentario a la lista
  var comentariosList = document.getElementById("comentariosList");
  comentariosList.appendChild(comentarioDiv);

  // Limpiar el campo de texto
  comentarioInput.value = "";
}
