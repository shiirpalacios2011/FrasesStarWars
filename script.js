const frases = [
  "Que la Fuerza te acompañe. – Obi-Wan Kenobi",
  "Yo soy tu padre. – Darth Vader",
  "Hazlo o no lo hagas, pero no lo intentes. – Yoda",
  "El miedo es el camino hacia el Lado Oscuro. – Yoda",
  "No subestimes el poder del Lado Oscuro. – Darth Vader",
  "La capacidad de hablar no te hace inteligente. – Qui-Gon Jinn",
  "Siempre hay un pez más grande. – Qui-Gon Jinn",
  "Tu enfoque determina tu realidad. – Qui-Gon Jinn",
  "La rebelión está construida sobre la esperanza. – Jyn Erso",
  "Nunca me digas las probabilidades. – Han Solo"
];

function nuevaFrase() {
  const indice = Math.floor(Math.random() * frases.length);
  document.getElementById("frase").textContent = frases[indice];

  const colores = ['#000000', '#1a1a1a', '#111111', '#0c0c0c', '#1b1b1b'];
  const color = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = color;
}
