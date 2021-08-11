import React,{Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './team.css'
import img1 from './profile.jpg';

class Team extends Component
{
    render(){
        return(
          <div class="team">
              <h1>OUR TEAM</h1>
              <div class="container">
                  <div class="row">
                      <div class="col-md-3 profile text-center">
                          <div class="img-box">
                              <img src={img1} alt="" class="img-responsive"/>
                              <ul>
                               <a href="/#"><li><i class="fa fa-facebook"></i></li></a>
                               <a href="/#"><li><i class="fa fa-twitter"></i></li></a> 
                               <a href="/#"><li><i class="fa fa-linkedin"></i></li></a>  
                              </ul>
                          </div>
                          <h2>Emmanuelle Tuyizere</h2>
                          <h3>Founder / CEO</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, vero!</p>
                      </div>
                      <div class="col-md-3 profile text-center">
                          <div class="img-box">
                              <img src={img1} alt="" class="img-responsive"/>
                              <ul>
                               <a href="/#"><li><i class="fa fa-facebook"></i></li></a>
                               <a href="/#"><li><i class="fa fa-twitter"></i></li></a> 
                               <a href="/#"><li><i class="fa fa-linkedin"></i></li></a>  
                              </ul>
                          </div>
                          <h2>Emmanuelle Tuyizere</h2>
                          <h3>Founder / CEO</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, vero!</p>
                      </div>
                      <div class="col-md-3 profile text-center">
                          <div class="img-box">
                              <img src={img1} alt="" class="img-responsive"/>
                              <ul>
                               <a href="/#"><li><i class="fa fa-facebook"></i></li></a>
                               <a href="/#"><li><i class="fa fa-twitter"></i></li></a> 
                               <a href="/#"><li><i class="fa fa-linkedin"></i></li></a>  
                              </ul>
                          </div>
                          <h2>Emmanuelle Tuyizere</h2>
                          <h3>Founder / CEO</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, vero!</p>
                      </div>
                      <div class="col-md-3 profile text-center">
                          <div class="img-box">
                              <img src={img1} alt="" class="img-responsive"/>
                              <ul>
                               <a href="/#"><li><i class="fa fa-facebook"></i></li></a>
                               <a href="/#"><li><i class="fa fa-twitter"></i></li></a> 
                               <a href="/#"><li><i class="fa fa-linkedin"></i></li></a>  
                              </ul>
                          </div>
                          <h2>Emmanuelle Tuyizere</h2>
                          <h3>Founder / CEO</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, vero!</p>
                      </div>
                  </div>
              </div>
          </div>
        )
    }
}

export default Team