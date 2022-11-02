import React from "react";

function SearchOrders() {
  return (
    <div className="card rounded-0 mb-3 bg-light">
      <div className="card-body">
        <div className="d-flex flex-column flex-xl-row gap-3 align-items-center">
          <div className="">
            <h5 className="mb-1 fw-bold">All Orders</h5>
            <p className="mb-0">for anytime</p>
          </div>
          <div className="order-search flex-grow-1">
            <form>
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control ps-5 rounded-0"
                  placeholder="Search Product..."
                />
                <span className="position-absolute top-50 product-show translate-middle-y">
                  <i className="bi bi-search ms-3"></i>
                </span>
              </div>
            </form>
          </div>
          <div className="filter">
            <button
              type="button"
              className="btn btn-dark rounded-0"
              data-bs-toggle="modal"
              data-bs-target="#FilterOrders"
            >
              <i className="bi bi-filter me-2"></i>Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchOrders;
