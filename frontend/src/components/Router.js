import { BrowserRouter, Route, Switch } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/"></Route>
      </Switch>
    </BrowserRouter>
  );
};
