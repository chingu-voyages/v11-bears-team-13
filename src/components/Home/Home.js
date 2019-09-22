import React from "react";
import HeroImageSlider from "../HeroImageSlider/HeroImageSlider";
import PopularPlaces from "../PopularPlaces/PopularPlaces";

function Home() {
  return (
    <div className="home">
      <HeroImageSlider />
      <PopularPlaces />
    </div>
  );
}

export default Home;
