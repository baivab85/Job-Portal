import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getUsers } from "../service/api";

const SearchJob = () => {
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    getAllUsers();
    checkLoggedIn();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const checkLoggedIn = () => {
    const loggedInUser = localStorage.getItem("username");
    if (loggedInUser) {
      setIsLoggedIn(true);
      setUsername(loggedInUser);
    } else {
      setIsLoggedIn(false);
      setUsername('');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUsername('');
    localStorage.clear();
    window.location.reload();
  };
  const logout=()=>{
    localStorage.clear();
    window.location.reload();
}
  return (
    <>
      
      <div className="fixed-top">

        {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Job Portal 
          <button style={{marginLeft:'1260px',backgroundColor:'black',color:'wheat'}} onClick={handleLogout}>Logout</button>
          </a>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
               
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {isLoggedIn ? (
                    <li>
                      
                    </li>
                  ) : (
                    <>
                      <li>
                        <a className="dropdown-item" href="/Registration"></a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/ad-log"></a>
                      </li>
                    </>
                  )}
                </ul>
              </li>
            </ul>
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
    
      <div className="card_body" style={{backgroundColor:'white',height:'650px',width:'100%'}}>
         
      {users.map((user, index) => (
    <div key={index} className="cards" style={{ height: '290px', width: '360px', backgroundColor: 'white', marginLeft: '110px', marginTop: '30px', float: 'left' }}>
        <br />
        <p><img src={`http://localhost:8000/uploads/${user.image}`} alt='image' height='110px' style={{ border: '60px' }} /></p>
        <h5 style={{ marginLeft: '7px' }}>Company: {user.cname}</h5>
        <h6 style={{ marginLeft: '7px' }}>Contact: {user.mobile}</h6>
        <h6 style={{ marginLeft: '7px' }}>Job Details: {user.address}</h6>
        
            <NavLink to={user.adate} className={'nav'}><button style={{ height: '34px', backgroundColor: 'black', color: 'white', marginLeft: '120px' }}>  Apply </button></NavLink>
        
    </div>
))}

        
      </div>
    
      <footer className="footer">
        <div className="container">
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
   )

}
  

export default SearchJob;
