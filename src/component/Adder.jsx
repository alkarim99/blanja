import React from "react"
import btnNegative from "../assets/images/Icon Negative.svg"
import btnPositive from "../assets/images/Icon Positive.svg"
import { useState } from "react"

function Adder(props) {
  const [counter, setCounter] = useState(1)

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1)
  }

  //decrease counter
  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1)
    }
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-between gap-2">
        <button
          style={{
            width: "35px",
            height: "35px",
            color: "white",
            backgroundColor: "rgb(0, 0, 0)",
            borderRadius: "100%",
            border: "none",
          }}
          onClick={decrease}
        >
          -
        </button>
        <span className="fs-5" id="quantity">
          {counter}
        </span>
        <button
          style={{
            width: "35px",
            height: "35px",
            color: "white",
            backgroundColor: "rgb(0, 0, 0)",
            borderRadius: "100%",
            border: "none",
          }}
          onClick={increase}
        >
          +
        </button>
      </div>
    </>
  )
}

export default Adder
