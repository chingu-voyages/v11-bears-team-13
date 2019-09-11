import React from "react";
import Carousel from "../Carousel/Carousel";
import PopularPlaces from "../PopularPlaces/PopularPlaces";

function Home() {
  return (
    <div className="home">
      <Carousel />
      <PopularPlaces />
    </div>
  );
}

export default Home;
