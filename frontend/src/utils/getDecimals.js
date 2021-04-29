export function getDecimals(number, decimals) {
  const absoluteNumber = Math.abs(number);
  return (absoluteNumber - Math.floor(absoluteNumber)).toFixed(decimals);
}
