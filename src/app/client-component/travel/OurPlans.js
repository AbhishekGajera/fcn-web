import React from "react";
import { Link } from "react-router-dom";

const OurPlans = () => {
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Travel / Our Plans </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="!#" onClNameick={(event) => event.preventDefault()}>
                Travel
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Our Plans
            </li>
          </ol>
        </nav>
      </div>
      <div>
        <div className="container">
          <div className="row py-5">
            <div className="card-deck tours">
              <div className="card tour shadow">
                <img
                  className="card-img-top tour-image"
                  src="https://placeimg.com/400/225/nature"
                  alt="Card image cap"
                />
                <div className="card-body bg-dark text-light tour-body text-center">
                  <h5 className="card-title tour-title">Bandung, Indonesia</h5>
                  <p className="card-text tour-description">
                    Tour Package 2 Days 1 Night
                  </p>
                  <p className="card-details">
                    <span className="tour-price">
                      <span className="currency">Rp.</span>{" "}
                      <span className="price">1.500.000,-</span> / pax
                    </span>
                  </p>
                  <div className="btn-group">
                    <a href="#" className="btn btn-success">
                      <i className="mdi mdi-telephone"></i> <span>Contact us</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card tour shadow">
                <img
                  className="card-img-top tour-image"
                  src="https://placeimg.com/400/225/any"
                  alt="Card image cap"
                />
                <div className="card-body bg-dark text-light tour-body text-center">
                  <h5 className="card-title tour-title">Jakarta, Indonesia</h5>
                  <p className="card-text tour-description">
                    Tour Package 2 Days 1 Night
                  </p>
                  <p className="card-details">
                    <span className="tour-price">
                      <span className="currency">Rp.</span>{" "}
                      <span className="price">2.650.000,-</span> / pax
                    </span>
                  </p>
                  <div className="btn-group">
                    <a href="#" className="btn btn-success">
                      <i className="mdi mdi-telephone"></i> <span>Contact us</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card tour shadow">
                <img
                  className="card-img-top tour-image"
                  src="https://placeimg.com/400/225/any/sepia"
                  alt="Card image cap"
                />
                <div className="card-body bg-dark text-light tour-body text-center">
                  <h5 className="card-title tour-title">Solo, Indonesia</h5>
                  <p className="card-text tour-description">
                    Tour Package 2 Days 1 Night
                  </p>
                  <p className="card-details">
                    <span className="tour-price">
                      <span className="currency">Rp.</span>{" "}
                      <span className="price">3.500.000,-</span> / pax
                    </span>
                  </p>
                  <div className="btn-group">
                    <a href="#" className="btn btn-success">
                      <i className="mdi mdi-telephone"></i> <span>Contact us</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card tour shadow">
                <img
                  className="card-img-top tour-image"
                  src="https://placeimg.com/400/225/any/grayscale"
                  alt="Card image cap"
                />
                <div className="card-body bg-dark text-light tour-body text-center">
                  <h5 className="card-title tour-title">Palembang, Indonesia</h5>
                  <p className="card-text tour-description">
                    Tour Package 3 Days 2 Night
                  </p>
                  <p className="card-details">
                    <span className="tour-price">
                      <span className="currency">Rp.</span>{" "}
                      <span className="price">5.600.000,-</span> / pax
                    </span>
                  </p>
                  <div className="btn-group">
                    <a href="#" className="btn btn-success">
                      <i className="mdi mdi-telephone"></i> <span>Contact us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPlans;
