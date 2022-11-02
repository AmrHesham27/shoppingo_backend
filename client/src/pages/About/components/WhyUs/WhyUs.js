import React from "react";
import shipingImage from "../../../../assets/images/shipping.webp";
import supportImage from "../../../../assets/images/support.webp";
import moneyImage from "../../../../assets/images/money.webp";
import styles from "./WhyUs.module.css";

function WhyUs() {
  return (
    <section className={styles.section}>
      <div className="separator section-padding">
        <div className="line"></div>
        <h3 className="mb-0 h3 fw-bold">Why Choose Us</h3>
        <div className="line"></div>
      </div>
      <div className="row row-cols-1 row-cols-xl-3 g-4 why-choose">
        <div className="col d-flex">
          <div className="card rounded-0 shadow-none w-100">
            <div className="card-body">
              <img src={shipingImage} width="60" alt="" />
              <h5 className="my-3 fw-bold">Free Shipping</h5>
              <p className="mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industr in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="col d-flex">
          <div className="card rounded-0 shadow-none w-100">
            <div className="card-body">
              <img src={moneyImage} width="60" alt="" />
              <h5 className="my-3 fw-bold">100% Back Gaurantee</h5>
              <p className="mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industr in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="col d-flex">
          <div className="card rounded-0 shadow-none w-100">
            <div className="card-body">
              <img src={supportImage} width="60" alt="" />
              <h5 className="my-3 fw-bold">Online Support 24/7</h5>
              <p className="mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industr in some form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
