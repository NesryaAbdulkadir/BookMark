import React from "react";
import { useRoutes } from "react-router-dom";
import CollectionUrls from "../pages/CollectionUrls";
import Home from "../pages/Home";

export default function Routes() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/collections/:slug/urls",
      element: <CollectionUrls />,
    },
  ]);
  return element;
}
