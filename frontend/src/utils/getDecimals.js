export function getDecimals(integerNumber, decimals) {
  return (integerNumber - Math.floor(integerNumber)).toFixed(decimals);
}
