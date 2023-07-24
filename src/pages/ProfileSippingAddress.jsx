import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/ProfileSippingAddress.css";

import Navbar from "../component/Navbar";
import MenuLifeProfile from "../component/MenuLifeProfile";
import axios from "axios";
import Swal from "sweetalert2";

function ProfileSippingAddress() {
  const navigate = useNavigate();

  const [profile, setProfile] = React.useState([]);
  const [address, setAddress] = React.useState([]);
  const [address_as, setAddressas] = React.useState([]);
  const [recipients_name, setRecipientsname] = React.useState([]);
  const [recipients_phone_number, setRecipientsphonenumber] = React.useState([]);
  const [newaddress, setNewaddress] = React.useState([]);
  const [postal_code, setPostalcode] = React.useState([]);
  const [city, setCity] = React.useState([]);
  const [idupdate, setIdupdate] = React.useState([]);
  const [addressasupdate, setAddressasUpdate] = React.useState([]);
  const [recipientsnameupdate, setRecipientsnameUpdate] = React.useState([]);
  const [recipientsphonenumberupdate, setRecipientsphonenumberUpdate] = React.useState([]);
  const [addressupdate, setNewaddressUpdate] = React.useState([]);
  const [postalcodeupdate, setPostalcodeUpdate] = React.useState([]);
  const [cityupdate, setCityUpdate] = React.useState([]);

  React.useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/login");
    } else {
      const user_id = localStorage.getItem("user_id");
      axios.get(`${process.env.REACT_APP_API_URL}/address/user/${user_id}`).then((response) => {
        setAddress(response?.data?.data);
      });
      axios.get(`${process.env.REACT_APP_API_URL}/users/${user_id}`).then((response) => {
        setProfile(response?.data?.data[0]);
      });
    }
  }, []);

  const handleCreateAddress = () => {
    const user_id = localStorage.getItem("user_id");
    axios
      .post(`${process.env.REACT_APP_API_URL}/address`, {
        address_as,
        recipients_name,
        recipients_phone_number,
        address: newaddress,
        postal_code,
        city,
        user_id,
      })
      .then((response) => {
        Swal.fire({
          title: "Create Address Success",
          text: "Create Address Success",
          icon: "success",
        }).then(() => {
          window.location.href = "./ProfileSippingAddress";
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Create Address Failed",
          text: error?.response?.data?.message ?? "Something wrong in our app",
          icon: "error",
        });
      });
  };

  const handleUpdateAddress = () => {
    const user_id = localStorage.getItem("user_id");
    axios
      .patch(`${process.env.REACT_APP_API_URL}/address/${idupdate}`, {
        address_as: addressasupdate,
        recipients_name: recipientsnameupdate,
        recipients_phone_number: recipientsphonenumberupdate,
        address: addressupdate,
        postal_code: postalcodeupdate,
        city: cityupdate,
        user_id,
      })
      .then((response) => {
        Swal.fire({
          title: "Update Address Success",
          text: "Update Address Success",
          icon: "success",
        }).then(() => {
          window.location.href = "./ProfileSippingAddress";
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Update Address Failed",
          text: error?.response?.data?.message ?? "Something wrong in our app",
          icon: "error",
        });
      });
  };

  const handleRemoveAddress = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform the delete request
        const user_id = localStorage.getItem("user_id");
        axios
          .delete(`${process.env.REACT_APP_API_URL}/address/${id}`, {
            user_id,
          })
          .then((response) => {
            Swal.fire({
              title: "Removed!",
              text: "The address has been removed.",
              icon: "success",
            }).then(() => {
              // After successful removal, refresh the address list
              axios
                .get(`${process.env.REACT_APP_API_URL}/address/user/${user_id}`)
                .then((response) => {
                  setAddress(response?.data?.data);
                });
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Remove Address Failed",
              text: error?.response?.data?.message ?? "Something wrong in our app",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="" style={{ backgroundColor: "#eeeeee" }}>
      {/* Navbar */}
      <Navbar />

      <div className="container-fluide d-flex ProfileBg">
        {/* control Profile lift */}
        <MenuLifeProfile fullname={profile.fullname} profilepicture={profile.profilepicture} />

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

            {address.length === 0 ? (
              <div className={"alert alert-warning"} role="alert">
                Please add your address!
              </div>
            ) : null}

            <div className="d-flex flex-column justify-content-evenly pb-5 mx-5">
              {/* content top */}
              <div className="border border-muted p-2 border-2 rounded-2 borderTop d-flex mt-2 justify-content-center">
                <button
                  type="button"
                  className="btn text-muted border-0 py-4 text-center"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-whatever="@mdo"
                  style={{ fontSize: "20px" }}
                >
                  Add new address
                </button>
              </div>

              {/* start modal Add Address */}
              {/* ... */}
              {/* end modal Add Address */}

              {/* content bottom */}
              <div className="d-flex flex-column mt-4 pb-3">
                {address.length > 0
                  ? address.map((item) => (
                      <span className="border border-danger my-3 p-4 rounded-2" key={item.id}>
                        <h6 className="fw-bold">{item.address_as}</h6>
                        <p>
                          {item.address}, {item.city}, {item.postal_code}
                        </p>
                        <Link
                          to="#"
                          className="text-danger fw-bold"
                          style={{ textDecoration: "none" }}
                          onClick={() => {
                            setAddressasUpdate(item.address_as);
                            setRecipientsnameUpdate(item.recipients_name);
                            setRecipientsphonenumberUpdate(item.recipients_phone_number);
                            setNewaddressUpdate(item.address);
                            setPostalcodeUpdate(item.postal_code);
                            setCityUpdate(item.city);
                            setIdupdate(item.id);
                          }}
                          data-bs-toggle="modal"
                          data-bs-target={`#address${item.id}`}
                        >
                          Change Address
                        </Link>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm ms-3"
                          onClick={() => handleRemoveAddress(item.id)}
                        >
                          Remove Address
                        </button>
                        <div
                          className="modal fade"
                          id={`address${item.id}`}
                          tabIndex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          {/* ... */}
                        </div>
                      </span>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSippingAddress;
