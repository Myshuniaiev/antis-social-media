/* pages */
import AnalyticPage from "../pages/Analytic";
import MessagePage from "../pages/Message";
import SettingsPage from "../pages/Settings";
import PostsPage from "../pages/Posts";
import ProfilePage from "../pages/Profile";
import StatisticPage from "../pages/Statistic";
import UsersPage from "../pages/Users";
import UserPage from "../pages/Users/User";

export interface IRoute {
  readonly name: Pages;
  readonly title?: string;
  readonly path: string;
  readonly isExact: boolean;
  readonly component: any;
  childRoutes?: IRoute[];
}

export type Pages =
  | "notFound"
  | "analytic"
  | "posts"
  | "post"
  | "statistic"
  | "message"
  | "profile"
  | "users"
  | "user"
  | "settings";

class RoutingSchema {
  private schema: IRoute[] = [
    {
      name: "analytic",
      path: "/analytic",
      title: "Analytic",
      isExact: false,
      component: AnalyticPage,
    },
    {
      name: "posts",
      path: "/posts",
      title: "Posts",
      isExact: false,
      component: PostsPage,
      childRoutes: [
        {
          name: "post",
          path: "posts/:id",
          title: "Post",
          isExact: false,
          component: PostsPage,
        },
      ],
    },
    {
      name: "statistic",
      path: "/statistic",
      title: "Statistic",
      isExact: false,
      component: StatisticPage,
    },
    {
      name: "message",
      path: "/message",
      title: "Message",
      isExact: false,
      component: MessagePage,
    },
    {
      name: "profile",
      path: "/profile",
      title: "Profile",
      isExact: false,
      component: ProfilePage,
    },
    {
      name: "users",
      path: "/users",
      title: "Users",
      isExact: false,
      component: UsersPage,
      childRoutes: [
        {
          name: "user",
          path: "users/:id",
          title: "User",
          isExact: false,
          component: UserPage,
        },
      ],
    },
    {
      name: "settings",
      path: "/settings",
      title: "Settings",
      isExact: false,
      component: SettingsPage,
    },
  ];
  private findRouteByPath(path: string): IRoute | undefined {
    return this.schema.find(({ path: routePath }) => routePath === path);
  }
  private findRouteInArray(
    routes: IRoute[],
    routeName: Pages
  ): IRoute | undefined {
    for (let route of routes) {
      if (route.name === routeName) return route;
      if (route.childRoutes && route.childRoutes.length) {
        const foundRoute = this.findRouteInArray(route.childRoutes, routeName);
        if (foundRoute) return foundRoute;
      }
    }
  }
  private findRouteByName(name: Pages): IRoute | undefined {
    const route = this.findRouteInArray(this.schema, name);
    if (route) return route;
    return undefined;
  }
  public get getSchema() {
    return this.schema;
  }
  public getSchemaItem(name: Pages): IRoute | undefined {
    const route = this.findRouteByName(name);
    if (route && route.path) return route;
  }
  public getLink(name?: Pages): string {
    const route = name && this.findRouteByName(name);
    if (route && route.path) {
      return route.path;
    } else {
      return "/error";
    }
  }
  public getName(path: string): Pages | false {
    const route = this.findRouteByPath(path);
    if (route && route.path) {
      return route.name;
    } else {
      return false;
    }
  }
}

export default new RoutingSchema();
