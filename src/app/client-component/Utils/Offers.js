import React from "react";

const Offers = () => {
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Offers</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                Utils
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Offres
            </li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Special offer</h4>
              <p className="card-description">
                <code>20 %</code> Offer on first course
              </p>
              <p>
                It is a long {" "}
                <mark className="bg-primary text-white">Offer</mark> fact
                that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal distribution
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Special offer</h4>
              <p className="card-description">
                <code>20 %</code> Offer on first course
              </p>
              <p>
                It is a long {" "}
                <mark className="bg-primary text-white">Offer</mark> fact
                that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal distribution
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Special offer</h4>
              <p className="card-description">
                <code>20 %</code> Offer on first course
              </p>
              <p>
                It is a long {" "}
                <mark className="bg-primary text-white">Offer</mark> fact
                that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal distribution
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Special offer</h4>
              <p className="card-description">
                <code>20 %</code> Offer on first course
              </p>
              <p>
                It is a long {" "}
                <mark className="bg-primary text-white">Offer</mark> fact
                that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal distribution
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
