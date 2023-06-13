import React from "react";
import "../assets/App.css";
import Navbar from "../component/Navbar";
import Carousel from "../component/Carousel";
import Carousel1 from "../assets/images/Carrousel 1.png";
import Carousel2 from "../assets/images/Carrousel 2.png";
import Category from "../component/Category";
import categoryImg1 from "../assets/images/Category T-Shirt.png";
import categoryImg2 from "../assets/images/Category Shorts.png";
import categoryImg3 from "../assets/images/Category Jacket.png";
import categoryImg4 from "../assets/images/Category Pants.png";
import categoryImg5 from "../assets/images/Category Shoes.png";
import categoryImg6 from "../assets/images/Category Glasses.png";
import { useNavigate } from 'react-router-dom';
import Card from "../component/Card";
const categoryData = [
    {
      categoryName: "T-Shirt",
      categoryImg: categoryImg1,
      categoryColor: "#CC0B04",
    },
  
    {
      categoryName: "Shorts",
      categoryImg: categoryImg2,
      categoryColor: "#1c3391",
    },
  
    {
      categoryName: "Jacket",
      categoryImg: categoryImg3,
      categoryColor: "#f67b02",
    },
  
    {
      categoryName: "Pants",
      categoryImg: categoryImg4,
      categoryColor: "#e31f51",
    },
    {
      categoryName: "Shoes",
      categoryImg: categoryImg5,
      categoryColor: "#57cd9e",
    },
  
    {
      categoryName: "Glasses",
      categoryImg: categoryImg6,
      categoryColor: "#5086d8",
    },
  ];

  
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
  ];

function App() {

    // const navigate = useNavigate();

    // React.useEffect(() => {
    //     if(!localStorage.getItem("auth")){
    //         navigate("/login")
    //     }
    // }, [])


   

  return (
    <div className="App">

        {/* start Home */}
        <Navbar />
      <main className="container pt-5 mt-0">
        <section className="row justify-content-center align-items-center mt-4">
          <div className="col-lg-8">
            <br />
            <br />
          <Carousel dataCarousel={dataCarousel} />
          </div>
        </section>
        <section className="mt-5">
          <h2 className="metropolis-b">Category</h2>
          <span >What are you looking for</span>
          <Category categoryData={categoryData} />
        </section>
        <section className="mt-5">
          <h2 className="metropolis-b">New</h2>
          <span>You've never seen it before</span>
          
        </section>
        <section className="mt-5">
          <h2 className="metropolis-b">Popular</h2>
          <span>Find clothes that are trending recently</span>
          <div className="row g-4 align-items-center">
          
          </div>
        </section>
      </main>
      {/* ending Home */}
    </div>
  );
}

export default App;
