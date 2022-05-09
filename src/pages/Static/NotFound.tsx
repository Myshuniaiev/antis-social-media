import React from "react";

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <h3 className="not-found-page__status">404</h3>
      <p className="not-found-page__problem">Not Found</p>
      <p className="not-found-page__comment">
        The resource requested could not be found on this server!
      </p>
    </div>
  );
};

export default NotFoundPage;
