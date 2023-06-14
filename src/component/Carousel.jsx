import React from "react"
import Carousel1 from "../assets/images/Carrousel 1.png"
import Carousel2 from "../assets/images/Carrousel 2.png"
const dataCarousel = [
  {
    carouselImg: Carousel1,
  },
  {
    carouselImg: Carousel1,
  },
  {
    carouselImg: Carousel1,
  },
  {
    carouselImg: Carousel2,
  },
]

function Carousel({ dataCarousel }) {
  const indicator = []
  const carouselImage = []
  dataCarousel.map((element, index) => {
    indicator.push(
      <button
        key={index.toString()}
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={index}
        className={index === 0 ? "active" : ""}
        aria-current={index === 0 ? "true" : "false"}
        aria-label={`Slide ${index}`}
      />
    )
    carouselImage.push(
      <div
        key={index.toString()}
        className={index === 0 ? "carousel-item active" : "carousel-item"}
      >
        <img src={element.carouselImg} className="d-block w-100" alt="..." />
      </div>
    )
    return
  })
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">{indicator}</div>
        <div className="carousel-inner rounded-3">{carouselImage}</div>
        <button
          className="carousel-control-prev my-auto"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next my-auto"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Carousel
