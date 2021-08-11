import React,{Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import body from './bodyG.png';
import './header.css';

class Header extends Component
{
    render(){
        return(
          <div>
              <nav class="fixed-nav-bar">
                <div id="menu" class="menu">
                    <a class="sitename" href="/#">GreenTech</a>
                    <a class="show" href="#menu">Menu</a><a class="hide" href="#hidemenu">Menu</a>
                    <ul class="menu-items">
                       <li><a href="/#">Home</a></li>
                       <li><a href="/#about">About</a></li>
                       <li><a href="/#contact">Contact</a></li>
                      <li><a href="/#services">services</a></li>
                      <li><a href="/#works">Works</a></li>
                      <li><a href="/#team">Team</a></li>
                    </ul>
                </div>
            </nav>
          <header class="py-10" style={{backgroundColor:'rgb(12, 51, 30)'}}>
              <div class="container px-10">
                  <div class="row gx-5 justify-content-left">
                      <div class="col-lg-10">
                          <div class="text-center my-5">
                              <h1 class="display-5 fw-bolder text-white mb-2">Present your business in a whole new way</h1>
                              <p class="lead text-white-50 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
                              <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                  <a class="btn btn-light btn-outline-success btn-lg px-4 me-sm-3" href="#features">Get Started</a>
                                  <a class="btn btn-outline-light btn-lg px-4" href="#!">Learn More</a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="row gx-5 justify-content-right">
                    <img style={{height:'33rem',width:'90rem'}} src={body} alt="" />
                  </div>
              </div>
          </header>
          </div>
        )
    }
}

export default Header;