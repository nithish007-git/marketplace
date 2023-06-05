import React from 'react';
import './arts.css';
import { Link } from 'react-router-dom';

const Arts = () => {
  return (
    <div>
        <>

        <nav className="navbar navbar-expand-lg  bg-dark white fixed-top">
      <div className="container-fluid">

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu">
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
              
              >
                <Link to='/'> Home</Link>
               
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-light" >
              <Link to='/menu'> 
                Signin
                </Link>
              </a>
            </li>
           
            <li className="nav-item">
              <a className="nav-link  text-light">
              <Link to='/about'> signup</Link>
               
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-light">
              <Link to='/contact'> books</Link>
               
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-light">
              <Link to='/arts'> arts</Link>
               
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary me-3" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>


  <div className="container-fluid sec1">
    <h2 className="text">
      {" "}
      list of<span style={{ color: "#a11382" }}> Arts</span>{" "}
    </h2>
    <div className="card text-bg-dark cards1">
      <img
        src="https://i.pinimg.com/564x/45/71/71/457171f724dc39d735248f333fac779e.jpg"
        className="card-img"
        alt="..."
      />
      <div className="card-img-overlay">
        <h5 className="card-title text-dark">Art 1</h5>
      </div>
    </div>
    <div className="card text-bg-dark cards2">
      <img
        src="https://i.pinimg.com/564x/45/71/71/457171f724dc39d735248f333fac779e.jpg"
        className="card-img"
        alt="..."
      />
      <div className="card-img-overlay">
        <h5 className="card-title text-dark">Art 2</h5>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default Arts