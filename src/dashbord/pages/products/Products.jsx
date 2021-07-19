import React, { useState } from 'react';
import './products.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../../dummyData';
import { Link } from 'react-router-dom';  

export default function Products() {

    const [data,setData]=useState(productRows);

    const handleDelete=(id)=>{
        setData(data.filter((item)=> item.id !== id ));
 }


 const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'product', headerName: 'Product', width: 150 , renderCell:(params)=>{
        return (
        <div className="productListItem">
            <img className="productListIm" src={params.row.image} alt=""/>
            {params.row.product}
        </div>
        )
    }},
    { field: 'stock', headerName: 'Stock', width: 150 },
    {
      field: 'status',
      headerName: 'Status',
      width: 130,
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 180,
      },
      {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell:(params)=>{
            return (
                <>
                <Link to={"/dashbord/product/"+params.row.id}>
                  <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutline className="productListDelete" onClick={()=>handleDelete(params.row.id)}/>
                </>
            )
        }
      }
  ];


    return (
        <div className="transactions">
              <DataGrid 
            rows={data} 
            disableSelectionOnClick 
            columns={columns} 
            pageSize={8} 
            checkboxSelection />
        </div>
    )
}
