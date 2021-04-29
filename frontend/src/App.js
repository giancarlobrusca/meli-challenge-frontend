import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header, ProductsList, Wrapper, ProductDetail } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Wrapper>
        <main>
          <Switch>
            <Route exact path="/"></Route>

            <Route path="/items/:id">
              <ProductDetail />
            </Route>

            <Route path="/items">
              <ProductsList />
            </Route>
          </Switch>
        </main>
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;
