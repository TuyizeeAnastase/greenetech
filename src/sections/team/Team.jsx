import React,{Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './team.css'
import lawyer from '../../images/lawyer.jpeg';
import dev from '../../images/devs.jpg'
import finance from '../../images/finance.jpeg';
import profile from '../../images/profile.jpeg';

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
                              <img src={profile} alt="" style={{height:'17rem',width:'15rem'}} class="img-responsive"/>
                              <ul>
                              <a href="/#" ><li><i class="fa fa-facebook" style={{position:'absolute',marginLeft:'-6px'}} ></i></li></a>
                               <a href="/#"><li><i class="fa fa-twitter" style={{position:'absolute',marginLeft:'-6px'}}></i></li></a> 
                               <a href="/#"><li><i class="fa fa-linkedin" style={{position:'absolute',marginLeft:'-6px'}}></i></li></a>   
                              </ul>
                          </div>
                          <h2>Emmanuel TUYIZERE</h2>
                          <h3>Founder / CEO</h3>
                      </div>
                      <div class="col-md-3 profile text-center">
                          <div class="img-box">
                              <img src={finance} alt="" style={{height:'17rem',width:'15rem'}} class="img-responsive"/>
                              <ul>
                              <a href="/#" ><li><i class="fa fa-facebook" style={{position:'absolute',marginLeft:'-6px'}} ></i></li></a>
                               <a href="/#"><li><i class="fa fa-twitter" style={{position:'absolute',marginLeft:'-6px'}}></i></li></a> 
                               <a href="/#"><li><i class="fa fa-linkedin" style={{position:'absolute',marginLeft:'-6px'}}></i></li></a>   
                              </ul>
                          </div>
                          <h2>Cloudine MUKAMANA</h2>
                          <h3>Finance Manager</h3>
                      </div>
                      <div class="col-md-3 profile text-center">
                          <div class="img-box">
                              <img src={lawyer} alt="" style={{height:'17rem',width:'15rem'}} class="img-responsive"/>
                              <ul>
                               <a href="/#" ><li><i class="fa fa-facebook" style={{position:'absolute',marginLeft:'-6px'}} ></i></li></a>
                               <a href="/#"><li><i class="fa fa-twitter" style={{position:'absolute',marginLeft:'-6px'}}></i></li></a> 
                               <a href="/#"><li><i class="fa fa-linkedin" style={{position:'absolute',marginLeft:'-6px'}}></i></li></a>    
                              </ul>
                          </div>
                          <h2>Grace K. UWASE</h2>
                          <h3>Lawyer</h3>
                      </div>
                      <div class="col-md-3 profile text-center">
                          <div class="img-box">
                              <img src={dev} alt="" class="img-responsive"/>
                              <ul>
                               <a href="/#" ><li><i class="fa fa-facebook" style={{position:'absolute',marginLeft:'-6px'}} ></i></li></a>
                               <a href="/#"><li><i class="fa fa-twitter" style={{position:'absolute',marginLeft:'-6px'}}></i></li></a> 
                               <a href="/#"><li><i class="fa fa-linkedin" style={{position:'absolute',marginLeft:'-6px'}}></i></li></a>  
                              </ul>
                          </div>
                          <h2>Anastase TUYIZERE</h2>
                          <h3>Web Developer</h3>
                      </div>
                  </div>
              </div>
          </div>
        )
    }
}

export default Team