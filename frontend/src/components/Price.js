import { priceFormatter, getDecimals } from "../utils";

export const Price = ({ priceInfo }) => {
  const { amount, decimals } = priceInfo;

  const integerAmount = parseFloat(amount);
  const amountDecimals = getDecimals(amount, decimals);

  return (
    <span>
      {`$ ${priceFormatter(integerAmount)}`}
      {amountDecimals && (
        <span className="price-decimals">
          {amountDecimals.toString().slice(2)}
        </span>
      )}
    </span>
  );
};
