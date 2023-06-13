import React from "react"
import "../style/MyOrder.css"
import Navbar from "../component/Navbar"
import ItemMyOrder from "../component/ItemMyOrder"

function MyOrder() {
  return (
    <div className="">
      {/* Start Navbar */}
      <Navbar />
      {/* End Navbar */}

      {/* Content */}
      <div
        className="container d-flex flex-row justify-content-between"
        style={{ marginTop: "5rem" }}
      >
        <div className=" container">
          <h1 className="text-start mt-3">My bag</h1>

          <div className="d-flex flex-row justify-content-between MyOrderHP">
            <div className="ContentMyOrderHP" style={{ width: "65%" }}>
              <div className="card mb-3 me-4" style={{ width: "100%" }}>
                <div className="card-body">
                  <div className="form-check d-flex flex-row justify-content-between">
                    <div className="">
                      <input
                        className="form-check-input checkBox"
                        type="checkbox"
                        value=""
                        id="flexCheckIndeterminate"
                      />
                      <label
                        className="form-check-label me-2"
                        for="flexCheckIndeterminate"
                      >
                        Select all items
                      </label>
                      <label className="me-2">(2 items Select)</label>
                    </div>

                    <div className="">
                      <a
                        href="#"
                        className="text-danger text-end"
                        style={{ textDecoration: "none", text: "end" }}
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* content buy item */}
              <ItemMyOrder />
            </div>

            <div className="card cardCost" style={{ width: "30%" }}>
              <div className="card-body">
                <h6>Shopping summary</h6>
                <div className="d-flex flex-row justify-content-between">
                  <p>Total price</p>
                  <p className="text-danger">$ 40.0</p>
                </div>
                <button type="button" class="btn btn-danger BtnCheckOut">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyOrder
