import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header.js';
import Body from './components/body.js';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import About from "./components/about.js";
import Error from "./components/error.js";
import RestroMenu from "./components/restromenu.js"; 
//import Grocery from './components/Grocery.js'; 

const Grocery = lazy(() => import("./components/Grocery.js"))


function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/> 
    </div>
  );
}

// Here we will configure routes
// Routing Configuration is the definition that what will happen when we access a specifice route;
const appRoutes = createBrowserRouter([
  {
      path:"/",
      element:<App/>,
      children:[
        {
          path:"/",
          element:<Body/>,
          errorElement:<Error/>
        },
        {
        path:"/about",
        element:<About/>,
        errorElement:<Error/> 
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestroMenu/>,
        errorelement:<Error/>
      }
    ],
      errorElement: <Error/>
  },
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes}/>);