import React from "react";
import { useParams } from "react-router";
import { CategoriesPath, Price, Loader, Error } from "./";
import "../styles/productDetail.scss";

export const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = React.useState(null);
  const [categories, setCategories] = React.useState(null);

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    restartValues();

    fetch(`http://localhost:3001/api/items/${id}`)
      .then((response) =>
        response.json().then((data) => {
          setCategories(data.categories);
          setProduct(data.item);
        })
      )
      .catch((error) => {
        console.error(error);
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  function restartValues() {
    setError(false);
    setProduct(null);
    setCategories(null);
  }

  return (
    <>
      {error ? (
        <Error message="No se encontró el producto" />
      ) : (
        <CategoriesPath categories={categories} />
      )}

      {isLoading && <Loader />}

      {product && !isLoading && !error && (
        <div className="product-detail">
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
              <Price priceInfo={product.price} />
              <button>Comprar</button>
            </div>
          </div>
          {product.description && (
            <div className="product-description">
              <h2>Descripción del producto</h2>
              <p>{product.description}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};
