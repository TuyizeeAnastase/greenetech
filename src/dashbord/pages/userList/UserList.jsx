import React,{ useState } from 'react';
import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../../dummyData';
import { Link } from 'react-router-dom';

export default function UserList() {

    const [data, setData] = useState(userRows);

    const handleDelete=(id)=>{
           setData(data.filter((item)=> item.id !== id ));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 150 , renderCell:(params)=>{
            return (
            <div className="userListUser">
                <img className="userListIm" src={params.row.avatar} alt=""/>
                {params.row.username}
            </div>
            )
        }},
        { field: 'email', headerName: 'Email', width: 150 },
        {
          field: 'status',
          headerName: 'Status',
          width: 130,
        },
        {
            field: 'SerialNumber',
            headerName: 'Serial Number',
            width: 180,
          },
          {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell:(params)=>{
                return (
                    <>
                    <Link to={"/dashbord/user/"+params.row.id}>
                      <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            }
          }
      ];
      
    

    return (
        <div className="userList">
            <DataGrid 
            rows={data} 
            disableSelectionOnClick 
            columns={columns} 
            pageSize={8} 
            checkboxSelection />
        </div>
    )
}
