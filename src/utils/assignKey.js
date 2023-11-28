const AVAILABLE_KEYS = ["W", "P", "X", "M", "B", "L", "S", "C", "F", "G", "H", "J", "K", "Q", "R", "T", "V", "Y", "Z", "A", "D", "E", "I", "N", "O", "U"];

export function assignKey() {
  const key = AVAILABLE_KEYS[0];
  AVAILABLE_KEYS.splice(0, 1); // remove the first element
  return key;
}

export function restoreKey(key) {
  const AVAILABLE_KEYS_R = ["W", "P", "X", "M", "B", "L", "S", "C", "F", "G", "H", "J", "K", "Q", "R", "T", "V", "Y", "Z", "A", "D", "E", "I", "N", "O", "U"];
  AVAILABLE_KEYS.forEach((k, index) => {
    AVAILABLE_KEYS.splice(0, 1);
  });
  //Restauramos las teclas que se han usado
  AVAILABLE_KEYS_R.push(key);
  return key;
}