import HomePage from "./routs/homePage/homePage"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./routs/listPage/listPage";
import Layout from "./routs/layout/layout";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App