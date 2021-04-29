import React from "react";
import { useLocation } from "react-router";
import { apiConfig } from "../config";
import { CategoriesPath, ProductItem, Loader, Error } from "./";
import "../styles/productsList.scss";

export const ProductsList = () => {
  const searchParams = new URLSearchParams(useLocation().search);
  const query = searchParams?.get("search");

  const [products, setProducts] = React.useState(null);
  const [categories, setCategories] = React.useState(null);

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    restartValues();

    fetch(`${apiConfig.endpoint}/api/items?q=${query}`)
      .then((response) => {
        response.json().then((data) => {
          if (data.items.length === 0) {
            setError(true);
          } else {
            setCategories(data.categories);
            setProducts(data.items);
          }
        });
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  function restartValues() {
    setError(false);
    setProducts(null);
    setCategories(null);
  }

  return (
    <>
      {error ? (
        <Error message="No se encontraron resultados" />
      ) : (
        <CategoriesPath categories={categories} />
      )}

      {isLoading && <Loader />}

      {products && !isLoading && !error && (
        <section>
          {products.map((product, index) => {
            return <ProductItem key={product + index} product={product} />;
          })}
        </section>
      )}
    </>
  );
};
