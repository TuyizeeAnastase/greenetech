import React,{Component} from 'react';
import './style.css';
import Info from '.././Components/Info';
import Products from '.././Components/Products';
import Customers from '.././Components/Customers';

class Home extends Component{
    render(){
        return(
            <div className="main-content">
              <div class="main">
              <Info />
                <div className="recent-grid">
                    <Products />
                    <Customers />
                </div>
              </div>
          </div>
        )
    }
}
export default Home;