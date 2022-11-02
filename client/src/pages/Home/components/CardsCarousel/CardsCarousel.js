import SlidesPerView from "../../../../components/UI/SlidesPerView/SlidesPerView";
import Card from "../Card/Card";
import React from "react";

function CardsCarousel(props) {
  const slides = props["products"].map((product, key) => {
    return <Card product={product} key={key} />;
  });
  return (
    <div className="my-5">
      <div className="text-center pb-3 mb-5">
        <h3 className="mb-0 h3 fw-bold">Featured Products</h3>
        <p className="mb-0 text-capitalize">The purpose of lorem ipsum</p>
      </div>
      <SlidesPerView slides={slides} />
    </div>
  );
}

export default CardsCarousel;
