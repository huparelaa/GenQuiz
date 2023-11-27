const AVAILABLE_KEYS = ["W", "P", "X", "M", "B", "L", "S", "C", "F", "G", "H", "J", "K", "Q", "R", "T", "V", "Y", "Z", "A", "D", "E", "I", "N", "O", "U"];

export default function assignKey() {
  const key = AVAILABLE_KEYS[0];
  AVAILABLE_KEYS.splice(0, 1);
  return key;
}