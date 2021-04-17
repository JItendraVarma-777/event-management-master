import React, { Component } from 'react';
import img2 from '../.././assets/abc.jpg';
import './About.css';
import img3 from '../.././assets/dee.png';
import img4 from '../.././assets/kkk.png';
import img5 from '../.././assets/sss.png';
import img6 from '../.././assets/mmm.png';
class AboutUs extends Component {
  render() {
    return (
      <div className="primary2">
        <section id="team" className="pb-5">
          <div className="container">
            <h5 className="section-title h1 text-warning">OUR TEAM</h5>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip">
                  <div className="mainflip flip-0">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <img className=" img-fluid" src="" alt="card image" />
                          <h4 className="card-title">AAYUSHI GUPTHA</h4>
                          <p className="card-text">
                            Working admin login page and admin functionalities.
                          </p>
                          <a
                            href="https://www.fiverr.com/share/qb8D02"
                            className="btn btn-primary btn-sm"
                          >
                            <i className="fa fa-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">A4 DATA ANALYST</h4>
                          <p className="card-text"></p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="/"
                              >
                                <i className="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="/"
                              >
                                <i className="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="/"
                              >
                                <i className="fa fa-skype"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="/"
                              >
                                <i className="fa fa-google"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div
                  className="image-flip"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p>
                            <img
                              className=" img-fluid"
                              src={img3}
                              alt="card image"
                            />
                          </p>
                          <h4 className="card-title">P.DEEKSHITH</h4>
                          <p className="card-text">
                            Working on adding events for different festivals
                          </p>
                          <a
                            href="https://www.fiverr.com/share/qb8D02"
                            className="btn btn-primary btn-sm"
                          >
                            <i className="fa fa-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">A4 DATA ANALYST</h4>
                          <p className="card-text"></p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="https://m.facebook.com/Puvvadi-Deekshith"
                              >
                                <i className="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="https://twitter.com/PuvvadiDee1?s=09"
                              >
                                <i className="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="/"
                              >
                                <i className="fa fa-skype"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="/"
                              >
                                <i className="fa fa-google"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div
                  className="image-flip"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p>
                            <img
                              className=" img-fluid"
                              src={img2}
                              alt="card image"
                            />
                          </p>
                          <h4 className="card-title">CH.JITENDRA</h4>
                          <p className="card-text">
                            Working on user Registration for events
                          </p>
                          <a
                            href="https://www.fiverr.com/share/qb8D02"
                            className="btn btn-primary btn-sm"
                          >
                            <i className="fa fa-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">A4 DATA ANALYST</h4>
                          <p className="card-text"></p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="/"
                              >
                                <i className="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="https://twitter.com/Jitendrajittu67?s=08"
                              >
                                <i className="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="/"
                              >
                                <i className="fa fa-skype"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="/"
                              >
                                <i className="fa fa-google"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div
                  className="image-flip"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p>
                            <img
                              className=" img-fluid"
                              src={img5}
                              alt="card image"
                            />
                          </p>
                          <h4 className="card-title">M.SACHIN</h4>
                          <p className="card-text">
                            Working on Qr code and Payment .
                          </p>
                          <a
                            href="https://www.fiverr.com/share/qb8D02"
                            className="btn btn-primary btn-sm"
                          >
                            <i className="fa fa-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">A4 DATA ANALYST</h4>
                          <p className="card-text"></p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="/"
                              >
                                <i className="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="/"
                              >
                                <i className="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="/"
                              >
                                <i className="fa fa-skype"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="/"
                              >
                                <i className="fa fa-google"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div
                  className="image-flip"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p>
                            <img
                              className=" img-fluid"
                              src={img6}
                              alt="card image"
                            />
                          </p>
                          <h4 className="card-title">MOHAN KUMAR REDDY</h4>
                          <p className="card-text">
                            Working on event list and deletion of events.
                          </p>
                          <a
                            href="https://www.fiverr.com/share/qb8D02"
                            className="btn btn-primary btn-sm"
                          >
                            <i className="fa fa-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">A4 DATA ANALYST</h4>
                          <p className="card-text"></p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="/"
                              >
                                <i className="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="/"
                              >
                                <i className="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="/"
                              >
                                <i className="fa fa-skype"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="/"
                              >
                                <i className="fa fa-google"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div
                  className="image-flip"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p>
                            <img
                              className=" img-fluid"
                              src={img4}
                              alt="card image"
                            />
                          </p>
                          <h4 className="card-title">P.SURESH</h4>
                          <p className="card-text">
                            Working on User List and deletions the users
                          </p>
                          <a
                            href="https://www.fiverr.com/share/qb8D02"
                            className="btn btn-primary btn-sm"
                          >
                            <i className="fa fa-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">A4 DATA ANALYST</h4>
                          <p className="card-text"></p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="/"
                              >
                                <i className="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="/"
                              >
                                <i className="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="/"
                              >
                                <i className="fa fa-skype"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="/"
                              >
                                <i className="fa fa-google"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AboutUs;
