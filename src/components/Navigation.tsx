/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, ComponentType, useState } from "react";
import { matchPath, useLocation } from "react-router-dom";

/* routing */
import RoutingSchema, { Pages } from "../routing";
import Link from "../routing/InnerLink";

/* utils */
import { NavigationProfileIcon } from "./icons/Navigation/Profile";
import { LogoIcon } from "./icons/Logo";
import { NavigationMenuIcon } from "./icons/Navigation/Menu";
import { PageEnum } from "../config/constans";
import { NavigationAnalyticIcon } from "./icons/Navigation/Analytic";
import { NavigationMessageIcon } from "./icons/Navigation/Message";
import { NavigationLogoutIcon } from "./icons/Navigation/Logout";

const mainLinks: {
  page: Pages;
}[] = [
  {
    page: PageEnum.ANALYTIC,
  },
  {
    page: PageEnum.PROFILE,
  },
  {
    page: PageEnum.MESSAGE,
  },
];

const additionalLinks: {
  page: Pages;
}[] = [
  {
    page: PageEnum.POSTS,
  },
  {
    page: PageEnum.STATISTIC,
  },
  {
    page: PageEnum.USERS,
  },
];

const NavMenuMainIcon: { [page: string]: ComponentType } = {
  [PageEnum.ANALYTIC]: (props) => <NavigationAnalyticIcon {...props} />,
  [PageEnum.PROFILE]: (props) => <NavigationProfileIcon {...props} />,
  [PageEnum.MESSAGE]: (props) => <NavigationMessageIcon {...props} />,
};

const NavMenuAdditionalIcon: { [page: string]: ComponentType } = {
  [PageEnum.POSTS]: (props) => <NavigationAnalyticIcon {...props} />,
  [PageEnum.STATISTIC]: (props) => <NavigationProfileIcon {...props} />,
  [PageEnum.USERS]: (props) => <NavigationMessageIcon {...props} />,
};

export const Navigation: FC = () => {
  const { pathname } = useLocation();

  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState<boolean>(false);
  const [link, setLink] = useState<string>();

  return (
    <>
      <div className="navigation">
        <div className="navigation__main-links">
          <div className="logo">
            <LogoIcon />
            <span className="logo-title">Antis</span>
          </div>

          <ul className="nav-menu">
            {mainLinks.map((menuItem) => {
              const purposeRoute = RoutingSchema.getSchemaItem(menuItem.page);
              const isActive = matchPath(pathname, String(purposeRoute?.path));
              if (isActive && link !== menuItem.page) setLink(menuItem.page);

              return (
                <li
                  className="nav-menu__item"
                  key={menuItem.page}
                  onClick={() => setIsMobileDrawerOpen(false)}
                >
                  <Link
                    to={menuItem.page}
                    className={
                      "nav-menu__link" +
                      (isActive ? " nav-menu__link_active" : "")
                    }
                  >
                    {(NavMenuMainIcon[menuItem.page] as Function)()}
                    <span className="link-title">
                      {purposeRoute?.title || menuItem.page}
                    </span>
                  </Link>
                </li>
              );
            })}

            <li
              className="nav-menu__item nav-menu__menu"
              onClick={() => setIsMobileDrawerOpen(true)}
            >
              <div className="nav-menu__link">
                <NavigationMenuIcon />
                <span className="link-title">Menu</span>
              </div>
            </li>
          </ul>
        </div>

        <div
          className={
            "navigation__additional-links mobile-drawer" +
            (isMobileDrawerOpen ? " mobile-drawer_is-open" : "")
          }
          style={{ height: "100%" }}
        >
          <ul className="nav-menu">
            {additionalLinks.map((menuItem) => {
              let hasLink = true;

              const purposeRoute = RoutingSchema.getSchemaItem(menuItem.page);
              const isActive = matchPath(pathname, String(purposeRoute?.path));
              if (isActive && link !== menuItem.page) {
                setLink(menuItem.page);
              }
              return (
                <li
                  key={menuItem.page}
                  onClick={() => setIsMobileDrawerOpen(false)}
                >
                  {hasLink && (
                    <Link
                      to={menuItem.page}
                      className={
                        "nav-menu__link" +
                        (isActive ? " nav-menu__link_active" : "")
                      }
                    >
                      {(NavMenuAdditionalIcon[menuItem.page] as Function)()}
                      <span className="link-title">
                        {purposeRoute?.title || menuItem.page}
                      </span>
                    </Link>
                  )}
                </li>
              );
            })}

            <li
              className="nav-menu__item nav-menu__item_log-out"
              style={{ marginTop: "auto" }}
            >
              <span
                className="nav-menu__link"
                onClick={() => console.log("Log out!")}
                style={{ textTransform: "none", paddingBottom: "40px" }}
              >
                <NavigationLogoutIcon />
                <span className="link-title">Log out</span>
              </span>
            </li>
          </ul>

          <div
            className="mobile-drawer__close"
            onClick={() => setIsMobileDrawerOpen(false)}
            title="Hide"
          />
        </div>

        {isMobileDrawerOpen && (
          <div
            className="mobile-drawer__backdrop"
            onClick={() => setIsMobileDrawerOpen(false)}
          />
        )}
      </div>
    </>
  );
};
export default Navigation;
