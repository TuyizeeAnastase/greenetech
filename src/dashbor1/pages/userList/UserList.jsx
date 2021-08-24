import React from 'react';
import './userList.css';
import { DeleteOutline } from '@material-ui/icons';
import profile from './profile.jpg'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Customers=()=>{
    const [ tableData,setTableData ]=useState([]);

    const handleDelete=(id)=>{
        axios.delete(`https://greenetech.herokuapp.com/api/v1/users/${id}`)
        .then(res=>{
            alert('User Deleted')
            setTableData(tableData.filter((item)=>item.id!==id))
        })
    }

    useEffect(()=>{
      fetch('https://greenetech.herokuapp.com/api/v1/users')
        .then((res)=>res.json())
        .then((res)=>setTableData(res.data.Clients))
    });
        return (
          <div className="customers">
                        <div className="customersCard">
                            <div className="customersCard-header">
                                <h3>All Users</h3>
                                <Link to="/dashbord/newUser"><button>Add New User</button></Link>
                            </div>
                            <div className="customersCard-body">
                                <div className="table-responsive">
                                <table >
                                    <thead>
                                        <tr>
                                            <td>profile</td>
                                            <td>Username</td>
                                            <td>Full Name</td>
                                            <td>Email</td>
                                            <td>Serial Number</td>
                                            <td>Adress</td>
                                            <td>Status</td>
                                            <td>Phone</td>
                                            <td>Amount</td>
                                            <td>Action</td>
                                        </tr>
                                    </thead>
                                    <tBody>
                                        {tableData.map((data,index)=>(
                                            
                                        <tr>
                                        <td>
                                            <img src={profile} style={{height:'40px',width:'40px',borderRadius:'50%',
                                                    marginRight:'1rem'}} alt="" />
                                       </td>
                                       <td>{data.username}</td>
                                       <td style={{width:'25px'}}>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.serialNumber}</td>
                                        <td>{data.adress}</td>
                                        <td><span className="status red">wonned</span></td>
                                        <td>{data.phone}</td>
                                        <td>{data.amount}</td>
                                        <td>
                                            <div style={{display:'flex'}}>
                                               <button style={{marginRight:'4px',backgroundColor:'#0F331E',color:'white',borderRadius:'25%',width:'40px'}}>Edit</button>
                                               <DeleteOutline style={{cursor:'pointer'}} onClick={(e)=>handleDelete(data._id)}/>
                                            </div>
                                        </td>
                                    </tr>
                                        ))}
                                    </tBody>
                                </table>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }

export default Customers;
