const ORIGINAL_KEYS = ["W", "P", "X", "M", "B", "L", "S", "C", "F", "G", "H", "J", "K", "Q", "R", "T", "V", "Y", "Z", "A", "D", "E", "I", "N", "O", "U"];
const AVAILABLE_KEYS = [...ORIGINAL_KEYS];

export function assignKey() {
  const key = AVAILABLE_KEYS[0];
  AVAILABLE_KEYS.splice(0, 1); // remove the first element
  return key;
}

export function restoreKey(){
  // Restaura AVAILABLE_KEYS a su estado original
  AVAILABLE_KEYS.length = 0; // Vacía el arreglo existente
  AVAILABLE_KEYS.push(...ORIGINAL_KEYS); // Llena el arreglo con las teclas originales
}
