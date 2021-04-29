import FreeShippingIcon from "../assets/ic_shipping.png";
import { Link } from "react-router-dom";
import { Price } from "./";
import "../styles/productItem.scss";

export const ProductItem = ({ product }) => {
  return (
    <article>
      <Link to={`items/${product.id}`} className="product-image">
        <img src={product.picture} alt={product.title} />
      </Link>
      <div className="product-info">
        <div className="product-price">
          <Price priceInfo={product.price} />
          {product.free_shipping && (
            <img src={FreeShippingIcon} alt="Envío gratis" />
          )}
        </div>
        <Link to={`items/${product.id}`} className="product-title">
          <h1>{product.title}</h1>
        </Link>
      </div>
      <p className="product-state">{product.state}</p>
    </article>
  );
};
