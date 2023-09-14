import React from "react";
import "./HomeBanner.css";
import doctor1 from "../../images/doctor1.png";
import search from "../../images/Shape.png";

const HomeBanner = () => {
  return (
    <div style={{ backgroundColor: "rgba(241, 248, 255, 1)" }}>
      <div className="container d-flex hbanner">
        <div>
          <button className="top-btn mb-3">Welcome to Tripoheal</button>
          <h1 className="mb-3">
            Get best Treatment Health{" "}
            <span style={{ color: "rgba(51, 160, 141, 1)" }}>
              Travel Platform
            </span>
          </h1>
          <h4 className="mb-3">Find the best doctors across the world</h4>
          <div className="search-field mb-3">
            <p>Search disease, surgeons or hospital</p>
            <div>
              <img src={search} alt="" />
            </div>
          </div>
          <p>
            Treatments for Neuro & Spine, IVF & Gyne, Cardiac, Urology, Gastro,
            Transplants and more
          </p>
          <button className="common-btn mb-3">Explore Medical</button>
        </div>
        <div className="hbanner-img">
          <img src={doctor1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
