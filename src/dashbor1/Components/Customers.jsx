import React,{Component} from 'react';
import './style.css';
import profile from './profile.jpg';
import { Link } from 'react-router-dom';

class Customer extends Component{
    render(){
        return (
            <div className="customers">
                        <div className="cardCustomer">
                            <div className="cardcustomer-header">
                                <h3>New user</h3>
                                <Link to="/dashbord/users"><button>See all<span className="las la-arrow-right"></span></button></Link> 
                            </div>
                            <div className="cardCustomer-body">
                                 <div className="customer">
                                    <div style={{display:'flex',alignItems:'center'}}>
                                        <img src={profile} style={{height:'40px',width:'40px'}} alt="" />
                                        <div>
                                            <h6>Lewis S. Cann</h6>
                                            <small>CEO Exceprt</small>
                                        </div>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center'}}>
                                        <span className="las la-user-circle"></span>
                                        <span className="las la-comment"></span>
                                        <span className="las la-phone"></span>
                                    </div>
                                </div>
                                <div className="customer">
                                    <div style={{display:'flex',alignItems:'center'}}>
                                        <img src={profile} style={{height:'40px',width:'40px'}} alt="" />
                                        <div>
                                            <h6>Lewis S. Cann</h6>
                                            <small>CEO Exceprt</small>
                                        </div>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center'}}>
                                        <span className="las la-user-circle"></span>
                                        <span className="las la-comment"></span>
                                        <span className="las la-phone"></span>
                                    </div>
                                </div>
                                <div className="customer">
                                    <div style={{display:'flex',alignItems:'center'}}>
                                        <img src={profile} style={{height:'40px',width:'40px'}} alt="" />
                                        <div>
                                            <h6>Lewis S. Cann</h6>
                                            <small>CEO Exceprt</small>
                                        </div>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center'}}>
                                        <span className="las la-user-circle"></span>
                                        <span className="las la-comment"></span>
                                        <span className="las la-phone"></span>
                                    </div>
                                </div>
                                <div className="customer">
                                    <div style={{display:'flex',alignItems:'center'}}>
                                        <img src={profile} style={{height:'40px',width:'40px'}} alt="" />
                                        <div>
                                            <h6>Lewis S. Cann</h6>
                                            <small>CEO Exceprt</small>
                                        </div>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center'}}>
                                        <span className="las la-user-circle"></span>
                                        <span className="las la-comment"></span>
                                        <span className="las la-phone"></span>
                                    </div>
                                </div>
                                <div className="customer">
                                    <div style={{display:'flex',alignItems:'center'}}>
                                        <img src={profile} style={{height:'40px',width:'40px'}} alt="" />
                                        <div >
                                            <h6>Lewis S. Cann</h6>
                                            <small >CEO Exceprt</small>
                                        </div>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center'}}>
                                        <span className="las la-user-circle"></span>
                                        <span className="las la-comment"></span>
                                        <span className="las la-phone"></span>
                                    </div>
                                </div>
                                <div className="customer">
                                    <div style={{display:'flex',alignItems:'center'}}>
                                        <img src={profile} style={{height:'40px',width:'40px'}} alt="" />
                                        <div >
                                            <h6>Lewis S. Cann</h6>
                                            <small >CEO Exceprt</small>
                                        </div>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center'}}>
                                        <span className="las la-user-circle"></span>
                                        <span className="las la-comment"></span>
                                        <span className="las la-phone"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}
export default Customer;
