import styles from "./CoverCarousel.module.css";
import Carousel from "react-bootstrap/Carousel";

function CoverCarousel(props) {
  const carouselItems = props.itemsInfo.map((item, key) => (
    <Carousel.Item bsPrefix={`carousel-item ${styles[item.bg]}`} key={key}>
      <div className="d-flex flex-row align-items-center">
        <div className={`col ${styles.captionContainer} ${styles.hide}`}>
          <div>
            <h3 className="h3 fw-light text-white fw-bold">{item.h3}</h3>
            <h1 className="h1 text-white fw-bold">{item.h1}</h1>
            <p className="text-white fw-bold">
              <i>{item.p}</i>
            </p>
            <a href="/" className={`btn btn-dark ${styles.shopButton}`}>
              shop now
            </a>
          </div>
        </div>
        <div className="col">
          <img className="img-fluid" src={item.img} alt="First slide" />
        </div>
      </div>
    </Carousel.Item>
  ));

  return <Carousel>{carouselItems}</Carousel>;
}

export default CoverCarousel;
