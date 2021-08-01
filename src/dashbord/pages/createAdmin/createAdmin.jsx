import React from 'react';
import './createAdmin.css';

class Admin extends React.Component{


    render(){
        return (
            <div className="createAdmin">
                <h1 className="newAdminTitle">New Admin</h1>
                <form action="" className="newAdminForm">
                    <div className="newAdminItem">
                        <label >email</label>
                        <input 
                        type="email"
                        id="email"
                        placeholder="Enter Email"/>
                    </div>
                    <div className="newAdminItem">
                        <label >Password</label>
                        <input type="password"
                        id="password"
                        placeholder="Enter password" 
                        />
                       
                    </div>
                    <button className="newAdminBtn">Create</button>
                </form>
            </div>
        )
    }   
}

export default Admin;