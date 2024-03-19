
import React from "react";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

import HomePage from ".//routes/homePage/homePage";
import Layout from "./routes/layout/layout";
import ListPage from "./routes/listPage/listPage";
function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      



      },
      {
        path: "/list",
        element: <ListPage></ListPage>
      }
    ]
  }
  
]);





  return (
  
  <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
