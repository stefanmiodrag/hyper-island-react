import * as Page from "./pages";

const routes = [
  {
    path: "/",
    element: <Page.PlaylistPage />,
  },
  {
    path: "/channel/:id",
    element: <Page.PlaylistPage />,
  },
];

export default routes;
