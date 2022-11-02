import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./CartItem.module.css";
import { cartActions } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

function CartItem(props) {
  const { product } = props;

  const dispatch = useDispatch();

  const handleDeleteProduct = () => {
    dispatch(cartActions.removeProduct({ id: product.id }));
  };

  const handleIncreaseProductQty = () => {
    dispatch(cartActions.increaseProductQty({ id: product.id }));
  };

  const handleDecreaseProductQty = () => {
    dispatch(cartActions.decreaseProductQty({ id: product.id }));
  };

  const [image, setImage] = useState(null);
  useEffect(() => {
    const url = `${process.env.REACT_APP_SERVER}/images/${product["imgId"]}/${product["imgExt"]}`;
    fetch(url).then((response) => {
      response.blob().then((blob) => setImage(URL.createObjectURL(blob)));
    });
  }, [setImage, product]);

  return (
    <div className="d-flex align-items-center gap-3 p-3">
      <div className="bottom-product-img">
        <img src={image} width="70" alt="product" />
      </div>
      <div>
        <h6 className="mb-0 fw-light mb-1">{product.name}</h6>
        <p className="mb-0">
          <strong>
            {product.qty} X ${product.price}
          </strong>
        </p>
      </div>
      <div className="d-flex flex-column">
        <button
          className={styles.controlBtn}
          onClick={handleIncreaseProductQty}
        >
          +
        </button>
        <button
          className={styles.controlBtn}
          onClick={handleDecreaseProductQty}
        >
          -
        </button>
      </div>
      <div className="ms-auto fs-5">
        <FontAwesomeIcon icon={faTrash} onClick={handleDeleteProduct} />
      </div>
    </div>
  );
}

export default CartItem;
