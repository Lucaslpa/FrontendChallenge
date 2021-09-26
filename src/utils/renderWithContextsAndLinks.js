import { render } from "@testing-library/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Contexts } from "../Contexts";

export const renderWithContextsAndLinks = (component) =>
  render(
    <Contexts>
      {" "}
      <Router>
        <Switch>
          <Route exact path="/">
            {component}
          </Route>
          <Route path="/patient/:uuid">{component}</Route>
        </Switch>
      </Router>
    </Contexts>
  );
