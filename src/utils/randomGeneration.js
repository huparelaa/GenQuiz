const randomNames = [
  "Mendel's Legacy",
  "Watson & Crick Crusaders",
  "Rosalind's Replicators",
  "Franklin's Helix Heroes",
  "Darwin's Finches",
  "Mendelian Mavericks",
  "Avery's Alchemists",
  "Lamarck's Legacy",
  "Barbara's Genome Gurus",
  "Curie's Chromosomes",
  "Mendel's Peas Posse",
  "Gregor's Gene Geniuses",
  "Rosalind's DNA Detectives",
  "Darwin's Evolutionists",
  "Mendel's Inheritance Squad"
]


export function generateRandomNames() {
  const randomIndex = Math.floor(Math.random() * randomNames.length);
  return randomNames[randomIndex];
}

export function generateRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return {
    bg: `#${randomColor}`,
    text: isLight(randomColor) ? "#ffffff" : "#000000",
  };
}

function isLight(colorHex) {
  // Convertir hex a RGB
  const r = parseInt(colorHex.substr(1, 2), 16);
  const g = parseInt(colorHex.substr(3, 2), 16);
  const b = parseInt(colorHex.substr(5, 2), 16);

  // Calcular la luminancia
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  
  return luminance > 128;
}
