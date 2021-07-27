import React, {useState} from 'react';
import './subscribers.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { subscribers } from '../../../dummyData';

export default function Subscribers() {
    const [data, setData] = useState(subscribers);

    const handleDelete=(id)=>{
           setData(data.filter((item)=> item.id !== id ));
    
        }

        const columns = [
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'email', headerName: 'Email', width: 150 },
              {
                field: 'action',
                headerName: 'Action',
                width: 150,
                renderCell:(params)=>{
                    return (
                        <>
                        <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
                        </>
                    )
                }
              }
          ];

    return (
        <div className="subscribers">
            <DataGrid 
            rows={data} 
            disableSelectionOnClick 
            columns={columns} 
            pageSize={8} 
            checkboxSelection />
        </div>
    )}