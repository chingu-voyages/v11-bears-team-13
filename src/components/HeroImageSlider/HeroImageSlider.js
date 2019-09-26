import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from "reactstrap";
import image1 from "../../images/slide1.jpg";
import image2 from "../../images/slide2.jpg";
import image3 from "../../images/slide3.jpg";
import "./HeroImageSlider.css";

const items = [
  {
    src: image1,
    altText: "Flic en Flac beach",
    title: "Flic en Flac",
    caption:
      " One of the country’s longest beach with soft, white sand surrounded by lush vegetation. The coral reef forms a peaceful lagoon, perfect for novice divers and swimming."
  },
  {
    src: image2,
    altText: "black river gorges national park",
    title: "Black River Gorges National Park",
    caption:
      " It is the island’s largest National Park and extends over around 2% of the territory. The area is popular with hikers and has a number of well marked trails"
  },
  {
    src: image3,
    altText: "Slide 3",
    title: "Seven Coloured Earths Of Chamarel",
    caption:
      "The Seven Coloured Earths are a geological formation and prominent tourist attraction found in the Chamarel plain of the Rivière Noire District in south-western Mauritius"
  }
];

class HeroImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    const { activeIndex } = this.state;
    if (this.animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    const { activeIndex } = this.state;
    if (this.animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem onExiting={this.onExiting} onExited={this.onExited}>
          <img className="img-fluid" src={item.src} alt={item.altText} />
          <div className="img-slide-caption">
            <div>
              <h1 className="img-title">{item.title}</h1>
              <p className="img-caption">{item.caption}</p>
              <div className="explore-link">
                <Link to="/beaches">Know More </Link>
              </div>
            </div>
          </div>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default withRouter(HeroImageSlider);
