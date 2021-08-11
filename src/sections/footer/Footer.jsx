import React,{Component} from 'react';
import './footer.css'


class Footer extends Component{
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
                        <input type="text" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;