import { Routes as Switch, Route } from "react-router-dom";

import routes from "./Routes.config";

function Routes() {
  return (
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} {...route} />
      ))}
    </Switch>
  );
}

export default Routes;
