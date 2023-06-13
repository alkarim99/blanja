import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

//halaman yang diimport
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import CheckOut from  "./pages/CheckOut";
import Kategori from "./pages/Kategori";
import MyOrder from "./pages/MyOrder";
import ProfileMyOrder from "./pages//ProfileMyOrder";
import ProfileSippingAddress from "./pages/ProfileSippingAddress";

import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/CheckOut",
    element: <CheckOut />,
  },
  {
    path: "/Kategori",
    element: <Kategori />,
  },
  {
    path: "/MyOrder",
    element: <MyOrder />,
  },
  {
    path: "/ProfileMyOrder",
    element: <ProfileMyOrder />,
  },
  {
    path: "/ProfileMyOrder",
    element: <ProfileMyOrder />,
  },
  {
    path: "/ProfileSippingAddress",
    element: <ProfileSippingAddress />,
  },
]);

function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
