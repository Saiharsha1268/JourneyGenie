import React from "react";

const Tagline = () => {
  return (
    <div
      className="container text-center row row-cols-2"
      style={{
        margin: "auto auto",
        color: "whitesmoke",
        opacity: "0.90",
      }}
    >
      <div className="col"></div>
      <div className="col" style={{ marginTop: "115px" }}>
        <div className="row row-cols-1 my-5">
          <div className="col my-5">
            <h2>
              <strong>Explore, Plan, and Experience with</strong>
            </h2>
            <h1>
              <strong>Journey Genie</strong>
            </h1>
          </div>
          <div className="col my-5">
            <div className="container row row-cols-2">
              <div className="col" style={{ paddingLeft: "175px" }}>
                <button type="button" className="btn btn-primary">
                  <strong>Sign up</strong>
                </button>
              </div>
              <div className="col" style={{ paddingRight: "175px" }}>
                <button type="button" className="btn btn-dark">
                  <strong>Sign in</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tagline;
