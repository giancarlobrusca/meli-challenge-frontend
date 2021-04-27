import React from "react";
import { useParams } from "react-router";
import "../styles/productDetail.scss";

export const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    fetch(`http://localhost:3001/api/items/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.item);
      });
  }, [id]);

  return (
    <div className="product-detail">
      {/* <CategoriesPath categories={product.categories} /> */}
      {product && (
        <>
          <div className="product-main">
            <img
              className="product-image"
              src={product.picture}
              alt={product.title}
            />
            <div className="product-info">
              <div className="product-condition">
                {`${product.condition} - ${product.sold_quantity} vendidos`}
              </div>
              <h1>{product.title}</h1>
              <p>{`$ ${product.price.amount}`}</p>
              <button>Comprar</button>
            </div>
          </div>
          {product.description && (
            <div className="product-description">
              <h2>Descripción del producto</h2>
              <p>{product.description}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};
