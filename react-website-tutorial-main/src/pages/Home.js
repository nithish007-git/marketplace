import React from 'react';
import "./home.css";
import Image1 from './img.png';
import Imag2 from './img1.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
  <div>
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
    <div className="container-fluid heading1">
      <div className="heading">
        <h1 className=" head">
          {" "}
          <b>Virtual Market Place</b>
        </h1>
        <h2 className="para">Unleash the Power of Virtual Commerce</h2>
      </div>
      <img src={Image1} className="element" />
      <button
        type="button"
        className="btn btn-outline-primary sign btn-lg  "
        href="index.html"
      >
        <i className="bi bi-arrow-right" />
        SignUp
      </button>
    </div>
    {/* second sections */}
    <div className="container-fluid">
      <div className="ct">
        <div className="row">
          <div className="col colown1">
            <h2> Art-Protocol</h2>
            <h4 className="text-primary no1">
              {" "}
              <b>01</b>
            </h4>
            <h3 className="display-8 para2">
              {" "}
              Automate licensing &amp; monetization
            </h3>
            <h4 className="text-primary no1">
              {" "}
              <b>02</b>
            </h4>
            <h3 className="display-8 para2"> Get tokens as a bonus</h3>
            <h4 className="text-primary no1">
              {" "}
              <b>03</b>
            </h4>
            <h3 className="display-8 para2"> Promote your products</h3>
            <h4 className="text-primary no1">
              {" "}
              <b>04</b>
            </h4>
            <h3 className="display-8 para2"> Get the intial audience</h3>
          </div>
          <div className="col">
            <h5 className="pa">
              White-label solution for licensing products with IP rights
              verified <br />
              and managed on the Blockchain, tailored for creative, tech
              <br /> and luxury brands
            </h5>
            <h5 className="pa1">
              {" "}
              No commissions and free connections. Join the
              <span className="text-primary">
                <b> V-Art token program </b>
              </span>{" "}
              and receive okens as a 5% bonus for every transaction.
            </h5>
            <h5 className="pa2">
              {" "}
              Get your intial customer base on the
              <span className="text-primary"> APP .</span>{" "}
            </h5>
            <button className="btn btn-primary btn1"> Join Us</button>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="section">
        <div className="row">
          <div className="col">
            <h2 className="para4">
              {" "}
              <b>V-Art Immersion</b>
            </h2>
            <h4 className="para5"> Get your intial Users</h4>
          </div>
          <div className="col">
            <h4 className="para4">
              {" "}
              <b>
                Virtual and augmented reality experiences for
                <br />
                digital content and development services for{" "}
                <span className="text-primary">
                  AR <br />
                  and VR mobile apps.
                </span>
              </b>
            </h4>
          </div>
        </div>
        <img src={Imag2} className="imag1" />
        <div className="container-fluid fli"></div>
      </div>
    </div>
    <div className="rec">
      <h4 className="head1"> Key Features</h4>
      <button type="button" className="btn btn-secondary btn-sm bt" disabled="">
        Users
      </button>
      <button type="button" className="btn btn-secondary btn-sm bt" disabled="">
        fame
      </button>
      <button type="button" className="btn btn-secondary btn-sm bt" disabled="">
        Exposure
      </button>
      <button type="button" className="btn btn-secondary btn-sm bt" disabled="">
        recognition
      </button>
      <button
        type="button"
        className="btn btn-secondary btn-sm bt1"
        disabled=""
      >
        recognition
      </button>
      <button
        type="button"
        className="btn btn-secondary btn-sm bt1"
        disabled=""
      >
        recognition
      </button>
      <button
        type="button"
        className="btn btn-secondary btn-sm bt1"
        disabled=""
      >
        recognition
      </button>
    </div>
    <div className="rec1">
      <h4 className="head1"> Growth</h4>
      <button type="button" className="btn btn-secondary btn-sm bt" disabled="">
        Users
      </button>
      <button type="button" className="btn btn-secondary btn-sm bt" disabled="">
        fame
      </button>
      <button type="button" className="btn btn-secondary btn-sm bt" disabled="">
        Exposure
      </button>
      <button type="button" className="btn btn-secondary btn-sm bt" disabled="">
        recognition
      </button>
      <button
        type="button"
        className="btn btn-secondary btn-sm bt1"
        disabled=""
      >
        recognition
      </button>
      <button
        type="button"
        className="btn btn-secondary btn-sm bt1"
        disabled=""
      >
        recognition
      </button>
      <button
        type="button"
        className="btn btn-secondary btn-sm bt1"
        disabled=""
      >
        recognition
      </button>
    </div>
    <div className="rec2">
      <h4 className="head1"> keys</h4>
      <button type="button" className="btn btn-secondary btn-sm bt" disabled="">
        Users
      </button>
      <button type="button" className="btn btn-secondary btn-sm bt" disabled="">
        fame
      </button>
      <button type="button" className="btn btn-secondary btn-sm bt" disabled="">
        Exposure
      </button>
      <button type="button" className="btn btn-secondary btn-sm bt" disabled="">
        recognition
      </button>
      <button
        type="button"
        className="btn btn-secondary btn-sm bt1"
        disabled=""
      >
        recognition
      </button>
      <button
        type="button"
        className="btn btn-secondary btn-sm bt1"
        disabled=""
      >
        recognition
      </button>
      <button
        type="button"
        className="btn btn-secondary btn-sm bt1"
        disabled=""
      >
        recognition
      </button>
      <button className="btn btn-primary btn1">Learn More</button>
    </div>
  </div>
  {/* <footer>
    <div className="container-fluid footer">
      <div className="card">
        <div className="box1">
          <img src="Component.png" className="img12" />
          <h2 className="brand">
            {" "}
            <b>
              Virtual Market <span style={{ color: "#ae05c1" }}>place</span>
            </b>
          </h2>
          <ol className="text1">
            <li>
              <a>About us </a>
            </li>
            <li>
              <a>privacy Policy</a>
            </li>
            <li>
              <a>Terms of use</a>
            </li>
            <li>
              <a>What we offer</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </footer> */}
</>

  )
}

export default Home