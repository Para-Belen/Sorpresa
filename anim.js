// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "El la estaba esperando con una flor amarilla", time: 16.45, duration: 7 },
  { text: "ella lo estaba soñando con la luz en su pupila", time: 24.16, duration: 8 },
  { text: "y el amarillo del Sol iluminaba la esquina", time: 32.38, duration: 8 },
  { text: "lo sentía tan cercano, lo sentía desde niña", time: 40.61, duration: 6 },
  { text: "ella sabía que él sabía que algún día pasaría", time: 46.26, duration: 5.3 },
  { text: "que vendría a buscarla con sus flores amarillas", time: 48.34, duration: 10 },
  { text: "no te apures, no detengas, el instante del encuentro", time: 59.62, duration: 4 },
  { text: "está dicho que es un hecho, no la pierdas, no hay derecho", time: 60.65, duration: 6.5 },
  { text: "no te olvides, que la vida", time: 67.33, duration: 4 },
  { text: "casi nunca está dormida", time: 71.26, duration: 6 },
  { text: "En ese bar tan desierto nos esperaba el encuentro", time: 92.83, duration: 7 },
  { text: "Ella llegó en limusina", time: 101.31, duration: 2 },
  { text: "amarilla, por supuesto", time: 103.37, duration: 6 },
  { text: "el se acercó de repente, y la miró tan de frente", time: 109.87, duration: 6 },
  { text: "toda una vida soñada y no pudo decir nada", time: 115.22, duration: 8 },
  { text: "ella sabía que él sabía que algún día pasaría", time: 123.44, duration: 5 },
  { text: "que vendría a buscarla con sus flores amarillas", time: 128.58, duration: 8 },
  { text: "no te apures, no detengas", time: 134.91, duration: 3 },
  { text: "el instante del encuentro", time: 138.21, duration: 2 },
  { text: "está dicho que es un hecho", time: 140.12, duration: 2 },
  { text: "no la pierdas, no hay derecho", time: 142.10, duration: 2 },
  { text: "no te olvides, que la vida", time: 144.06, duration: 3.5 },
  { text: "casi nunca está dormida", time: 147.14, duration: 7 },
  { text: "flores amarillas", time: 160.51, duration: 8 },
  { text: "ella sabía que él sabía que algún día pasaría", time: 168.73, duration: 5 },
  { text: "que vendría a buscarla con sus flores amarillas", time: 173.87, duration: 8 },
  { text: "no te apures, no detengas", time: 181.79, duration: 2 },
  { text: "el instante del encuentro", time: 183.85, duration: 2 },
  { text: "está dicho que es un hecho", time: 185.81, duration: 2 },
  { text: "no la pierdas, no hay derecho", time: 187.86, duration: 2 },
  { text: "no te olvides, que la vida", time: 188.82, duration: 4 },
  { text: "casi nunca está dormida", time: 194, duration: 5 },
  { text: "ella sabía que él sabía", time: 198.47, duration: 3 },
  { text: "él sabía, ella sabía", time: 201.55, duration: 2 },
  { text: "que él sabáa, ella sabía", time: 203.61, duration: 2 },
  { text: "y se olvidaron de sus...", time: 204.67, duration: 2.9 },
  { text: "flores amarillas", time: 207.82, duration: 7 },
  { text: "mentira mi amor aquí están jaja", time: 214.02, duration: 3 },
  { text: "Te amoooo.", time: 218.07, duration: 5 }
];

// Ajustar un pequeño retraso para sincronizar mejor la aparición
var delay = 0.3; // Ajuste en segundos (puedes modificarlo según sea necesario)

// Animar las letras
function updateLyrics() {
  var currentTime = audio.currentTime; // Tiempo actual de la canción en segundos
  var currentLine = lyricsData.find(
    (line) => currentTime >= line.time + delay && currentTime < line.time + line.duration + delay
  );

  if (currentLine) {
    lyrics.innerHTML = currentLine.text;
    lyrics.style.opacity = 1; // Aparecer el texto con opacidad máxima
  } else {
    lyrics.style.opacity = 0; // Desaparecer el texto cuando no esté dentro del rango
  }
  
  // Llama a la función en el próximo cuadro de animación
  requestAnimationFrame(updateLyrics);
}

// Iniciar la actualización de las letras
audio.addEventListener("play", () => {
  requestAnimationFrame(updateLyrics);
});

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

// Llama a la función después de 216 segundos
setTimeout(ocultarTitulo, 216000);
