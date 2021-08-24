import React,{Component} from 'react';
import './style.css';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


const Products =()=>{
    const [ tableData,setTableData ]=useState([]);
    useEffect(()=>{
        fetch('https://greenetech.herokuapp.com/api/v1/products')
        .then((res)=>res.json())
        .then((res)=>setTableData(res.data.products))
    });
    console.log(tableData);
        return(
            <div className="product">
                        <div className="card">
                            <div className="card-header">
                                <h3>Recent Products</h3>
                                <Link to="/dashbord/products"><button>See all <span className="las la-arrow-right"></span></button></Link>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                <table >
                                    <thead>
                                        <tr>
                                            <td>Products Title</td>
                                            <td>Products Price</td>
                                            <td>Products in Stock</td>
                                            <td>Status</td>
                                            <td>Action</td>
                                        </tr>
                                    </thead>
                                    <tBody>
                                        {tableData.map((data,index)=>(
                                            <tr>
                                            <td>{data.title}</td>
                                            <td>{data.price}</td>
                                            <td>{data.stock}</td>
                                            <td><span className="status purple">{data.status}</span></td>
                                            <td>
                                                <div style={{display:'flex'}}>
                                                   <button style={{marginRight:'4px',backgroundColor:'#0F331E',color:'white',borderRadius:'25%',width:'40px'}}>Edit</button>
                                                   <DeleteOutline/>
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

export default Products;