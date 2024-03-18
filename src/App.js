import React, { lazy, Suspense }  from "react";
import ReactDOM from "react-dom/client";
import Header  from "./components/Header";
import Body from "./components/Body"
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestrauntMenu";
// import Grocery from "./components/Grocery";
const styleCard = { backgroundColor: "#a8989b" };


const Grocery = lazy(() => import ("./components/Grocery"))
 const AppLayout =() => {
 return   (
    <div className="App">
        <Header />
        <Outlet/>
    </div>

    )
 };

 const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
        {
            path:"/",
            element:<Body />,
        },

        {
            path:"/About",
            element:<About />
        },
        {
            path:"/Contact",
            element:<Contact />
        },
        {
            path:"/restaurant/:resId",
            element:<RestrauntMenu />
        },
        {
            path:"/Grocery",
            element:(<Suspense fallback={<h2>Loading the Grocery in a while</h2>}><Grocery /></Suspense>)
        }
    ],
        errorElement: <Error />,
    }
    
 ])

 const root = ReactDOM.createRoot(document.getElementById("root"));
 //root.render(<AppLayout />);
//Adding router components 
root.render(<RouterProvider router={appRouter}/>);
