import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./exercisetable.scss";
import { userColums , userRows } from '../../datasource4';
import AddIcon from '@mui/icons-material/Add';


const Exercisetable = () => {

    const actionColumn = [{
        field: "action", headerName: "Action", width: 180, renderCell:()=>{
            return(
                <div className="cellAction">
                    <div className="viewButton" fontSize='small'><AddIcon /></div>
                </div>
            );
        }
    }
    ]
  return (
    <div className="exercisetable">
        <DataGrid
        rows={userRows}
        columns={userColums.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        />
    </div>
  )
}

export default Exercisetable