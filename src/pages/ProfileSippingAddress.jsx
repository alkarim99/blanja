import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "../style/ProfileSippingAddress.css"

import Navbar from "../component/Navbar"
import MenuLifeProfile from "../component/MenuLifeProfile"
import axios from "axios"

function ProfileSippingAddress() {
  const navigate = useNavigate()

  const [address, setAddress] = React.useState([])

  React.useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/login")
    } else {
      const user_id = localStorage.getItem("user_id")
      axios
        .get(`${process.env.REACT_APP_API_URL}/address/users/${user_id}`)
        .then((response) => {
          setAddress(response?.data?.data[0])
        })
    }
  }, [])

  console.log(address.length)

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
            <h5>Choose another address</h5>

            <p className="text-muted">Manage your shipping address</p>
            <hr />

            <div className="d-flex flex-column justify-content-evenly pb-5 mx-5">
              {/* content top */}
              <div className="border border-muted p-2 border-2 rounded-2 borderTop d-flex mt-2 justify-content-center">
                <button
                  type="button"
                  class="btn text-muted border-0 py-4 text-center"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-whatever="@mdo"
                  style={{ fontSize: "20px" }}
                >
                  Add new address
                </button>
              </div>

              {/* start modal Add Address */}
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5
                        class="modal-title text-center"
                        id="exampleModalLabel"
                      >
                        Add new Address
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="mb-3">
                          <label for="recipient-name" class="col-form-label">
                            Save address as (ex : home address, office address)
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="recipient-name"
                            placeholder="Rumah"
                          />
                        </div>

                        <div class="row mb-3">
                          <div class="col">
                            <label for="recipient-name" class="col-form-label">
                              Recipient’s name
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              aria-label="First name"
                            />
                          </div>
                          <div class="col">
                            <label for="recipient-name" class="col-form-label">
                              Recipient's telephone number
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              aria-label="Last name"
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <div class="col">
                            <label for="recipient-name" class="col-form-label">
                              Address
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              aria-label="First name"
                            />
                          </div>
                          <div class="col">
                            <label for="recipient-name" class="col-form-label">
                              Postal code
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              aria-label="Last name"
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label for="recipient-name" class="col-form-label">
                            City or Subdistrict
                          </label>
                          <div class="col">
                            <input
                              type="text"
                              class="form-control"
                              aria-label="First name"
                            />
                          </div>
                        </div>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label ms-3 "
                          for="flexCheckDefault"
                        >
                          Make it the primary address
                        </label>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-light px-5"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-danger px-5">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* end modal Add Address */}

              {/* content bottom */}
              <div className="d-flex flex-column mt-4 pb-3">
                <span class="border border-danger p-4 rounded-2">
                  <h6 className="fw-bold">Address Jane</h6>
                  <p>
                    Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                    Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok
                    c 16] Sokaraja, Kab. Banyumas, 53181
                  </p>
                  <Link
                    to="#"
                    className="text-danger fw-bold"
                    style={{ textDecoration: "none" }}
                  >
                    Change Address
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSippingAddress
