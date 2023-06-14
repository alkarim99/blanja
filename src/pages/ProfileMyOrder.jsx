import React from "react"
import { Link } from "react-router-dom"
import "../style/ProfileMyOrder.css"

import Navbar from "../component/Navbar"
import MenuLifeProfile from "../component/MenuLifeProfile"

function ProfileMyOrder() {
  return (
    <div className="" style={{ backgroundColor: "#eeeeee" }}>
      {/* Navbar */}
      <Navbar />

      <div className="container-fluide d-flex ProfileBg">
        {/* control Profile lift */}
        <MenuLifeProfile />

        {/* Control Profile right */}
        <div
          className="bg-light mx-5 ProfileBgRight"
          style={{
            width: "100%",
            height: "100%",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            marginTop: "6rem",
          }}
        >
          <div className="p-3">
            <h5>My order</h5>

            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  All item
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-muted" href="#">
                  Not yet paid
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-muted" href="#">
                  Packed
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-muted" href="#">
                  Sent
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-muted" href="#">
                  Completed
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link text-muted" href="#">
                  Ordre cancel
                </a>
              </li>
            </ul>
            <hr />
            <div style={{ marginBottom: "360px" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileMyOrder
