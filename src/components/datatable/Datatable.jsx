import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./Datatable.scss";
import { userColums , userRows } from '../../datatablesource';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const Datatable = () => {

    const actionColumn = [{
        field: "action", headerName: "Action", width: 200, renderCell:()=>{
            return(
                <div className="cellAction">
                    <div className="viewButton" fontSize='small'><FullscreenIcon /></div>
                    <div className="editButton" fontSize='small'><EditIcon /></div>
                    <div className="deleteButton" fontSize='small'><DeleteOutlineIcon /></div>
                </div>
            );
        }
    }
    ]
  return (
    <div className="datatable">
        <DataGrid
        rows={userRows}
        columns={userColums.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        />
    </div>
  )
}

export default Datatable