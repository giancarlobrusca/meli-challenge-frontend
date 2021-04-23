import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ProductsList } from "./components";
import { MainLayout } from "./layout";

function App() {
  const [status, setStatus] = React.useState("idle");
  const [query, setQuery] = React.useState("false");
  const [queried, setQueried] = React.useState(false);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    if (!queried) return;

    setStatus("loading");

    window
      .fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent(
          query
        )}`
      )
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
        setStatus("success");
      });
  }, [query, queried]);

  function handleSearchSubmit(event) {
    event.preventDefault();
    const query = event.target.elements.search.value;

    setQuery(query);
    setQueried(true);
  }

  return (
    <>
      {status === "idle" ? (
        <MainLayout handleSearchSubmit={handleSearchSubmit} />
      ) : (
        <MainLayout handleSearchSubmit={handleSearchSubmit}>
          {status === "loading" ? (
            <h3>Loading...</h3>
          ) : (
            <ProductsList status={status} data={data} />
          )}
        </MainLayout>
      )}
    </>
  );
}

export default App;
