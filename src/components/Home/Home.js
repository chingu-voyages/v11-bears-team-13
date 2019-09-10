import React from "react";
import Carousel from "../Carousel/Carousel";
import Navbar from "../Navbar/Navbar";
import PopularPlaces from "../PopularPlaces/PopularPlaces";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Carousel />
      <PopularPlaces />
    </div>
  );
}

export default Home;
