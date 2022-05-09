/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC } from "react";
import {
  NavLink,
  generatePath,
  matchPath,
  useLocation,
} from "react-router-dom";
import schema, { Pages } from "./index";

interface Props {
  to: Pages;
  additionalSuffix?: string;
  checkSuffixByActive?: boolean;
  id?: string;
  tabName?: string;
  involvementId?: number | string;
  transactionId?: number | string;
  className?: string;
  activeClass?: string;
  slug?: string;
  onClick?: () => void;
  query?: string;
  children?: JSX.Element | JSX.Element[] | string;
}

export const InnerLink: FC<Props> = ({
  to,
  id,
  involvementId,
  transactionId,
  additionalSuffix,
  slug,
  tabName,
  children,
  className,
  activeClass,
  onClick,
  query,
  checkSuffixByActive = true,
}) => {
  const { pathname } = useLocation();

  let link: string;

  try {
    link =
      id || tabName || involvementId || transactionId || slug
        ? generatePath(schema.getLink(to), {
            id,
            tabName,
            slug,
          })
        : schema.getLink(to) || "/error";
  } catch (e) {
    link = schema.getLink(to) || "/error";
  }

  const isActive = matchPath(pathname, link);

  if (additionalSuffix) link = link + additionalSuffix;
  if (query) link = link + "?" + query;

  const onClickFunction: () => void = () => {
    if (typeof onClick === "function") onClick();
  };

  return (
    <NavLink
      exact={false}
      to={link}
      className={
        (className || "") +
        (!checkSuffixByActive && isActive ? ` ${activeClass}` : "")
      }
      onClick={onClickFunction}
      activeClassName={activeClass}
    >
      {children}
    </NavLink>
  );
};

export default InnerLink;
