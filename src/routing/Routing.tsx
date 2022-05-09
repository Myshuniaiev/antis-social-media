/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

/* Routing schema */
import schema from "./index";
import RoutingSchema, { IRoute } from "../routing";

/* Utils */
import Navigation from "../components/Navigation";
import { ArrowIcon } from "../components/icons/Arrow";
import { FullScreenContext } from "../context/FullScreen";
import { NotificationsIcon } from "../components/icons/Notification";

export const RedirectToHome = () => {
  return <Redirect to={schema.getLink("analytic")} />;
};

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
        <div className="herder">
          <NotificationsIcon />
          <div className="profile">
            <div className="profile-icon" />
            <span className="profile-nickname">Ferra Alexandra</span>
            <ArrowIcon style={{ transform: "rotate(180deg)" }} />
          </div>
        </div>
        <Switch>
          {Routes}
          <RedirectToHome />
        </Switch>
      </div>
    </main>
  );
};

export default Routing;
