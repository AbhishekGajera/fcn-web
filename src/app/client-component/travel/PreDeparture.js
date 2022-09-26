import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPreTravel, deleteTravel } from "../../../utils/APIs";
import { useCookies } from "react-cookie";

const PreDeparture = () => {
  const [travels, setTravels] = useState([])
  const [cookies] = useCookies(["user"]);


  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const { data } = await getPreTravel()
    setTravels(data?.results)
  }

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const onClickDelete = async (id) => {
    await deleteTravel(id)
    getData()
  }

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
        <div className="">
          <div className="row py-5">
            <div className="card-deck tours">
              {
                travels?.map((i) => {
                  return (
                    <div className="card tour preDeparture shadow">
                      <img
                        className="card-img-top tour-image"
                        src={i?.image}
                        alt="Card image cap"
                      />
                      <div className="card-body bg-dark text-light tour-body text-center">
                        <h5 className="card-title tour-title">{i?.name}</h5>
                        <p className="card-text tour-description">
                          {i?.desc}
                        </p>
                        <p className="card-details">
                          <span className="tour-price">
                            <span className="currency">Rp.</span>{" "}
                            <span className="price">{numberWithCommas(i?.price)},-</span> / pax
                          </span>
                        </p>
                        <div className="btn-group">
                          {cookies?.user?.role !== 'admin' && <button className="btn btn-success">
                            <i className="mdi mdi-trash"></i> <span>Contact us</span>
                          </button>}
                          {cookies?.user?.role === 'admin' && <button className="btn btn-success" onClick={() => onClickDelete(i?.id)}>
                            <i className="mdi mdi-trash"></i> <span>Delete</span>
                          </button>}
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreDeparture;
