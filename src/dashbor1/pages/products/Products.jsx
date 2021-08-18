import React, { useState,useEffect } from 'react';
import './style.css';
import { DeleteOutline } from '@material-ui/icons';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Products=()=>{
    const [ tableData,setTableData ]=useState([]);

    const handleDelete=(id)=>{
        axios.delete(`https://greenetech.herokuapp.com/api/v1/products/${id}`)
        .then(res=>{
            console.log(res)
            console.log(res.data)
            setTableData(tableData.filter((item)=>item.id!==id))
        })
    }

    useEffect(()=>{
        fetch('https://greenetech.herokuapp.com/api/v1/products')
          .then((res)=> res.json())
          .then((res)=>setTableData(res.data.products))
    });
    console.log(tableData)
    return (
        
        <div className="products">
                      <div className="card">
                          <div className="card-header">
                              <h3>All Products</h3>
                              <Link to="/dashbord/newProduct"><button>Add New Product</button></Link>
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
                                                <Link to={"/dashbord/product/"+data._id}><button style={{marginRight:'4px',backgroundColor:'#0F331E',color:'white',borderRadius:'25%',width:'40px',cursor:'pointer'}}>Edit</button></Link>
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

export default Products;
