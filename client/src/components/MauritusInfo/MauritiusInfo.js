import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/fontawesome-free-solid";
import "./MauritiusInfo.css";

const MaritiusInfo = () => {
  return (
    <div className="country-info-container">
      <div className="country-info">
        <h2 className="info-heading text-center">Mauritius</h2>
        <p className="info-subheading text-center">Country in East Africa</p>
        <p className="info-description">
          Mauritius, an Indian Ocean island nation, is known for its beaches,
          lagoons and reefs. The mountainous interior includes Black River
          Gorges National Park, with rainforests, waterfalls, hiking trails and
          wildlife like the flying fox. Capital Port Louis has sites such as the
          Champs de Mars horse track, Eureka plantation house and 18th-century
          Sir Seewoosagur Ramgoolam Botanical Gardens
        </p>
      </div>
      <div className="weather-info">
        <h2 className="info-heading text-center">When to visit</h2>
        <p className="info-subheading text-center">Weather information </p>
        <div className="weather-list">
          <table>
            <tr>
              <th />
              <th className="right">High/Low</th>
            </tr>
            <tr>
              <td>September</td>
              <td className="right">
                <FontAwesomeIcon
                  icon={faCloud}
                  style={{ color: "#a3a7de", marginRight: "0.3rem" }}
                />
                22
                <sup style={{ fontSize: "0.8rem" }}> &#8451;</sup>
                /15
                <sup style={{ fontSize: "0.8rem" }}> &#8451;</sup>
              </td>
            </tr>
            <tr>
              <td>October</td>
              <td className="right">
                <FontAwesomeIcon
                  icon={faCloud}
                  style={{ color: "#a3a7de", marginRight: "0.3rem" }}
                />
                22
                <sup style={{ fontSize: "0.8rem" }}> &#8451;</sup>
                /15
                <sup style={{ fontSize: "0.8rem" }}> &#8451;</sup>
              </td>
            </tr>
            <tr>
              <td>November</td>
              <td className="right">
                <FontAwesomeIcon
                  icon={faCloud}
                  style={{ color: "#a3a7de", marginRight: "0.3rem" }}
                />
                22
                <sup style={{ fontSize: "0.8rem" }}> &#8451;</sup>
                /15
                <sup style={{ fontSize: "0.8rem" }}> &#8451;</sup>
              </td>
            </tr>
            <tr>
              <td>December</td>
              <td className="right">
                <FontAwesomeIcon
                  icon={faCloud}
                  style={{ color: "#a3a7de", marginRight: "0.3rem" }}
                />
                22
                <sup style={{ fontSize: "0.8rem" }}> &#8451;</sup>
                /15
                <sup style={{ fontSize: "0.8rem" }}> &#8451;</sup>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MaritiusInfo;
