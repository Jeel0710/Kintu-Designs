import React from 'react';
import "./table3.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Table3 = () => {
    const rows = [
        {
            id: 1,
            member_name: "Life Style Kings",
            img: "assets/images/Membership.jpg",
            period: "365 Days",
            amount: "₹ 789999",
            status: "Active",
            icon: <EditIcon />,
            icon2: <DeleteIcon />,
        },
        {
            id: 2,
            member_name: "Signature Kings",
            img: "assets/images/Membership.jpg",
            period: "365 Days",
            amount: "₹ 78999",
            status: "Active",
            icon: <EditIcon />,
            icon2: <DeleteIcon />,
            
        },
        {
            id: 3,
            member_name: "Life Style Queens",
            img: "assets/images/Membership.jpg",
            period: "365 Days",
            amount: "₹ 45999",
            status: "Active",
            icon: <EditIcon />,
            icon2: <DeleteIcon />,
        },
        {
            id: 4,
            member_name: "Signature Queens",
            img: "assets/images/Membership.jpg",
            period: "365 Days",
            amount: "₹ 58999",
            status: "Active",
            icon: <EditIcon />,
            icon2: <DeleteIcon />,
        },
        {
            id: 5,
            member_name: "Life Style Couples",
            img: "assets/images/Membership.jpg",
            period: "365 Days",
            amount: "₹ 78999",
            status: "Active",
            icon: <EditIcon />,
            icon2: <DeleteIcon />,
        },
        {
            id: 6,
            member_name: "Signature Couples",
            img: "assets/images/Membership.jpg",
            period: "365 Days",
            amount: "₹ 108999",
            status: "Active",
            icon: <EditIcon />,
            icon2: <DeleteIcon />,
        },
        {
            id: 7,
            member_name: "Gym Swags",
            img: "assets/images/Membership.jpg",
            period: "365 Days",
            amount: "₹ 38999",
            status: "Active",
            icon: <EditIcon />,
            icon2: <DeleteIcon />,
        },
        
    ]
    return (
        <TableContainer component={Paper} className="table3">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className="heading">
                <TableCell className="tableCell">No</TableCell>
                <TableCell className="tableCell">Membership Image</TableCell>
                <TableCell className="tableCell">Membership Name</TableCell>
                <TableCell className="tableCell">Period(Days)</TableCell>
                <TableCell className="tableCell">Amount(₹)</TableCell>
                <TableCell className="tableCell">Status</TableCell>
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
                      </div>
                  </TableCell>
                  <TableCell className="tableCell" >{row.member_name}</TableCell>
                  <TableCell className="tableCell" >{row.period}</TableCell>
                  <TableCell className="tableCell" >{row.amount}</TableCell>
                  <TableCell className="tableCell" >
                    <span className={`status ${row.status}`}>{row.status}</span>
                  </TableCell>
                  <TableCell className="tableCell" >
                      <span className="icon">{row.icon}</span>
                      <span className="icon2">{row.icon2}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    );
}

export default Table3