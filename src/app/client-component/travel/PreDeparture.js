import React from "react";
import { Link } from "react-router-dom";

const PreDeparture = () => {
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Travel /  Pre-Departure </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="!#" onClNameick={(event) => event.preventDefault()}>
                Travel
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Pre-Departure
            </li>
          </ol>
        </nav>
      </div>
      <div>
        <div class="container">
          <div class="row py-5">
            <div class="card-deck tours">
              <div class="card tour shadow">
                <img
                  class="card-img-top tour-image"
                  src="https://placeimg.com/400/225/nature"
                  alt="Card image cap"
                />
                <div class="card-body bg-dark text-light tour-body text-center">
                  <h5 class="card-title tour-title">Bandung, Indonesia</h5>
                  <p class="card-text tour-description">
                    Tour Package 2 Days 1 Night
                  </p>
                  <p class="card-details">
                    <span class="tour-price">
                      <span class="currency">Rp.</span>{" "}
                      <span class="price">1.500.000,-</span> / pax
                    </span>
                  </p>
                  <div class="btn-group">
                    <a href="#" class="btn btn-success">
                      <i class="mdi mdi-telephone"></i> <span>Call us</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card tour shadow">
                <img
                  class="card-img-top tour-image"
                  src="https://placeimg.com/400/225/any"
                  alt="Card image cap"
                />
                <div class="card-body bg-dark text-light tour-body text-center">
                  <h5 class="card-title tour-title">Jakarta, Indonesia</h5>
                  <p class="card-text tour-description">
                    Tour Package 2 Days 1 Night
                  </p>
                  <p class="card-details">
                    <span class="tour-price">
                      <span class="currency">Rp.</span>{" "}
                      <span class="price">2.650.000,-</span> / pax
                    </span>
                  </p>
                  <div class="btn-group">
                    <a href="#" class="btn btn-success">
                      <i class="mdi mdi-telephone"></i> <span>Call us</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card tour shadow">
                <img
                  class="card-img-top tour-image"
                  src="https://placeimg.com/400/225/any/sepia"
                  alt="Card image cap"
                />
                <div class="card-body bg-dark text-light tour-body text-center">
                  <h5 class="card-title tour-title">Solo, Indonesia</h5>
                  <p class="card-text tour-description">
                    Tour Package 2 Days 1 Night
                  </p>
                  <p class="card-details">
                    <span class="tour-price">
                      <span class="currency">Rp.</span>{" "}
                      <span class="price">3.500.000,-</span> / pax
                    </span>
                  </p>
                  <div class="btn-group">
                    <a href="#" class="btn btn-success">
                      <i class="mdi mdi-telephone"></i> <span>Call us</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card tour shadow">
                <img
                  class="card-img-top tour-image"
                  src="https://placeimg.com/400/225/any/grayscale"
                  alt="Card image cap"
                />
                <div class="card-body bg-dark text-light tour-body text-center">
                  <h5 class="card-title tour-title">Palembang, Indonesia</h5>
                  <p class="card-text tour-description">
                    Tour Package 3 Days 2 Night
                  </p>
                  <p class="card-details">
                    <span class="tour-price">
                      <span class="currency">Rp.</span>{" "}
                      <span class="price">5.600.000,-</span> / pax
                    </span>
                  </p>
                  <div class="btn-group">
                    <a href="#" class="btn btn-success">
                      <i class="mdi mdi-telephone"></i> <span>Call us</span>
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

export default PreDeparture;
