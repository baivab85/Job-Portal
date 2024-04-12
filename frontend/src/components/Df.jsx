import React from "react";

const Df = () => {
  return (
    <div>
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div className="container-fluid">
            <div id="header">
              <img src="/images/logo 3.png" alt="#" id="img9" />
              <a className="navbar-brand" href="/">
                Job Portal
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-lg-auto mb-2 mb-lg-0" id="index">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Log In
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a className="dropdown-item" href="/registration">
                          Applicant
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/ad-log">
                          Admin Login
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <header>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/images/edit4.jpeg" className="d-block w-100" id="img9" alt="..." />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(43, 57, 64, .5)" }}>
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8" id="headline1">
                    <h1 className="display-3 text-white animated slideInDown mb-4" id="head3">Find <b id="best">The Best Startup Job </b> That Suits You</h1>
                    <a href="/stu-talent" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft" id="btn">Search A Job</a>
                  </div>
                </div>
              </div>
            </div>
            {/* Add other carousel items similarly */}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>
      <footer className="footer">
        <div className="container">
          <div className="row row-cols-4">
            <div className="col">
              <h4>Job Portal</h4>
              <ul>
                <li><a href="#">about us</a></li>
                <li><a href="#">our services</a></li>
                <li><a href="#">privacy policy</a></li>
                <li><a href="#">affiliate program</a></li>
              </ul>
            </div>
            <div className="col">
              <h4>FAQ</h4>
              <ul>
                <li><a href="#">Ask a Question</a></li>
                <li><a href="#">Get help from an admin</a></li>
                <li id="info9"><a href="#">Any question related to registration can be asked at info@jobportal.in.</a></li>
              </ul>
            </div>
            <div className="col">
              <h4>Founders</h4>
              <ul>
                <li><a href="#">Aniruddha Ghosh</a></li>
                <li><a href="#">Arya Chatterjee</a></li>
                <li><a href="#">Anindya Biswas</a></li>
                <li><a href="#">Enakshi Nahar</a></li>
              </ul>
            </div>
            <div className="col">
              <img src="/images/logo 3.png" alt="..." id="img8" />
            </div>
          </div>
        </div>
        <p id="last">For any queries related to job, please reach out to us at partners@jobportal.in</p>
      </footer>
    </div>
  );
};

export default Df;
