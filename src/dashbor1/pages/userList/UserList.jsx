import React,{Component} from 'react';
import './userList.css';
import { DeleteOutline } from '@material-ui/icons';
import profile from './profile.jpg'

class Customers extends Component{
    render(){
        return (
          <div className="products">
                        <div className="card">
                            <div className="card-header">
                                <h3>All Users</h3>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                <table >
                                    <thead>
                                        <tr>
                                            <td>profile</td>
                                            <td>Username</td>
                                            <td>Email</td>
                                            <td>Serial Number</td>
                                            <td>Status</td>
                                            <td>Phone</td>
                                            <td>Action</td>
                                        </tr>
                                    </thead>
                                    <tBody>
                                        <tr>
                                            <td>
                                                <img src={profile} style={{height:'40px',width:'40px',borderRadius:'50%',
                                                        marginRight:'1rem'}} alt="" />
                                           </td>
                                           <td>john3</td>
                                            <td>john@gmail.com</td>
                                            <td>RAB567M</td>
                                            <td><span className="status red">wonned</span></td>
                                            <td>+2507889878</td>
                                            <td>
                                                <div style={{display:'flex'}}>
                                                   <button style={{marginRight:'4px',backgroundColor:'#0F331E',color:'white',borderRadius:'25%',width:'40px'}}>Edit</button>
                                                   <DeleteOutline/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={profile} style={{height:'40px',width:'40px',borderRadius:'50%',
                                                        marginRight:'1rem'}} alt="" />
                                           </td>
                                           <td>john3</td>
                                            <td>john@gmail.com</td>
                                            <td>RAB567M</td>
                                            <td><span className="status red">wonned</span></td>
                                            <td>+2507889878</td>
                                            <td>
                                                <div style={{display:'flex'}}>
                                                   <button style={{marginRight:'4px',backgroundColor:'#0F331E',color:'white',borderRadius:'25%',width:'40px'}}>Edit</button>
                                                   <DeleteOutline/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={profile} style={{height:'40px',width:'40px',borderRadius:'50%',
                                                        marginRight:'1rem'}} alt="" />
                                           </td>
                                           <td>john3</td>
                                            <td>john@gmail.com</td>
                                            <td>RAB567M</td>
                                            <td><span className="status red">wonned</span></td>
                                            <td>+2507889878</td>
                                            <td>
                                                <div style={{display:'flex'}}>
                                                   <button style={{marginRight:'4px',backgroundColor:'#0F331E',color:'white',borderRadius:'25%',width:'40px'}}>Edit</button>
                                                   <DeleteOutline/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={profile} style={{height:'40px',width:'40px',borderRadius:'50%',
                                                        marginRight:'1rem'}} alt="" />
                                           </td>
                                           <td>john3</td>
                                            <td>john@gmail.com</td>
                                            <td>RAB567M</td>
                                            <td><span className="status red">wonned</span></td>
                                            <td>+2507889878</td>
                                            <td>
                                                <div style={{display:'flex'}}>
                                                   <button style={{marginRight:'4px',backgroundColor:'#0F331E',color:'white',borderRadius:'25%',width:'40px'}}>Edit</button>
                                                   <DeleteOutline/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={profile} style={{height:'40px',width:'40px',borderRadius:'50%',
                                                        marginRight:'1rem'}} alt="" />
                                           </td>
                                           <td>john3</td>
                                            <td>john@gmail.com</td>
                                            <td>RAB567M</td>
                                            <td><span className="status red">wonned</span></td>
                                            <td>+2507889878</td>
                                            <td>
                                                <div style={{display:'flex'}}>
                                                   <button style={{marginRight:'4px',backgroundColor:'#0F331E',color:'white',borderRadius:'25%',width:'40px'}}>Edit</button>
                                                   <DeleteOutline/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={profile} style={{height:'40px',width:'40px',borderRadius:'50%',
                                                        marginRight:'1rem'}} alt="" />
                                           </td>
                                           <td>john3</td>
                                            <td>john@gmail.com</td>
                                            <td>RAB567M</td>
                                            <td><span className="status red">wonned</span></td>
                                            <td>+2507889878</td>
                                            <td>
                                                <div style={{display:'flex'}}>
                                                   <button style={{marginRight:'4px',backgroundColor:'#0F331E',color:'white',borderRadius:'25%',width:'40px'}}>Edit</button>
                                                   <DeleteOutline/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={profile} style={{height:'40px',width:'40px',borderRadius:'50%',
                                                        marginRight:'1rem'}} alt="" />
                                           </td>
                                           <td>john3</td>
                                            <td>john@gmail.com</td>
                                            <td>RAB567M</td>
                                            <td><span className="status red">wonned</span></td>
                                            <td>+2507889878</td>
                                            <td>
                                                <div style={{display:'flex'}}>
                                                   <button style={{marginRight:'4px',backgroundColor:'#0F331E',color:'white',borderRadius:'25%',width:'40px'}}>Edit</button>
                                                   <DeleteOutline/>
                                                </div>
                                            </td>
                                        </tr><tr>
                                            <td>
                                                <img src={profile} style={{height:'40px',width:'40px',borderRadius:'50%',
                                                        marginRight:'1rem'}} alt="" />
                                           </td>
                                           <td>john3</td>
                                            <td>john@gmail.com</td>
                                            <td>RAB567M</td>
                                            <td><span className="status red">wonned</span></td>
                                            <td>+2507889878</td>
                                            <td>
                                                <div style={{display:'flex'}}>
                                                   <button style={{marginRight:'4px',backgroundColor:'#0F331E',color:'white',borderRadius:'25%',width:'40px'}}>Edit</button>
                                                   <DeleteOutline/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={profile} style={{height:'40px',width:'40px',borderRadius:'50%',
                                                        marginRight:'1rem'}} alt="" />
                                           </td>
                                           <td>john3</td>
                                            <td>john@gmail.com</td>
                                            <td>RAB567M</td>
                                            <td><span className="status red">wonned</span></td>
                                            <td>+2507889878</td>
                                            <td>
                                                <div style={{display:'flex'}}>
                                                   <button style={{marginRight:'4px',backgroundColor:'#0F331E',color:'white',borderRadius:'25%',width:'40px'}}>Edit</button>
                                                   <DeleteOutline/>
                                                </div>
                                            </td>
                                        </tr>
                                    </tBody>
                                </table>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}
export default Customers;
