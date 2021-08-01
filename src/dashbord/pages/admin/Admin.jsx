import React from 'react';
import './admin.css';
import { Link } from     'react-router-dom';
import { Publish } from '@material-ui/icons';

export default function EditAdmin(){
    return(
        <div className="admin">
            <div className="adminTitleContainer">
                <h1 className="admnTitle">Edit Admin</h1>
                <Link to="/dashbord/newAdmin">
                  <button className="adminAddButton">Create</button>
                </Link>
            </div>
            <div className="adminContainer">
                <div className="adminShow">
                    <div className="adminShowTop">
                    <img src="https://images.pexels.com/photos/6325060/pexels-photo-6325060.jpeg?cs=srgb&dl=pexels-igor-6325060.jpg&fm=jpg" alt="" className="adminShowImg" />
                    <div className="adminShowTitle">
                        <span className="adminShowUsername">Marc Manzi</span>
                        <span className="adminShowEmail">marc@gmail.com</span>
                    </div>
                    </div>
                </div>
                <div className="adminUpdate">
                    <span className="adminUpdateTitle">Edit</span>
                    <form action="" className="adminUpdateForm">
                        <div className="adminUpdateLeft">
                            <div className="adminUpdateItem">
                                <label >Username</label>
                                <input type="text" className="adminUpdateInput" placeholder="Marc3"/>
                            </div>
                            <div className="adminUpdateItem">
                                <label>Email</label>
                                <input type="text" className="adminUpdateInput" placeholder="marc@gmail.com"/>
                            </div>
                            <div className="adminUpdateItem">
                                <label>Password</label>
                                <input type="password" className="adminUpdateInput" placeholder="........"/>
                            </div>
                        </div>
                        <div className="adminUpdateRight">
                            <div className="adminUpdateUpload">
                            <img src="https://images.pexels.com/photos/6325060/pexels-photo-6325060.jpeg?cs=srgb&dl=pexels-igor-6325060.jpg&fm=jpg" alt="" className="adminUpdateImg" />
                            <label htmlFor="file">
                                <Publish className="adminUpdateIcon"/>
                            </label>
                            <input type="file" id="file" className="file" style={{display:'none'}}/>
                            </div>
                            <button className="adminUpdateButn">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}