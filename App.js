import "./App.css";
import {FaHtml5 } from "react-icons/fa";
import {FaMusic} from "react-icons/fa";
import { FaGamepad} from "react-icons/fa";
import { FaBullhorn} from "react-icons/fa";
import {FaTachometerAlt } from "react-icons/fa";
import { FaArrowDown} from "react-icons/fa";
import { FaChartLine} from "react-icons/fa";
import { FaRocket} from "react-icons/fa";
import {FaHeadphonesAlt } from "react-icons/fa";
import {FaTrophy} from "react-icons/fa";
import {FaLightbulb } from "react-icons/fa";
import {FaFlag } from "react-icons/fa";
import {FaLeanpub } from "react-icons/fa";
import {FaCode} from "react-icons/fa";
import {FaSmile} from "react-icons/fa";
import {FaBicycle } from "react-icons/fa";
import { FaMapMarkerAlt} from "react-icons/fa";
import { FaPhoneAlt} from "react-icons/fa";
import {FaAt } from "react-icons/fa";
import { FaCalendarCheck} from "react-icons/fa";
import {FaArrowRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration:1000
});
function App() {
  return (
    <>
      <div className="App">
        <nav className="navbar navbar-expand-lg bg-dark py-0">
          <div className="container-fluid">
            <a className="navbar-brand text-light py-0">RAMISH ALI</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <form className="d-flex py-0">
              <button className="btn btn-outline-success" >
                Buy now
              </button>
            </form>
          </div>
        </nav>
        <div className="main-image">
          <div className="text-div">
            <h1 className="title">
              <span>Ramish </span>Ali 
            </h1>
          </div>
          {/* <div className="subtitle">
            I am
            <div className="typing-title">
              <p>
                a <strong>web developer.</strong>
              </p>
              <p>
                a <strong>blogger.</strong>
              </p>
              <p>
                a <strong>freelancer.</strong>
              </p>
              <p>
                a <strong>photographer.</strong>
              </p>
            </div>
            <span className="typed-title"></span>
          </div> */}
        </div>

      
        <div className="text">
          <p className="bio">
            <strong>Hello, I’m a Ramish</strong>
            web-developer based on Lahore.
            <br />
            I have a rich experience in web site design & building
            <br />
            and customization. Also i am good at
            <strong>
              html,css,
              <br />
              bootsrap,javacript,react,angular.
            </strong>
          </p>

          <div className="circle-bts">
            <a className="btn" >
              <span>
              <FaArrowDown/>Download CV
              </span>
            </a>
            <a className="btn" >
            <i class="fa-brands fa-github"></i>
            </a>
            <a className="btn" >
            <i class="fa-brands fa-stack-overflow"></i>
            </a>
            <a className="btn" >
            <i class="fa-brands fa-skype"></i>
            </a>
          </div>
        </div>
      
        <div>
          <h1 className="label"> <span>
            Our </span> Services</h1>
          <div className="row justify-content-center service-items">
            <div className="card service-item col-md-5 col-s " data-aos="zoom-out-down">
              <div className="card-body">
                <div className="icon"> <FaHtml5/></div>
                <h5 className="name">Web Development</h5>
                <p className="card-text">
                  Modern and mobile-ready website that will help of your
                  marketing.
                </p>
              </div>
            </div>

              <div className="card service-item col-md-5 col-s" data-aos="zoom-out-down">
                <div className="card-body">
                <div className="icon"><FaMusic/></div>
                  <h5 className="name">Writing</h5>
                  <p className="card-text">
                    Copying, transcription, arranging and composition
                    Services.
                  </p>
                </div>
              </div>

          </div>
          <div className="row justify-content-center service-items">
              <div className="card service-item col-md-5 col-s" data-aos="zoom-out-down">
                <div className="card-body">
                  <div className="icon"><FaBullhorn/></div>
                  <h5 className="name">Advertising</h5>
                  <p className="card-text">
                    Advertising services include television, radio, print, mail
                    and web.
                  </p>
                </div>
              </div>

            <div className="card service-item col-md-5 col-s" data-aos="zoom-out-down">
              <div className="card-body">
                <div className="icon"><FaGamepad/></div>
                <h5 className="name">Game Development</h5>
                <p className="card-text">
                  Developing memorable and unique mobile android, ios games.
                </p>
              </div>
            </div>
            </div>

          <div className="row justify-content-center service-items" >
              <div className="card service-item col-md-5 col-s" data-aos="zoom-out-down">
                <div className="card-body">
                  <div className="icon"><FaChartLine/></div>
                  <h5 className="name">Analytics</h5>
                  <p className="card-text">
                  Basic, advanced, custom implementations and online media
                  analysis.
                  </p>
                </div>
              </div>

            <div className="card service-item col-md-5 col-s" data-aos="zoom-out-down">
              <div className="card-body">
                <div className="icon"><i class="fa-sharp fa-solid fa-camera-retro"></i></div>
                <h5 className="name">Hosting</h5>
                <p className="card-text">
                Full-day or half-day photo shoots with all necessary
                    equipment.
                </p>
              </div>
            </div>
            </div>

        </div>
        {/* content pricing */}

        <div>
          <h1 className="label">
            <span>Pricing </span>Tables
          </h1>

          <div className="row justify-content-center">
            <div className="card col-md-5  col-s " data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
              <div className="card-body">
                <div className="icon"><FaTachometerAlt/></div>
                <h5 className="name">BASIC</h5>
                <div className="amount">
                  <span className="dollor">$</span>
                  <span className="price">22</span>
                  <span className="period">hour</span>
                </div>

                <div className="Feautre List">
                  <ul className="edit">
                    <li >Web Developmet</li>
                    <li>Advertising</li>
                    <li>Game Development</li>
                    <li className="disable">Story Writing</li>
                    <li className="disable">
                      Photography <strong>new</strong>
                    </li>
                  </ul>
                </div>

                <div className="links">
                  <a  className="lnk">
                    Buy <strong>Basic</strong>
                  </a>
                </div>
              </div>
            </div>

            <div className="card col-md-5  col-s" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
              <div className="card-body">
                <div className="icon"><FaRocket/></div>
                <h5 className="name">PRO</h5>
                <div className="amount">
                  <span className="dollor">$</span>
                  <span className="price">48</span>
                  <span className="period">hour</span>
                </div>

                <div className="Feautre List">
                  <ul className="edit">
                    <li >Web Developmet</li>
                    <li >Advertising</li>
                    <li className="edit">Game Development</li>
                    <li className="edit">Story Writing</li>
                    <li>
                      Photography <strong>new</strong>
                    </li>
                  </ul>
                </div>

                <div className="links">
                  <a  className="lnk">
                    Buy <strong>Pro</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* fun facts */}

        <div className="content fact">
          <h1 className="label">
            <span>Fun </span>Facts
          </h1>

          <div className="row justify-content-center">
            <div className="card col-md-2  col-s" data-aos="fade-down">
              <div className="card-body">
                <div className="icon"><FaHeadphonesAlt/></div>
                <div className="name">47 Albumes Listened</div>
              </div>
            </div>

            <div className="card col-md-2  col-s" data-aos="fade-down">
              <div className="card-body">
                <div className="icon"><FaTrophy/></div>
                <div className="name">Awards Won</div>
              </div>
            </div>

            <div className="card col-md-2  col-s" data-aos="fade-down">
              <div className="card-body">
                <div className="icon"><FaLightbulb/></div>
                <div className="name">20 Projects Completed</div>
              </div>
            </div>

            <div className="card col-md-2  col-s" data-aos="fade-down">
              <div className="card-body">
              <div className="icon"><FaFlag/></div>  
              <div className="name">Countries Visited</div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="card col-md-2  col-s" data-aos="fade-down">
              <div className="card-body">
                <div className="icon"><FaLeanpub/></div>
                <div className="name">50+ Books Readed</div>
              </div>
            </div>

            <div className="card col-md-2  col-s" data-aos="fade-down">
              <div className="card-body">
                <div className="icon"><FaCode/></div>
                <div className="name">10000 Lines of Code</div>
              </div>
            </div>

            <div className="card col-md-2  col-s" data-aos="fade-down">
              <div className="card-body">
                <div className="icon"><FaSmile/></div>
                <div className="name">Satisfied Customers</div>
              </div>
            </div>

            <div className="card col-md-2  col-s" data-aos="fade-down">
              <div className="card-body">
                <div className="icon"><FaBicycle/></div>
                <div className="name">1250 km Cycled</div>
              </div>
            </div>
          </div>
        </div>

        {/* my portfolio */}

        <div className="content portfolio">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <h1 className="label">
                <span>My </span>Experience
              </h1>
              <div className="card  text-center" data-aos="fade-right">
                <div className="card-body about">
                  <div className="name">Web Development</div>
                  <div className="date">
                    <span>2022-2023 </span>|<span>INNOVATION.TECH</span>
                  </div>
                  <p>
                    Collaborate with creative and development teams on the
                    execution of ideas.
                  </p>
                  <hr />

                  <div className="name">Front-end Developer</div>
                  <div className="date">
                    <span>Aug-Jan  </span>|<span>NNOVATION.TECH</span> 
                  </div>
                  <p>
                    Monitored technical aspects of the front-end delivery for
                    several projects.
                  </p>
                  <hr />

                  <div className="name">Senior Developer</div>
                  <div className="date">
                    <span>Aug-Jan </span>|<span>NNOVATION.TECH</span>
                  </div>
                  <p>Optimize website performance using latest technology.</p>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <h1 className="label">
                <span>My </span>Education
              </h1>
              <div className="card " data-aos="fade-left">
                <div className="card-body  about">
                  <div className="name ">BSIT</div>
                  <div className="date">
                    <span>2022-2026 </span>|<span>Lahore</span>
                  </div>
                  <p>
                    Bachelor's Degree in Information Technology from Govt. Islamia College,Civillines
                  </p>
                  <hr />

                  <div className="name">INTERMEDIATE(F.S.C)</div>
                  <div className="date">
                    <span>2020-2022 </span>|<span>Lahore</span>
                  </div>
                  <p>
                    Bachelor's Degree in Computer Science ABC Technical
                    Institute, Jefferson, Missouri.
                  </p>
                  <hr />

                  <div className="name">Matric</div>
                  <div className="date">
                    <span>2018-2020 </span>|<span>Lahore</span>
                  </div>
                  <p>Converted Photoshop layouts to web pages using HTML, CSS, and JavaScript</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* skills */}
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="label">
              <span>Personal </span> Skills
            </div>
            <div className="card " data-aos="fade-right">
              <div className="card-body">
                Communication
                <div className="progress">
                  <div
                    className="progress-bar w-75"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                Team Work
                <div className="progress">
                  <div
                    className="progress-bar w-50"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                Leadership
                <div className="progress">
                  <div
                    className="progress-bar w-25"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                Language
                <div className="progress">
                  <div
                    className="progress-bar w-75"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="label ">
              <span>Professionsal </span> Skills
            </div>
            <div className="card " data-aos="fade-left">
              <div className="card-body">
                <div className="name">HTML / CSS</div>
                <div className="progress">
                  <div
                    className="progress-bar w-75"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>

                <div className="name">JS</div>
                <div className="progress">
                  <div
                    className="progress-bar w-75 "
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="name">Bootstrap</div>
                <div className="progress">
                  <div
                    className="progress-bar w-100"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>Angular
                <div className="name"> </div>
                <div className="progress">
                  <div
                    className="progress-bar w-50"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* my portfolio */}

        <div className="row justify-content-center">
        <div className="label ms-5">
              <span>My </span> Portfolio
            </div>
          <div className="col-md-5">
            <div className="card " data-aos="zoom-out">
              <div className="card-body">
                <div className="image">
                  <a href="https://bslthemes.com/html/patrick/images/works/work1.jpg">
                    <img
                      src="https://bslthemes.com/html/patrick/images/works/work1.jpg"
                      alt=""
                      className="card-img-top"
                    />
                    <span className="info-icon">
                      <span></span>
                    </span>
                  </a>
                </div>
                <div className="des">
                  <a
                    href="https://bslthemes.com/html/patrick/images/works/work1.jpg"
                    className="name"
                  >
                    Motorcycle Helmet
                  </a>
                  <div className="category">Photo</div>
                </div>
              </div>
            </div>

            <div className="card" data-aos="zoom-out">
              <div className="card-body">
                <div className="image">
                  <a href="https://bslthemes.com/html/patrick/images/works/work4.jpg">
                    <img
                      src="https://bslthemes.com/html/patrick/images/works/work4.jpg"
                      alt=""
                      className="card-img-top"
                    />
                    <span className="info-icon">
                      <span></span>
                    </span>
                  </a>
                </div>
                <div className="des">
                  <a
                    href="https://bslthemes.com/html/patrick/images/works/work4.jpg"
                    className="name"
                  >
                    Mobile Application
                  </a>
                  <div className="category">design</div>
                </div>
              </div>
            </div>

            <div className="card" data-aos="zoom-out">
              <div className="card-body">
                <div className="image">
                  <a href="https://bslthemes.com/html/patrick/images/works/work8.jpg ">
                    <img
                      src="https://bslthemes.com/html/patrick/images/works/work8.jpg"
                      alt="wlq"
                      className="card-img-top"
                    />
                    <span className="info-icon">
                      <span ></span>
                    </span>
                  </a>
                </div>
                <div className="des">
                  <a
                    href="https://bslthemes.com/html/patrick/images/works/work8.jpg"
                    className="name"
                  >
                    Daylight Entrance
                  </a>
                  <div className="category">Music</div>
                </div>
              </div>
            </div>

            <div className="card" data-aos="zoom-out">
              <div className="card-body">
                <div className="image">
                  <a href="https://bslthemes.com/html/patrick/images/works/work7.jpg">
                    <img
                      src="https://bslthemes.com/html/patrick/images/works/work7.jpg"
                      alt=""
                      className="card-img-top"
                    />
                    <span className="info-icon">
                      <span className="fa-regular fa-camera-retro"></span>
                    </span>
                  </a>
                </div>
                <div className="des">
                  <a
                    href="https://bslthemes.com/html/patrick/images/works/work7.jpg"
                    className="name"
                  >
                    Social Website
                  </a>
                  <div className="category">Design</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-5 ">
            <div className="card " data-aos="zoom-out">
              <div className="card-body">
                <div className="image">
                  <a href="https://bslthemes.com/html/patrick/images/works/work2.jpg">
                    <img
                      src="https://bslthemes.com/html/patrick/images/works/work2.jpg"
                      alt=""
                      className="card-img-top"
                    />
                    <span className="info-icon">
                      <span ></span>
                    </span>
                  </a>
                </div>
                <div className="des">
                  <a
                    href="https://bslthemes.com/html/patrick/images/works/work2.jpg"
                    className="name"
                  >
                    Minimalism Shapes
                  </a>
                  <div className="category">Video</div>
                </div>
              </div>
            </div>

            <div className="card" data-aos="zoom-out">
              <div className="card-body">
                <div className="image">
                  <a href="https://bslthemes.com/html/patrick/images/works/work3.jpg">
                    <img
                      src="https://bslthemes.com/html/patrick/images/works/work3.jpg"
                      alt=""
                      className="card-img-top"
                    />
                    <span className="info-icon">
                      <span ></span>
                    </span>
                  </a>
                </div>
                <div className="des">
                  <a
                    href="https://bslthemes.com/html/patrick/images/works/work3.jpg"
                    className="name"
                  >
                    Stair Case
                  </a>
                  <div className="category">Music</div>
                </div>
              </div>
            </div>

            <div className="card" data-aos="zoom-out">
              <div className="card-body">
                <div className="image">
                  <a href="https://bslthemes.com/html/patrick/images/works/work5.jpg">
                    <img
                      src="https://bslthemes.com/html/patrick/images/works/work5.jpg"
                      alt=""
                      className="card-img-top"
                    />
                    <span className="info-icon">
                      <span ></span>
                    </span>
                  </a>
                </div>
                <div className="des">
                  <a
                    href="https://bslthemes.com/html/patrick/images/works/work5.jpg"
                    className="name"
                  >
                    Gereal Travels
                  </a>
                  <div className="category">Photo</div>
                </div>
              </div>
            </div>

            <div className="card" data-aos="zoom-out">
              <div className="card-body">
                <div className="image">
                  <a href="https://bslthemes.com/html/patrick/images/works/work6.jpg">
                    <img
                      src="https://bslthemes.com/html/patrick/images/works/work6.jpg"
                      alt=""
                      className="card-img-top"
                    />
                    <span className="info-icon">
                      <span ></span>
                    </span>
                  </a>
                </div>
                <div className="des">
                  <a
                    href="https://bslthemes.com/html/patrick/images/works/work6.jpg"
                    className="name"
                  >
                    Architecture
                  </a>
                  <div className="category">Video</div>
                </div>
              </div>
            </div>
          </div>
          {/* my blog */}
          <div className="my blog justify-content-center">
            <div className="label ms-5 mb-3"><span>My </span>Blog</div>
            <div className="card " data-aos="fade-up"
                data-aos-anchor-placement="center-center">
              <div className="card-body">
                <div className="image">
                  <a >
                  <img src="https://bslthemes.com/html/patrick/images/blog/blog1.jpg" alt="" className="photo "/>
                  <span className="icon-info">
                    <span></span>
                  </span>
                  <span className="blog-date"><strong>20</strong> <br/>Jan</span></a>
                </div>

                <div className="des">
                  <p className="name">By spite about do of do allow blush</p>
                  <div className="category">Design</div>
                </div>
              </div>

            </div>  

            <div className="card " data-aos="fade-up"
              data-aos-anchor-placement="center-center">
              <div className="card-body">
                <div className="image">
                  <a >
                  <img src="https://bslthemes.com/html/patrick/images/blog/blog2.jpg" alt="" className="photo" />
                  <span className="icon-info">
                    <span></span>
                  </span>
                  <span className="blog-date"><strong>19</strong> <br/> Jan</span></a>
                </div>

                <div className="des">
                  <p className="name">Two Before Arrow Not Relied</p>
                  <div className="category">Coding</div>
                </div>  
              </div>

            </div>


            <div className="card " data-aos="fade-up"
              hrefdata-aos-anchor-placement="center-center">
              <div className="card-body ">
                <div className="image">
                  <a >
                  <img src="https://bslthemes.com/html/patrick/images/blog/blog3.jpg" alt="" className="photo" />
                  <span className="icon-info">
                    <span></span>
                  </span>
                  <span className="blog-date"><strong>20</strong> <br/> Jan</span></a>
                </div>

                <div className="des">
                  <p className="name">By spite about do of do allow blush</p>
                  <div className="category">Travel</div>
                </div>
              </div>

            </div>

          </div>

          {/* contact */}
          <div className="my contact">
            <div className="row justify-content-center">
              <div className="label ms-3">
                <span>Get </span> in Touch
              </div>
              <div className="col-md-5">
                <div className="card" data-aos="fade-right"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="500">
                  <div className="row card-body">
                    <div className="col-md-2 icon"><FaMapMarkerAlt/></div>
                    <div className="col-md-2 name"><div className="row">Address</div>
                    <p className="row">Lahore,Pakistan.</p></div>
                  </div>
                </div>

                <div className="card" data-aos="fade-right"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="500">
                  <div className="row card-body">
                    <div className="col-md-2 icon"><FaPhoneAlt/></div>
                    <div className="col-md-2 name"><div>Phone</div>
                    <p className="row">+923044205287</p></div>
                  </div>
                </div>
              </div>

              <div className="col-md-5">
                <div className="card" data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="500">
                  <div className="row card-body">
                    <div className="col-md-2 icon"><FaAt/></div>
                    <div className="col-md-2 name"><div>Email</div>
                    <p className="row">gateman597@gmail.com</p></div>
                  </div>
                </div>

                <div className="card" data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="500">
                  <div className="row card-body">
                    <div className="col-md-2 icon"><FaCalendarCheck/></div>
                    <div className="col-md-2 name"><div className="row">Freelance</div>
                    <p className="row">Available</p></div>
                  </div>
                </div>
              </div>

            </div>

            <div className="row contact justify-content-center">
              <div className="label"><span>Contact </span>Form</div>
              <div className="card me-5">
                <div className="card-body">
                  <form>
                    <div className="row justify-content-center me  " >
                      <input
                        className="col-md-4 w-5"
                        type="text"
                        placeholder="Full Name"
                      />
                      <input
                        className="col-md-4 w-5 ms-5"
                        type="text"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="row justify-content-center  ">
                      <div className="col-md-9">
                    <textarea
                      className="textarea "
                      placeholder="
                  Message"
                    ></textarea>
                    </div>
                    </div>
            
                    <div className="align-left">
                      <a
                        
                        className="button"
                        onclick="$('#cform').submit(); return false;"
                      >
                        <span className="text">Send Message<FaArrowRight/></span>
                        <span className="icon">
                          <i className="la la-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
