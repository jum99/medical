import React from "react";
import "./Hospitals.css";
import hospitalIcon from "../../images/hospital-icon.png";
import location from "../../images/location.png";
import hospital from "../../images/hospital.png";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import { Col, Row } from "react-bootstrap";
import CommonBanner from "../Header/CommonBanner";

const Hospitals = () => {
  return (
    <div>
      <CommonBanner />
      <div className="text-center container mt-5">
        <button className="top-btn mb-3">Top Hospital</button>
        <h2 className="mb-4">Our Network of Hospital</h2>
        <div className="select-div mb-5">
          <div className="d-flex mb-2">
            <select className="form-select" aria-label="Default select example">
              <option selected>Keyword</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select className="form-select" aria-label="Default select example">
              <option selected>Location</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select className="form-select" aria-label="Default select example">
              <option selected>City</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select className="form-select" aria-label="Default select example">
              <option selected>Any Category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <button className="common-btn mb-2">Search Now</button>
        </div>
      </div>

      <section className="container">
        <Row xs={1} md={2}>
          <Col>
            <div className="mb-4">
              <div className="hospital-card d-flex mb-3">
                <img
                  className="me-4"
                  style={{ height: "250px" }}
                  src={hospital}
                  alt=""
                />
                <div className="mt-1">
                  <h5>Indraprastha Apollo</h5>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={location} alt="" />
                    <p>
                      Indraprastha Apollo Hospital, NH-19, New Delhi, Delhi
                      110076
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={hospitalIcon} alt="" />
                    <p>No. Of Beds: 10</p>
                  </div>
                  <div className="mb-3">
                    <img className="me-2" src={img1} alt="" />
                    <img className="me-2" src={img2} alt="" />
                    <img src={img3} alt="" />
                  </div>
                  <button className="common-btn me-3">
                    View Hospital Details
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="mb-4">
              <div className="hospital-card d-flex mb-3">
                <img
                  className="me-4"
                  style={{ height: "250px" }}
                  src={hospital}
                  alt=""
                />
                <div className="mt-1">
                  <h5>Indraprastha Apollo</h5>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={location} alt="" />
                    <p>
                      Indraprastha Apollo Hospital, NH-19, New Delhi, Delhi
                      110076
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={hospitalIcon} alt="" />
                    <p>No. Of Beds: 10</p>
                  </div>
                  <div className="mb-3">
                    <img className="me-2" src={img1} alt="" />
                    <img className="me-2" src={img2} alt="" />
                    <img src={img3} alt="" />
                  </div>
                  <button className="common-btn me-3">
                    View Hospital Details
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="mb-4">
              <div className="hospital-card d-flex mb-3">
                <img
                  className="me-4"
                  style={{ height: "250px" }}
                  src={hospital}
                  alt=""
                />
                <div className="mt-1">
                  <h5>Indraprastha Apollo</h5>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={location} alt="" />
                    <p>
                      Indraprastha Apollo Hospital, NH-19, New Delhi, Delhi
                      110076
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={hospitalIcon} alt="" />
                    <p>No. Of Beds: 10</p>
                  </div>
                  <div className="mb-3">
                    <img className="me-2" src={img1} alt="" />
                    <img className="me-2" src={img2} alt="" />
                    <img src={img3} alt="" />
                  </div>
                  <button className="common-btn me-3">
                    View Hospital Details
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="mb-4">
              <div className="hospital-card d-flex mb-3">
                <img
                  className="me-4"
                  style={{ height: "250px" }}
                  src={hospital}
                  alt=""
                />
                <div className="mt-1">
                  <h5>Indraprastha Apollo</h5>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={location} alt="" />
                    <p>
                      Indraprastha Apollo Hospital, NH-19, New Delhi, Delhi
                      110076
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={hospitalIcon} alt="" />
                    <p>No. Of Beds: 10</p>
                  </div>
                  <div className="mb-3">
                    <img className="me-2" src={img1} alt="" />
                    <img className="me-2" src={img2} alt="" />
                    <img src={img3} alt="" />
                  </div>
                  <button className="common-btn me-3">
                    View Hospital Details
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="mb-4">
              <div className="hospital-card d-flex mb-3">
                <img
                  className="me-4"
                  style={{ height: "250px" }}
                  src={hospital}
                  alt=""
                />
                <div className="mt-1">
                  <h5>Indraprastha Apollo</h5>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={location} alt="" />
                    <p>
                      Indraprastha Apollo Hospital, NH-19, New Delhi, Delhi
                      110076
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={hospitalIcon} alt="" />
                    <p>No. Of Beds: 10</p>
                  </div>
                  <div className="mb-3">
                    <img className="me-2" src={img1} alt="" />
                    <img className="me-2" src={img2} alt="" />
                    <img src={img3} alt="" />
                  </div>
                  <button className="common-btn me-3">
                    View Hospital Details
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="mb-4">
              <div className="hospital-card d-flex mb-3">
                <img
                  className="me-4"
                  style={{ height: "250px" }}
                  src={hospital}
                  alt=""
                />
                <div className="mt-1">
                  <h5>Indraprastha Apollo</h5>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={location} alt="" />
                    <p>
                      Indraprastha Apollo Hospital, NH-19, New Delhi, Delhi
                      110076
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img className="mb-3 me-3" src={hospitalIcon} alt="" />
                    <p>No. Of Beds: 10</p>
                  </div>
                  <div className="mb-3">
                    <img className="me-2" src={img1} alt="" />
                    <img className="me-2" src={img2} alt="" />
                    <img src={img3} alt="" />
                  </div>
                  <button className="common-btn me-3">
                    View Hospital Details
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Hospitals;
