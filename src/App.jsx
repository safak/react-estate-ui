
import Navbar from "./components/navbar/Navbar"
import ListPage from "./routes/listPage/listPage";
import HomePage from "./routes/homePage/homePage"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import SinglePage from "./routes/singlePage/singlePage";
// import SinglePage from "./routes/singlePage/singlePage";


// This is the main file it will first comre heere
function App() {
  
  const router = createBrowserRouter([
    // Now we are mounting all of them in children and accessiung them through the outlet if the parent is match with child
    //Basically we are layout for all the page because it is same for all the page
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        // We are mounting are singlePage here it route will be our product id and it is dynamic in nature

        {
          path: "/:id",
          element: <SinglePage />
        },
      ],
    },
  ]);
  return (
    
    // <div className="layout">
    //   <div className="navbar">
    //     {/* //Mounting our Navbar */}
    //     <Navbar />
    //   </div>
    //   <div className="content">

    //     <HomePage />
    //   </div>
    // </div>

    // layout file is created once and can be applied to various file by simply importing it

    //Passing a Browser router
    <RouterProvider router = {router}/>
  )  
  
}

export default App