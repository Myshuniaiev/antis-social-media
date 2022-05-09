import React, { FC } from "react";

import { Link, generatePath } from "react-router-dom";
import schema, { Pages } from "./index";

interface Props {
  children?: JSX.Element | JSX.Element[] | string;
  className?: string;
  fullPath?: string;
  id?: string;
  onClick?: () => void;
  orderNumber?: string;
  query?: string;
  slug?: string;
  to?: Pages;
}

export const InternalLink: FC<Props> = ({
  children,
  className,
  fullPath,
  id,
  onClick,
  orderNumber,
  query,
  slug,
  to,
}) => {
  let link: string =
    to && (id || orderNumber || slug)
      ? generatePath(schema.getLink(to), { id, orderNumber, slug })
      : schema.getLink(to) || "/error";

  if (query) link = link + "?" + query;
  if (!to && fullPath) link = fullPath;

  const onClickFunction: () => void = () => {
    if (typeof onClick === "function") onClick();
  };

  return (
    <Link to={link} className={className || ""} onClick={onClickFunction}>
      {children}
    </Link>
  );
};

export default InternalLink;
