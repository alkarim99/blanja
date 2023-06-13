import React from 'react'

function ItemCheckOut() {
  return (
    <>
      <div className="card mb-2 ItemCheckOut" style={{ cursor: "pointer", width: "75%" }}>
        <div className="card-body d-flex flex-row justify-content-between align-items-center">
          <div className="d-flex flex-row">
            <div>
              <img src="../images/jaket.jpg" className="contentCheckOut me-2 img-fluid" />
            </div>

            <div className="">
              <p className="navbar-brand ms-2 text-start text-wrap " style={{ marginBottom: "2px", width: "10rem" }}>
                Men's formal suit - Black
              </p>
              <p className="text-muted text-start ms-2 text-wrap " style={{ fontSize: "13px" }}>
                Zalora Cloth
              </p>
            </div>
          </div>

          <div>
            <div className=" end-2" style={{width: "50px"}}>$ 40.0</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCheckOut;
