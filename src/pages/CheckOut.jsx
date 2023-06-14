import React from "react"
import "../style/CheckOut.css"
import Navbar from "../component/Navbar"
import ItemCheckOut from "../component/ItemCheckOut"

import axios from "axios"
import { useLocation } from "react-router"
import { useNavigate } from "react-router-dom"

function CheckOut() {
  const navigate = useNavigate()
  const location = useLocation()
  const id = location?.pathname?.split("/")[2]
  const quantity = location?.pathname?.split("/")[3]
  const [product, setProduct] = React.useState([])
  const [address, setAddress] = React.useState([])

  React.useEffect(() => {
    window.scroll(0, 0)

    axios
      .get(`${process.env.REACT_APP_API_URL}/products/${id}`)
      .then((response) => setProduct(response?.data?.data[0]))
      .catch((err) => {
        console.log("error :", err)
      })

    axios
      .get(
        `${process.env.REACT_APP_API_URL}/address/user/${localStorage.getItem(
          "user_id"
        )}`
      )
      .then((response) => setAddress(response?.data?.data[0]))
      .catch((err) => {
        console.log("error :", err)
      })
  }, [])

  const handleRupiah = (price) => {
    let priceString = price
    let sisa = priceString?.length % 3
    let rupiah = priceString?.substr(0, sisa)
    let ribuan = priceString?.substr(sisa).match(/\d{3}/g)
    if (ribuan) {
      let separator = sisa ? "." : ""
      rupiah += separator + ribuan.join(".")
      return rupiah
    }
  }

  const handleBuy = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/orders/`, {
        product_id: product.id,
        user_id: localStorage.getItem("user_id"),
        quantity: "1",
        paymentmethod: "GoPay",
        address_id: "1",
        total: "100000",
        paymentstatus: "Not yet paid",
        orderstatus: "",
      })
      .then((response) => setProduct(response?.data?.data[0]))
      .catch((err) => {
        console.log("error :", err)
      })
  }

  return (
    <div className="">
      {/* Start Navbar */}
      <Navbar />
      {/* End Navbar */}

      {/* Content */}
      <div className="container d-flex flex-row justify-content-between">
        <div className=" container" style={{ marginTop: "5rem" }}>
          <h1 className="text-start mt-3">Check Out</h1>
          <p className="text-start mt-3">Shipping Adress</p>

          <div className="d-flex flex-row CheckOutHp justify-content-between">
            <div className="">
              <div
                className="card w-40 mb-3 me-4 ItemCheckOut"
                style={{ width: "90%" }}
              >
                <div className="card-body">
                  <h5 className="card-title text-start">Andreas Jane</h5>
                  <p className="card-text text-start">
                    Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                    Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok
                    c 16] Sokaraja, Kab. Banyumas, 53181
                  </p>

                  {/* <a href="#" className="btn btn-outline-secondary float-start">
                    Choose another address
                  </a> */}

                  {/* content top */}

                  <button
                    type="button"
                    class="btn btn-outline-secondary float-start"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@mdo"
                  >
                    Choose another address
                  </button>

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
                            Choose another address
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
                              <label
                                for="recipient-name"
                                class="col-form-label"
                              >
                                Save address as (ex : home address, office
                                address)
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
                                <label
                                  for="recipient-name"
                                  class="col-form-label"
                                >
                                  Recipient’s name
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  aria-label="First name"
                                />
                              </div>
                              <div class="col">
                                <label
                                  for="recipient-name"
                                  class="col-form-label"
                                >
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
                                <label
                                  for="recipient-name"
                                  class="col-form-label"
                                >
                                  Address
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  aria-label="First name"
                                />
                              </div>
                              <div class="col">
                                <label
                                  for="recipient-name"
                                  class="col-form-label"
                                >
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
                              <label
                                for="recipient-name"
                                class="col-form-label"
                              >
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
                </div>
              </div>

              {/* content buy item */}
              <ItemCheckOut product={product} quantity={quantity} />
            </div>

            <div className="card cardCost">
              <div className="card-body">
                <h6>Shopping summary</h6>
                <div className="d-flex flex-row justify-content-between">
                  <p>Order</p>
                  <p>
                    Rp{" "}
                    {handleRupiah(
                      (parseInt(product.price) * parseInt(quantity)).toString()
                    )}
                  </p>
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <p>Delivery</p>
                  <p>Rp 20.000</p>
                </div>
                <hr />
                <div className="d-flex flex-row justify-content-between">
                  <p>Shopping summary</p>
                  <p className="text-danger">
                    Rp{" "}
                    {handleRupiah(
                      (parseInt(product.price) + parseInt("20000")).toString()
                    )}
                  </p>
                </div>

                {/* <!-- Button Payment --> */}
                <button
                  type="button"
                  class="btn btn-danger BtnCheckOut"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                >
                  Select payment
                </button>

                {/* <!-- Modal --> */}
                <div
                  class="modal fade"
                  id="exampleModal1"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel1"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel1">
                          Payment
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <p>Payment method</p>

                        <div className="d-flex justify-content-between">
                          <div className="d-flex ">
                            <img
                              src="../images/GoPay.png"
                              alt=""
                              style={{ width: "50px", height: "20px" }}
                              className="me-5"
                            />
                            <p>Gopay</p>
                          </div>
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          ></input>
                        </div>

                        <div className="d-flex  justify-content-between">
                          <div className="d-flex ">
                            <img
                              src="../images/posIndonesia.png"
                              alt=""
                              style={{ width: "50px", height: "30px" }}
                              className="me-5"
                            />
                            <p>Pos Indonesia</p>
                          </div>
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          ></input>
                        </div>

                        <div className="d-flex  justify-content-between">
                          <div className="d-flex ">
                            <img
                              src="../images/masterCard.png"
                              alt=""
                              style={{ width: "50px", height: "30px" }}
                              className="me-5"
                            />
                            <p>Master Card</p>
                          </div>
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          ></input>
                        </div>
                      </div>

                      <hr className="text-muted" />

                      <div className="d-flex flex-column mx-3">
                        <h5>shopping summary</h5>
                        <div className="d-flex justify-content-between">
                          <p className="text-muted">Order</p>
                          <p className="fw-bold">$ 40.0</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="text-muted">Delivery</p>
                          <p className="fw-bold">$ 5.0</p>
                        </div>
                      </div>

                      <div class="modal-footer d-flex justify-content-between">
                        <div className="d-flex flex-column justify-content-between">
                          <label className="text-muted">Delivery</label>
                          <label className="fw-bold text-danger">$ 45.0</label>
                        </div>
                        <button
                          type="button"
                          class="btn btn-danger"
                          style={{ width: "10rem" }}
                        >
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut
