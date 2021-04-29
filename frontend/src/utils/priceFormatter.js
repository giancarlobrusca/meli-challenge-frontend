const formatter = new Intl.NumberFormat("de-DE");

export function priceFormatter(price) {
  return formatter.format(price);
}
