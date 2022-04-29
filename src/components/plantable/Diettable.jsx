import React from 'react';
import "./diettable.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Diettable = () => {
    const rows = [
        {
            member_id: "1",
            channel: "28 Days Eating Plan",
            days: "28",
            icon: <VisibilityIcon />,
            icon2:<EditIcon />,
            icon3: <DeleteIcon />
        },
        {
            member_id: "2",
            channel: "LifeStyle diet plan (3 months) dp",
            days: "98",
            icon: <VisibilityIcon />,
            icon2:<EditIcon />,
            icon3: <DeleteIcon />
        },
        {
            member_id: "3",
            channel: "Signature diet plan (3 months) dp",
            days: "90",
            icon: <VisibilityIcon />,
            icon2:<EditIcon />,
            icon3: <DeleteIcon />
        },
        {
            member_id: "4",
            channel: "Test Plan",
            days: "3",
            icon: <VisibilityIcon />,
            icon2:<EditIcon />,
            icon3: <DeleteIcon />
        },
        {
            member_id: "5",
            channel: "1400 CALORIES EGGETARIAN DIET PLAN",
            days: "7",
            icon: <VisibilityIcon />,
            icon2:<EditIcon />,
            icon3: <DeleteIcon />
        },
        {
            member_id: "6",
            channel: "8 Days",
            days: "7",
            icon: <VisibilityIcon />,
            icon2:<EditIcon />,
            icon3: <DeleteIcon />
        },
        {
            member_id: "7",
            channel: "1000 CALORIES VEGETARIAN DIET PLAN",
            days: "30",
            icon: <VisibilityIcon />,
            icon2:<EditIcon />,
            icon3: <DeleteIcon />
        },
        {
            member_id: "8",
            channel: "Prueba",
            days: "10",
            icon: <VisibilityIcon />,
            icon2:<EditIcon />,
            icon3: <DeleteIcon /> 
        },
    ]

    return (
        <TableContainer component={Paper} className="diettable">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className="heading2">
                <TableCell className="tableCell">Diet Plan List:</TableCell>
                <TableCell className="tableCell">Diet Plan Name</TableCell>
                <TableCell className="tableCell">No of Days</TableCell>
                <TableCell className="tableCell">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                >
                  <TableCell className="tableCell" > {row.member_id} </TableCell>
                  <TableCell className="tableCell" >{row.channel}</TableCell>
                  <TableCell className="tableCell" >{row.days}</TableCell>
                  <TableCell className="tableCell1" >
                      <span className="icon">{row.icon}</span>
                      <span className="icon1">{row.icon2}</span>
                      <span className="icon2">{row.icon3}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    );
}

export default Diettable