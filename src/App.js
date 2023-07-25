import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"

//halaman yang diimport
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import Product from "./pages/Product"
import CheckOut from "./pages/CheckOut"
import Kategori from "./pages/Kategori"
import MyOrder from "./pages/MyOrder"
import ProfileMyOrder from "./pages//ProfileMyOrder"
import ProfileSippingAddress from "./pages/ProfileSippingAddress"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import axios from "axios"

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
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/checkOut/:id/:quantity",
    element: <CheckOut />,
  },
  {
    path: "/kategori/:category",
    element: <Kategori />,
  },
  {
    path: "/myorder",
    element: <MyOrder />,
  },
  {
    path: "/profilemyorder",
    element: <ProfileMyOrder />,
  },
  {
    path: "/profilemyorder",
    element: <profilemyorder />,
  },
  {
    path: "/ProfileSippingAddress",
    element: <ProfileSippingAddress />,
  },
])

function App() {
  axios.interceptors.request.use(
    (config) => {
      if (localStorage.getItem("token")) {
        config.headers["Authorization"] = `Bearer ${localStorage.getItem(
          "token"
        )}`
      }
      return config
    },
    (error) => {
      Promise.reject(error)
    }
  )
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
