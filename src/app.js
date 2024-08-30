import React, {lazy, Suspense,useEffect,useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header.js';
import Body from './components/body.js';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import About from "./components/about.js";
import Error from "./components/error.js";
import RestroMenu from "./components/restromenu.js"; 
import UserContext from './utils/usercontext.js';
// We will provide the appStore to our application;
import {Provider} from 'react-redux';
import appStore from './utils/appStore.js';



const Grocery = lazy(() => import("./components/Grocery.js"))


function App() {
  // Authentication Code
  const [userName, setuserName] = useState(); 

  useEffect(() =>{
     // Now I wil make an API call and send UserName and Password
     const data = {
      name: "Akriti Yadav",
     }
     setuserName(data.name);
  },[])
   
// This is the root of the application  
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser : userName, setuserName}}>
      <div className="App">
        <Header/>
        <Outlet/> 
      </div>
      </UserContext.Provider>
    </Provider>
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