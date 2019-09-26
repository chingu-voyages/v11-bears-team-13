import React from "react";
import "./PopularDestinations.css";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  CardGroup
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/fontawesome-free-solid";
import cardImg from "../../images/card.jpg";

const PopularPlace = () => {
  return (
    <div className="py-5">
      <Card inverse className="mx-3">
        <CardImg width="100%" src={cardImg} alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle>Card Title</CardTitle>
          <CardText>This is a wider card with supporting text</CardText>
          <CardText className="text-right">
            <button type="button" className="btn btn-link btn-like-count">
              <FontAwesomeIcon icon={faHeart} className="btn-heart" />
            </button>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

const PopularPlaces = () => {
  return (
    <div className="popular-destinations py-4">
      <h1>Popular Destinations</h1>
      <div className="text-right mr-5">
        <a className="btn btn-link" href="/">
          see all
        </a>
      </div>

      <CardGroup className="d-flex justify-content-center">
        <PopularPlace />
        <PopularPlace />
        <PopularPlace />
        <PopularPlace />
      </CardGroup>
    </div>
  );
};
export default PopularPlaces;
