import React from 'react'
import { AiFillMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";

function ItemMyOrder() {
    return (
      <>
        <div className="card mb-2" style={{ width: "100%" }}>
          <div className="card-body d-flex flex-row justify-content-between align-items-center ">
            <div className="d-flex flex-row ">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <input className="form-check-input checkBox d-flex align-items-center me-3" type="checkbox" value="" id="flexCheckIndeterminate" />
              </div>

              <div className="d-flex flex-row justify-content-start align-items-center ItemMyOrder">
                <div>
                  <img src="../images/jaket.jpg" className="contentCheckOut me-2 img-fluid" style={{ cursor: "pointer" }} />
                </div>

                <div className="me-5">
                  <p className="navbar-brand ms-2  text-start text-wrap " style={{ marginBottom: "2px", width: "100%" }}>
                    Men's formal suit - Black
                  </p>
                  <p className="text-muted text-start ms-2 text-wrap " style={{ fontSize: "13px" }}>
                    Zalora Cloth
                  </p>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <AiFillMinusCircle className="text-muted me-3 iconNavbar" style={{ cursor: "pointer" }} />
                  <label className="me-3"> 1 </label>
                  <AiOutlinePlusCircle className="text-muted iconNavbar" style={{ cursor: "pointer" }} />
                </div>
              </div>
            </div>

            <div>
              <div className="ms-4 end-2">$ 40.0</div>
            </div>
          </div>
        </div>
      </>
    );
}

export default ItemMyOrder
