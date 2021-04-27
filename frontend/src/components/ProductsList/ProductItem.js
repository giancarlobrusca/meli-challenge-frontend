import { Link } from "react-router-dom";
import FreeShippingIcon from "../../assets/ic_shipping.png";
import "../../styles/productItem.scss";

export const ProductItem = ({ product }) => {
  return (
    <article>
      <Link to={`items/${product.id}`} className="product-image">
        <img src={product.picture} alt={product.title} />
      </Link>
      <div className="product-info">
        <div className="product-price">
          <p>{`$ ${product.price.amount}`}</p>
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
