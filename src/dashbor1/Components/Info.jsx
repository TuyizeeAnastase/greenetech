import React,{Component} from 'react';
import './style.css';

class Info extends Component{
    
    render(){
        return(
            <div className="cards">
                    <div className="card-single">
                        <div>
                            <h2>54</h2>
                            <span>Customers</span>
                        </div>
                        <div>
                           <span className="las la-users"></span>
                        </div>
                    </div>
                    <div className="card-single">
                        <div>
                            <h2>74</h2>
                            <span>Products</span>
                        </div>
                        <div>
                           <span className="las la-clipboard"></span>
                           </div>
                    </div>
                    <div className="card-single">
                        <div>
                            <h2>124</h2>
                            <span>Orders</span>
                        </div>
                        <div>
                           <span className="las la-shopping-bag"></span>
                        </div>
                    </div>
                    <div className="card-single">
                        <div>
                            <h2>$6k</h2>
                            <span>Income</span>
                        </div>
                        <div>
                           <span className="la la-google-wallet"></span>
                        </div>   
                    </div>
                </div>
        )
    }
}

export default Info;