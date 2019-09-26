import React from "react";
import HeroImageSlider from "../HeroImageSlider/HeroImageSlider";
import PopularDestinations from "../PopularDestinations/PopularDestinations";
import MauritiusInfo from "../MauritusInfo/MauritiusInfo";
import GoogleMapPreview from "../GoogleMapPreview/GoogleMap";

function Home() {
  return (
    <div className="home">
      <HeroImageSlider />
      <PopularDestinations />
      <MauritiusInfo />
      <GoogleMapPreview />
    </div>
  );
}

export default Home;
