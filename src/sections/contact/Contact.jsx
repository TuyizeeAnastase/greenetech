import React , {Component} from 'react';
import './contact.css';

class Contact extends Component
{
    render(){
        return(
            <div class="contact">
            <div class="content">
               <h2>Contact Us</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perspiciatis inventore facilis suscipit maiores deserunt dicta vero ipsum amet provident est fugit soluta odio rerum, debitis optio. Excepturi, vitae molestiae.</p>
            </div>
            <div class="container">
              <div className="contactInfo">
                  <div className="box">
                      <div className="icon">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>  
                      </div>
                      <div className="text">
                          <h3>Address</h3>
                          <p>4671 Avenue Paul II,</p>
                          <p>Kigali,Rwanda,55060</p>
                      </div>
                  </div>
                  <div className="box">
                  <div className="icon">
                        <i class="fa fa-phone" aria-hidden="true"></i>  
                      </div>
                      <div className="text">
                          <h3>Phone</h3>
                          <p>55060</p>
                      </div>
                  </div>
                  <div className="box">
                  <div className="icon">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>  
                      </div>
                      <div className="text">
                          <h3>Email</h3>
                          <p>greentech@gmail.com</p>
                      </div>
                  </div>
              </div>
              <div className="contactForm">
                  <form action="">
                      <h2>Send Message</h2>
                      <div className="inputBox">
                          <input type="text" name="" required />
                          <span>Full Name</span>
                      </div>
                      <div className="inputBox">
                          <input type="text" name="" required />
                          <span>Email</span>
                      </div>
                      <div className="inputBox">
                          <textarea required></textarea>
                          <span>Type your Message</span>
                      </div>
                      <div className="inputBox">
                          <input type="submit" name="" value="Send" />
                      </div>
                  </form>
              </div>
            </div>
            </div>
        )
    }
}

export default Contact;