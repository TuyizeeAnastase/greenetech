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
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed velit temporibus aspernatur debitis corporis? Iste tempore incidunt reprehenderit, ab libero beatae suscipit nam corrupti, odio dolor at commodi praesentium quis.
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cum a repudiandae beatae rem accusantium facilis earum facere similique exercitationem.
                      </p>
                      <p class="text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus accusantium harum consectetur dolor corporis recusandae dolore enim, in nihil aperiam.
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