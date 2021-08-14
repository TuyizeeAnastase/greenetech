import React,{Component} from 'react';
import './about.css'
import company from './logo1.png';

class About extends Component{
    render(){
        return(
        <div className="about">
          <div class="container">
              <div class="row">
                  <div class="col-md-5">
                      <div class="about-img">
                          <img class="man" src={company} alt="" />
                      </div>
                  </div>
                  <div class="col-md-7 about-right">
                      <h2 class="color-3"><b>About Us</b></h2>
                      <p class="p-first text-white">
                      To promote and ensure the protection of the environment and sustainable management of natural resources through decentralized structures of governance and seek national position to emerging global issues with a view to enhancing the well-being of the Rwandan people.
                      </p>
                      <p class="text-white">
                      All sectors of the Rwandan Society value and undertake sound environmental management and rational use of natural resources in order to contribute to the national aspirations for sustainable development.
                      </p>
                      <h3 class="color-3 social-link-text">
                          <button class="btn btn-danger">Get Started</button>
                      </h3>
                      <div className="social-links">
                            <a href="/#"><i class="fab fa-facebook-f"></i></a>
                            <a href="/#"><i class="fab fa-twitter"></i></a>
                            <a href="/#"><i class="fab fa-instagram"></i></a>
                            <a href="/#"><i class="fab fa-linkedin"></i></a>
                            <a href="/#"><i class="fab fa-youtube"></i></a>
                        </div>
                  </div>
              </div>
          </div>  
          </div>
        )
    }
}
export default About;