import React, { Component } from 'react';

export class footer extends Component {
  render() {
    return (
      <div className="footer1">
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <div className="grey-text text-lighten-4">
                  <h5>
                    THE GREATENESS OF THE CULTURE CAN BE FOUND IN ITS FESTIVAL
                  </h5>
                </div>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      HOME
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      ABOUT US{' '}
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      CAREERES
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              © 2014 Copyright Text
              <a className="grey-text text-lighten-4 right" href="#!">
                More Links
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default footer;
