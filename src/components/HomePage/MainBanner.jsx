import React from "react";
import { Carousel } from "react-bootstrap";
import one from "../../assets/slider/one.jpg";
import two from "../../assets/slider/two.jpg";
import three from "../../assets/slider/three.jpg";
import four from "../../assets/slider/four.jpg";
import five from "../../assets/slider/five.jpg";
import six from "../../assets/slider/six.jpg";
import seven from "../../assets/slider/seven.jpg";
import eight from "../../assets/slider/eight.jpg";

const MainBanner = () => {
  return (
    <div className="main-banner">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={one} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={two} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={three} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={four} alt="Four slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={five} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={six} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={seven} alt="Third slide" />
        </Carousel.Item>
        {/* <Carousel.Item>
          <img className="d-block w-100" src={eight} alt="Four slide" />
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

export default MainBanner;
