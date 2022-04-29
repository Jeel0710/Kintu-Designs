import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./dietplantable.scss";
import { userColums , userRows } from '../../datasource3';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import EditIcon from '@mui/icons-material/Edit';


const Dietplantable = () => {

    const actionColumn = [{
        field: "action", headerName: "Action", width: 180, renderCell:()=>{
            return(
                <div className="cellAction">
                    <div className="viewButton" fontSize='small'><FullscreenIcon /></div>
                    <div className="editButton" fontSize='small'><EditIcon /></div>
                </div>
            );
        }
    }
    ]
  return (
    <div className="dietplantable">
        <DataGrid
        rows={userRows}
        columns={userColums.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        />
    </div>
  )
}

export default Dietplantable