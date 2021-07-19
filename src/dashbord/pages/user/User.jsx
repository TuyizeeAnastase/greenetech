import React from 'react'
import './user.css'
import { Link } from 'react-router-dom';
import { PermIdentity,   CalendarToday,PhoneAndroid,MailOutline,LocationSearching,Publish } from '@material-ui/icons';

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/dashbord/newUser">
                  <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.pexels.com/photos/6325060/pexels-photo-6325060.jpeg?cs=srgb&dl=pexels-igor-6325060.jpg&fm=jpg" alt="" className="userShowImg" />
                        <div className="userShowTitle">
                           <span className="userShowUsername">John Peter</span>
                           <span className="userShowSerial">RAC345M</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowtitle">Account Details</span>
                        <div className="userShowInfo">
                           <PermIdentity className="userShowIcon"/>
                           <span className="userShowInfotitle">john23</span>
                        </div>
                        <div className="userShowInfo">
                           <CalendarToday className="userShowIcon"/>
                           <span className="userShowInfotitle">15.07.2021</span>
                        </div>
                        <span className="userShowtitle">Contact Details</span>
                        <div className="userShowInfo">
                           <PhoneAndroid className="userShowIcon"/>
                           <span className="userShowInfotitle">+250 786 5439</span>
                        </div>
                        <div className="userShowInfo">
                           <MailOutline className="userShowIcon"/>
                           <span className="userShowInfotitle">john@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                           <LocationSearching className="userShowIcon"/>
                           <span className="userShowInfotitle">Huye</span>
                        </div>
                    </div>
                    
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label >Username</label>
                                <input type="text" className="useUpdateInput" placeholder="john23" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Full Name</label>
                                <input type="text" className="useUpdateInput" placeholder="john Peter" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Email</label>
                                <input type="text" className="useUpdateInput" placeholder="john@gmail.com" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Phone</label>
                                <input type="text" className="useUpdateInput" placeholder="+250 786 5439" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Adress</label>
                                <input type="text" className="useUpdateInput" placeholder="Huye" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                              <div className="userUpdateUpload">
                                  <img src="https://images.pexels.com/photos/6325060/pexels-photo-6325060.jpeg?cs=srgb&dl=pexels-igor-6325060.jpg&fm=jpg" alt="" className="userUpdateImg" />
                                  <label htmlFor="file">
                                      <Publish className="userUpdateIcon"/>
                                   </label>
                                  <input type="file" id="file" className="file" style={{display:'none'}}/>
                              </div>
                              <button className="userUpdateButn">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
