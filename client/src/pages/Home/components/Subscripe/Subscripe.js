import styles from "./styles.module.css";
import image from "../../../../assets/images/subscripe.jpeg";

function Subscripe() {
  return (
    <section
      className={`${styles["subscribe-banner"]} p-5`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.542), rgba(0, 0, 0, 0.73)), url(${image})`,
      }}
    >
      <div className="row">
        <div className="col-12 col-lg-6 mx-auto">
          <div className="text-center">
            <h3 className="mb-0 fw-bold text-white">
              Get Latest Update by <br /> Subscribe Our Newslater
            </h3>
            <div className="mt-3">
              <input
                type="text"
                className={`form-control form-control-lg ${styles["bubscribe-control"]} rounded-0 px-5 py-3`}
                placeholder="Enter your email"
              />
            </div>
            <div className="mt-3 d-grid">
              <button
                type="button"
                className={`btn btn-lg ${styles["btn-ecomm"]} ${styles["bubscribe-button"]} px-5 py-3`}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscripe;
