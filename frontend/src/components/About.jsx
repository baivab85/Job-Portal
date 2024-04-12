import React from "react";

const About = () => {
  const linkStyle = {
    textDecoration: 'none',
  };
  return (
    <>
      
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                  
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <header>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/images/job9.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "rgba(43, 57, 64, 0.5)" }}
              >  
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8" id="heading">
                    <h1 className="display-3 text-white animated slideInDown mb-4">
                      We Never Dreamed About Success. We Worked For It.
                    </h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-2">
                      JOB_PORTAL.ORG
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    
      <div className="container-fluid intro-section">
         <div className="container">

         <div className="col-lg-3.3 col-md-2 col-sm-12 one">
         
            <img src="images/my.jpg" alt="img" height={'300px'}></img>
            <p><b>Baivab Mukherjee,MSIT Connect With Us</b> <a href="#"></a></p>
            <a href='https://www.linkedin.com/in/baivab85/' style={linkStyle}><img src='images/linkedinicon.png' alt='' height={'30px'}/> </a>
            <a href='' style={linkStyle}><img src='images/fbicon.png' alt='' height={'30px'}/> </a>
            <a href='' style={linkStyle}><img src='images/insta_icon.jpg' alt='' height={'30px'}/></a>
            <a href='' style={linkStyle}><img src='images/googleicon.jpg' alt='' height={'30px'}/></a>
         </div>
           <div className="col-lg-3.3 col-md-2 col-sm-12 one">
            <img src="images/sayan_.jpg" alt="img" height={'300px'}></img>
            <p><b>Sayan Ghosh,MSIT Connect With Us</b></p>
            <a href='https://www.linkedin.com/in/sayan-ghosh-4591ab281/' style={linkStyle}><img src='images/linkedinicon.png' alt='' height={'30px'}/> </a>
            <a href='' style={linkStyle}><img src='images/fbicon.png' alt='' height={'30px'}/> </a>
            <a href='' style={linkStyle}><img src='images/insta_icon.jpg' alt='' height={'30px'}/></a>
            <a href='' style={linkStyle}><img src='images/googleicon.jpg' alt='' height={'30px'}/></a>
           </div>

           <div className="col-lg-3.3 col-md-2 col-sm-12 one">
            <img src="images/sujoy.jpg" alt="img" height={'300px'}></img>
            <p><b>Sujoy Bera,MSIT Connect With Us</b> <a href="#"></a></p>
            <a href='https://www.linkedin.com/in/sujoy-bera-6a2291293/' style={linkStyle}><img src='images/linkedinicon.png' alt='' height={'30px'}/> </a>
            <a href='' style={linkStyle}><img src='images/fbicon.png' alt='' height={'30px'}/> </a>
            <a href='' style={linkStyle}><img src='images/insta_icon.jpg' alt='' height={'30px'}/></a>
            <a href='' style={linkStyle}><img src='images/googleicon.jpg' alt='' height={'30px'}/></a>
           </div>
           <div className="col-lg-3.3 col-md-2 col-sm-12 one">
            <img src="images/pyne.jpg" alt="img" height={'300px'}></img>
            <p><b>Subhrojyoti Pyne,MSIT Connect With Us</b> <a href="#"></a></p>
            <a href='https://www.linkedin.com/in/subhro-jyoti-pyne-262303210/' style={linkStyle}><img src='images/linkedinicon.png' alt='' height={'30px'}/> </a>
            <a href='' style={linkStyle}><img src='images/fbicon.png' alt='' height={'30px'}/> </a>
            <a href='' style={linkStyle}><img src='images/insta_icon.jpg' alt='' height={'30px'}/></a>
            <a href='' style={linkStyle}><img src='images/googleicon.jpg' alt='' height={'30px'}/></a>
           </div>
           <div className="col-lg-3.3 col-md-2 col-sm-12 one">
            <img src="images/tanmoy.jpg" alt="img" height={'300px'}></img>
            <p><b>Tanmoy Sikdar,MSIT Connect With Us</b> <a href="#"></a></p>
            <a href='' style={linkStyle}><img src='images/linkedinicon.png' alt='' height={'30px'}/> </a>
            <a href='' style={linkStyle}><img src='images/fbicon.png' alt='' height={'30px'}/> </a>
            <a href='' style={linkStyle}><img src='images/insta_icon.jpg' alt='' height={'30px'}/></a>
            <a href='' style={linkStyle}><img src='images/googleicon.jpg' alt='' height={'30px'}/></a>
           </div>
        </div>
       </div>
      


      <>
       <footer className="footer">
       <div className="conatiner">
       <div className="row row-cols-4">
       <div className="col">
                <h4>Job Portal</h4>
                <ul>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Our services</a></li>
                  <li><a href="#">Privacy policy</a></li>
                  <li><a href="#">Affiliate program</a></li>
                </ul>
              </div>
              <div className="col">
                <h4>FAQ</h4>
                <ul>
                  <li><a href="#">Ask a Question</a></li>
                  <li><a href="#">Get help from an admin</a></li>
                  <li id="info9"><a href="#">Any question related to registration can be asked at info@jobportal.in .</a></li>
                </ul>
              </div>
              <div className="col">
                <h4>Founders</h4>
                <ul>
                <li><a href="#">Baivab Mukherjee</a></li>
                <li><a href="#">Sayan Ghosh</a></li>
                <li><a href="#">Sujoy Bera</a></li>
                <li><a href="#">Subhrojyoti Pyne</a></li>
                <li><a href="#">Tanmoy Sikdar</a></li>
                </ul>
              </div>
              <div className="col">
                <img src="/images/logo 3.png" alt="..." id="img8" />
              </div>
            </div>
          </div>
          <p id="last">For any queries related to our posted jobs, please reach out to us at partners@jobportal.in</p>
        </footer>
      </>
    </>
  );
};

export default About;
