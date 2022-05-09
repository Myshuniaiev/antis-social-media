/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";

// Routing schema
import RoutingSchema, { IRoute } from "../routing";
import { FullScreenContext } from "../context/FullScreen";
import Navigation from "../components/Navigation";

const generateRoutes = (routes: IRoute[]) => {
  return routes.map(({ component: Component, ...route }) => (
    <Route
      exact={route.isExact}
      key={route.name}
      path={route.path}
      render={(props: any) => {
        return (
          <Component
            key={route.name + Object.values(props.match.params).join(",")}
            {...props}
          >
            {route.childRoutes ? (
              <Switch>{generateRoutes(route.childRoutes)}</Switch>
            ) : (
              <></>
            )}
          </Component>
        );
      }}
    />
  ));
};

// Render all routes
const Routes = generateRoutes(RoutingSchema.getSchema);

const Routing: React.FC = () => {
  const { isFullScreen } = useContext(FullScreenContext);
  return (
    <main className="main-layout">
      {!isFullScreen && <Navigation />}
      <div className="main" id={"main"}>
        <Switch>{Routes}</Switch>
      </div>
    </main>
  );
};

export default Routing;