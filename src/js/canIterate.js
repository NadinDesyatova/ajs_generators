export default function canIterate(obj) {
  try {
    return Boolean(obj[Symbol.iterator]);
  } catch {
    return false;
  }
}
