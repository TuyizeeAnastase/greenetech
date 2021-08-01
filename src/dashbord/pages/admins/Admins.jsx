import React, {useState} from 'react';
import './admins.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { admins } from '../../../dummyData';
import { Link } from 'react-router-dom';

export  default function Admin(){

    const [data, setData] = useState(admins);

    const handleDelete=(id)=>{
           setData(data.filter((item)=> item.id !== id ));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User Admins', width: 150 , renderCell:(params)=>{
            return (
            <div className="adminListAdmin">
                <img className="adminListIm" src={params.row.avatar} alt=""/>
                {params.row.username}
            </div>
            )
        }},
        { field: 'email', headerName: 'Email', width: 150 },
          {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell:(params)=>{
                return (
                    <>
                    <Link to={"/dashbord/admin/"+params.row.id}>
                      <button className="adminListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="adminListDelete" onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            }
          }
      ];

    return (
        <div className="adminList">
            <DataGrid 
            rows={data} 
            disableSelectionOnClick 
            columns={columns} 
            pageSize={8} 
            checkboxSelection />
        </div>
    )
}