import styles from "./Footer.module.css";
import logo from "../../../assets/images/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import PlayStoreImage from "../../../assets/images/play-store.webp";
import AppleStoreImage from "../../../assets/images/apple-store.webp";

function Footer() {
  return (
    <footer>
      <div className={styles.about}>
        <img src={logo} className="mb-3" alt="shoppingo logo" />
        <h5 className="mb-3 fw-bold">About Us</h5>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className={styles.explore}>
        <h5 className="mb-3 fw-bold">Explore</h5>
        <a href="/">Fashion</a>
        <a href="/">Women</a>
        <a href="/">Furniture</a>
        <a href="/">Shoes</a>
        <a href="/">Topwear</a>
        <a href="/">Brands</a>
        <a href="/">Kids</a>
      </div>
      <div className={styles.company}>
        <h5 className="mb-3 fw-bold">Company</h5>
        <a href="/">About Us</a>
        <a href="/">Contact Us</a>
        <a href="/">FAQ</a>
        <a href="/">Privacy</a>
        <a href="/">Terms</a>
        <a href="/">Complaints</a>
      </div>
      <div className={styles.follow}>
        <h5 className="mb-3 fw-bold">Follow Us</h5>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faFacebook} size="1x" />
          </div>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faTwitter} size="1x" />
          </div>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faYoutube} size="1x" />
          </div>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
          </div>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faInstagram} size="1x" />
          </div>
        </div>
        <h5 className="mt-4 fw-bold">Support</h5>
        <p>support@example.com</p>
        <h5 className="mt-4 fw-bold">Toll Free</h5>
        <p>1800- 8xx 2xx</p>
      </div>
      <div className={styles.download}>
        <h5 className="mt-4 fw-bold">Download Mobile App</h5>
        <div>
          <a href="/">
            <img src={PlayStoreImage} alt="play store" />
          </a>
          <a href="/">
            <img src={AppleStoreImage} alt="apple store" />
          </a>
        </div>
      </div>
      <div className={styles.footer}>
        © 2022. www.example.com | All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
