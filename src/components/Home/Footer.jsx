import React, { Component } from 'react'

export class footer extends Component {
    render() {
        return (
            <div className="footer1">
                <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4"><h5>THE GREATENESS OF THE CULTURE CAN BE FOUND IN ITS FESTIVAL</h5></p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">HOME</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">ABOUT US </a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">CAREERES</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">CONTACT</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
            </div>
        )
    }
}

export default footer
