import React from 'react'
import authCSS from "../assets/css/auth.module.css";
import mainLogo from "../assets/images/Main Logo.svg";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Register() {
    const navigate = useNavigate()

    const [fullName, setFullName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("");

    const handleRegistration = () => {
        axios
          .post(`${process.env.REACT_APP_BASE_URL}/users`, {
            email: email,
            fullname: fullName,
            password: password,
          })
          .then((response) => {
            Swal.fire({
              title: "Registration Success!",
              text: "Registration Success! Please Login",
              icon: "success",
            }).then(() => {
              navigate("/login")
            })
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: error?.response?.data?.message ?? "Something wrong in our App!",
              icon: "error",
            })
          })
      }

    return (
        <div>

             <div className="d-flex vh-100 align-items-center">
        <div className="container d-inline">
          {/* Logo Start */}
          <div className="row">
            <Link to="/">
              <div className="col d-flex justify-content-center align-items-center">
                <img src={mainLogo} alt="shopbag" />
                <h1 className="mt-3 ms-2 fnt-color metropolis-b fs-3">
                  Blanja
                </h1>
              </div>
            </Link>
          </div>
          {/* Logo End */}
          {/* Text Start */}
          <div className="row mt-3">
            <div className="col d-flex justify-content-center align-items-center">
              <p className="metropolis-b">Please sign up with your account</p>
            </div>
          </div>
          {/* Text End */}
          {/* Button Start */}
          <div className="row justify-content-center">
            <div
              className="col-2 nav nav-pills d-flex justify-content-center align-items-center"
              id="v-pills-tab"
              role="tablist"
            >
              <div className="btn-group w-100 d-flex justify-content-center align-items-center">
                <button
                  className={`${authCSS.authButton} nav-link active nav-left`}
                  id="v-pills-customer-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-customer"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-customer"
                  aria-selected="true"
                >
                  Customer
                </button>
                <button
                  className={`${authCSS.authButton} nav-link nav-right`}
                  id="v-pills-seller-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-seller"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-seller"
                  aria-selected="false"
                >
                  Seller
                </button>
              </div>
            </div>
          </div>
          {/* Button End */}
          {/* Input Start */}
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-customer"
              role="tabpanel"
              aria-labelledby="v-pills-customer-tab"
              tabIndex={0}
            >
              <div className="row mt-4 my-3 justify-content-center">
                <div className="col-lg-4">
                  <input
                    type="fullname"
                    name="fullname"
                    id="name"
                    placeholder="Name"
                    className="form-control"
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3 my-3 justify-content-center">
                <div className="col-lg-4">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3 mb-5 justify-content-center">
                <div className="col-lg-4">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-seller"
              role="tabpanel"
              aria-labelledby="v-pills-seller-tab"
              tabIndex={0}
            >
              <div className="row mt-4 my-3 justify-content-center">
                <div className="col-lg-4">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="form-control"
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3 my-3 justify-content-center">
                <div className="col-lg-4">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3 my-3 justify-content-center">
                <div className="col-lg-4">
                  <input
                    type="text"
                    name="phone"
                    id="phoen"
                    placeholder="Phone Number"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mt-3 my-3 justify-content-center">
                <div className="col-lg-4">
                  <input
                    type="text"
                    name="store"
                    id="store"
                    placeholder="Store name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mt-3 mb-5 justify-content-center">
                <div className="col-lg-4">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Input End */}
          {/* Button Start */}
          <div className="row mb-4 justify-content-center">
            <div className="col-lg-4 d-flex justify-content-center">
              <button className="btn btn-primary rounded-pill w-100"
              onClick={handleRegistration}>
                Create Account
              </button>
            </div>
          </div>
          {/* Button End */}
          {/* Register Start */}
          <div className="row">
            <div className="col d-flex justify-content-center">
              <p>
                Already have an account?{" "}
                <Link to="/login">
                  <span>Login</span>
                </Link>
              </p>
            </div>
          </div>
          {/* Register End */}
        </div>
      </div>

        </div>
    )
}

export default Register
