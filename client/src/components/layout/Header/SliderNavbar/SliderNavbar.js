import Modal from "../../../../components/UI/Modal/Modal";
import styles from "./SliderNavbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import AppContext from "../../../../context/app-context";
import logo from "../../../../assets/images/logo.webp";

function SliderNavbar() {
  const ctx = useContext(AppContext);

  return (
    <Modal>
      <div className={styles.overlay}>
        <div className={styles.header}>
          <h4 className="mb-0 fw-bold">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </h4>
          <FontAwesomeIcon
            icon={faClose}
            size={"2x"}
            onClick={ctx.hideNavbar}
          />
        </div>

        <div className={styles.body}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
}

export default SliderNavbar;
