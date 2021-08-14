import React,{Component} from 'react';
import './style.css';
import profile from './profile.jpg'

class TopBar extends Component{
    render(){
        return(
            <div class="header">
            <h2>
               <label for="">
                   <span className="las la-bars"></span>
               </label> 
               Dashbord
            </h2>
            <div className="search-wrapper">
                <span className="las la-search"></span>
                <input type="text" placeholder="search here" />
            </div>
            <div className="user-wrapper">
                <img src={profile} alt="" style={{width:'40px',height:'40px'}}/>
                <div>
                    <h4>John Doe</h4>
                    <small>Admin</small>
                </div>
            </div>
        </div> 
        )
    }
}
export default TopBar;