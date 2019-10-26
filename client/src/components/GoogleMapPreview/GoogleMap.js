import React from "react";
import "./GoogleMap.css";

const GoogleMapPreview = () => {
  return (
    <div className="map-container">
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="100%"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=port%20louis%20mauritius&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
          <a href="https://www.embedgooglemap.net/blog/nordvpn-coupon-code/">
            nordvpnm
          </a>
        </div>
      </div>
    </div>
  );
};

export default GoogleMapPreview;
