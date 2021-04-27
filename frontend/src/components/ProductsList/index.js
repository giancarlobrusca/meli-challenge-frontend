import React from "react";
import { useParams } from "react-router";
import { config } from "../../config";
import { ProductItem } from "./ProductItem";
import { CategoriesPath } from "./CategoriesPath";
import "../../styles/productsList.scss";

export const ProductsList = () => {
  const { query } = useParams();

  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    fetch(`${config.endpoint}/api/items?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, [query]);

  return (
    <>
      <CategoriesPath categories={products?.categories} />
      <section>
        {products?.items.map((product, index) => {
          return <ProductItem key={product + index} product={product} />;
        })}
      </section>
    </>
  );
};
