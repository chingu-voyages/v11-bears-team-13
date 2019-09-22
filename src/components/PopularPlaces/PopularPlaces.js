import React from "react";
import "./PopularPlaces.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

const PopularPlace = () => {
  return (
    <div>
      <Card style={{ width: "250px", margin: "10px" }}>
        <CardImg top src="..." alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </CardText>
          <a href="/" className="btn btn-primary btn-lg">
            Link
          </a>
        </CardBody>
      </Card>
    </div>
  );
};

const PopularPlaces = () => {
  return (
    <div className="popular-places">
      <h1>Popular Places</h1>
      <div className="place-container">
        <PopularPlace />
        <PopularPlace />
        <PopularPlace />
      </div>
    </div>
  );
};
export default PopularPlaces;
