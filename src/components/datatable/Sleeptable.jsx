import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./sleeptable.scss";
import { userColums , userRows } from  '../../datasource2';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

const Sleeptable = () => {

    const actionColumn = [{
        field: "action", headerName: "Action", width: 200, renderCell:()=>{
            return(
                <div className="cellAction">
                    <div className="viewButton" fontSize='small'><FullscreenIcon /></div>
                    <div className="editButton" fontSize='small'><SaveAltIcon /></div>
                    <div className="deleteButton" fontSize='small'><DeleteOutlineIcon /></div>
                </div>
            );
        }
    }
    ]
  return (
    <div className="sleeptable">
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

export default Sleeptable