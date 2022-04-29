import React from 'react';
import "./table2.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';

const Table2 = () => {
    const rows = [
        {
            id: 1,
            member_name: "NKL Shoes for Gym",
            img: "assets/images/bkl.jpg",
            brand: "BKL Sports",
            quantity: "122",
            icon: <EditIcon />,
        },
        {
            id: 2,
            member_name: "Nike Air Max Running",
            img: "assets/images/Nike1.jpg",
            brand: "Nike",
            quantity: "56",
            icon: <EditIcon />,
        },
        {
            id: 3,
            member_name: "Adidas Originals",
            img: "assets/images/Adidas1.jpg",
            brand: "Adidas",
            quantity: "44",
            icon: <EditIcon />,
        },
        {
            id: 4,
            member_name: "Puma Running Shoes",
            img: "assets/images/Puma1.jpg",
            brand: "Puma",
            quantity: "67",
            icon: <EditIcon />,
        },
        
    ]
    return (
        <TableContainer component={Paper} className="table2">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className="heading">
                <TableCell className="tableCell">No</TableCell>
                <TableCell className="tableCell">Product Name</TableCell>
                <TableCell className="tableCell">Brand</TableCell>
                <TableCell className="tableCell">Quantity In stock</TableCell>
                <TableCell className="tableCell">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                >
                  <TableCell className="tableCell" > {row.id} </TableCell>
                  <TableCell className="tableCell" >
                      <div className="cellWrapper">
                          <img src={row.img} alt="" className="image" />
                          {row.member_name}
                      </div>
                  </TableCell>
                  <TableCell className="tableCell" >{row.brand}</TableCell>
                  <TableCell className="tableCell" >{row.quantity}</TableCell>
                  <TableCell className="tableCell" >
                      <span className="icon">{row.icon}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    );
}

export default Table2