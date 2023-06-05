import React from 'react';
import "./contact.css";
import { Link } from 'react-router-dom';


const Contact = () => {
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
                Artsians
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
 
  <div className="container-fluid sec-1">
    <div>
      <h2 className="books">
        <b>
          {" "}
          List of <span style={{ color: "rgb(161, 19, 130)" }}>books</span>
        </b>
      </h2>
    </div>
    <div className="cards ">
      <div className="card mb-3" style={{ maxWidth: 540 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="data:image/png;base64,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"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Positive Dog </h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 9 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
 
    </div>
    <div className="cards-1">
      <div className="card mb-3" style={{ maxWidth: 540 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="data:image/png;base64,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"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Positive Dog </h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 9 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
 
    </div>
  </div>
</>

    </div>
  )
}

export default Contact