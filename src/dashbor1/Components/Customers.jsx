import React,{Component} from 'react';
import './style.css';
import profile from './profile.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Customer =()=>{
    const [ tableData,setTableData ]=useState([]);

    useEffect(()=>{
        fetch('https://greenetech.herokuapp.com/api/v1/users')
        .then((res)=>res.json())
        .then((res)=>setTableData(res.data.Clients))
    })
    console.log(tableData)
        return (
            <div className="customers">
                        <div className="cardCustomer">
                            <div className="cardcustomer-header">
                                <h3>New user</h3>
                                <Link to="/dashbord/users"><button>See all<span className="las la-arrow-right"></span></button></Link> 
                            </div>
                            <div className="cardCustomer-body">
                                {tableData.map((data,index)=>(
                                     <div className="customer">
                                     <div style={{display:'flex',alignItems:'center'}}>
                                         <img src={profile} style={{height:'40px',width:'40px'}} alt="" />
                                         <div>
                                             <h6>{data.username}</h6>
                                             <small>{data.serialNumber}</small>
                                         </div>
                                     </div>
                                     <div style={{display:'flex',alignItems:'center'}}>
                                         <span className="las la-user-circle"></span>
                                         <span className="las la-comment"></span>
                                         <span className="las la-phone"></span>
                                     </div>
                                 </div>
                                ))}
                            </div>
                        </div>
                    </div>
        )
    }

export default Customer;
