import React from "react";
import "./PopularPlaces.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const PopularPlace = () => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

const PopularPlaces = () => {
  return (
    <div className="popular-places">
      <h1>Popular Places</h1>
      <PopularPlace />
      <PopularPlace />
      <PopularPlace />
    </div>
  );
};
export default PopularPlaces;
