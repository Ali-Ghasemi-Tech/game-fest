import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useStateContext } from "../StateContext";
import "../style/productSlider.css";

const ProductSlider = ({ category }) => {
  const { data } = useStateContext();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Carousel
      className="carousel"
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {data.map((product) => (
        <div className="product-slider">
          <div className="img-container">
            <img src={product.img} alt="" />
          </div>
          <div className="description">
            <span className="product-name">{product.name}</span>
            <div>
              <span>{product.price.toLocaleString()} T</span>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ProductSlider;
