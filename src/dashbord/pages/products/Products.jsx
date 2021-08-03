import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './products.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';


const Products=()=>{
  const columns=[
    {field:'_id',headerName:'ID'},
    {field:'title',headerName:'Title',width:150},
    {field:'price',headerName:'Price',width:150},
    {field:'stock',headerName:'Stock',width:150},
    {field:'status',headerName:'Status',width:150},
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell:(params)=>{
          return (
              <>
              <Link to={"/dashbord/product/"+params.row._id}>
                 <button className="productListEdit" >Edit</button>
              </Link>
              <DeleteOutline className="productListDelete" onClick={(e)=>handleDelete(params.row._id)}/>
              </>
          )
      }
    }
  ]
  const [tableData,setTableData]=useState([]);

  const handleDelete=(id)=>{
    axios.delete(`http://localhost:5000/api/v1/products/${id}`)
    .then(res=>{
      console.log(res)
      console.log(res.data)
      setTableData(tableData.filte((item)=>item.id !==id ))
    })
  }

  useEffect(()=>{
    fetch("http://localhost:5000/api/v1/products")
     .then((res)=>res.json())
     .then((res)=>setTableData(res.data.products))
  });


  return (
    <div className="transactions">
      <DataGrid
      getRowId={(row) => row._id}
      rows={tableData}
      disableSelectionOnClick 
      columns={columns}
      pageSize={8}
      checkboxSelection
      />
    </div>
  )
}

export default Products;