import React,{Component} from 'react';
import './footer.css'
import emailjs from 'emailjs-com';

class Footer extends Component{
    sendSub(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_4p9a7ts', 'template_5hzv9as', e.target, 'user_S7KSqjkfaAoXCmCLJDblg')
          .then((result) => {
              alert('Thank for your subscrptions.')
          }, (error) => {
              alert('Subscription Fail')
          });
          e.target.reset();
      }

    render(){
        return(
            <div className="footer">
                <div className="container">
                <div className="footer-col">
                        <h4>Company</h4>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia esse soluta totam enim perspiciatis dolore quas laborum ipsam tenetur unde?
                        </p>
                    </div>
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/#">about Us</a></li>
                            <li><a href="/#">our services</a></li>
                            <li><a href="/#">our Works</a></li>
                            <li><a href="/#">contact Us</a></li>
                            <li><a href="/login">admin Portal</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="/#"><i class="fab fa-facebook-f"></i></a>
                            <a href="/#"><i class="fab fa-twitter"></i></a>
                            <a href="/#"><i class="fab fa-instagram"></i></a>
                            <a href="/#"><i class="fab fa-linkedin"></i></a>
                            <a href="/#"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>subscribe Us</h4>
                        <form action="" onSubmit={this.sendSub} className="form">
                            <div className="inputBox">
                               <input type="email" required name="email" placeholder="Enter your email"/>
                               {/* <span>Subject</span> */}
                            </div>
                            <div className="inputBox">
                               <input type="submit" value="send"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;