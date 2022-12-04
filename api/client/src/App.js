import {
    createBrowserRouter,
    RouterProvider,
    // Route,
  } from "react-router-dom";
  import Register from "./pages/Register";
  import Login from "./pages/Login";
  import Landpage from "./pages/Landpage";
  import Directory from "./pages/Directory";
  import Calendar from "./pages/Calendar";
  import './index.css';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/css/bootstrap.css';
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/Landpage",
          element: <Landpage />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/Directory",
      element: <Directory />,
    },
    {
      path: "/Calendar",
      element: <Calendar />,
    },
  ]);
  
  function App() {
    return (
      <div className="app">
        <div className="container">
          {/* <p> This is APP page </p> */}
          <RouterProvider router={router} />
          
        </div>
      </div>
    );
  }
  
  export default App;
  