import React from 'react';
import "./programtable.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Programtable = () => {
    const rows = [
        {
            member_id: "1",
            channel: "Test 1",
            plan: "7 days",
            epaln: "6 Pack Abs Workout Plan",
            days: "89",
            icon2:<EditIcon />,
            icon3: <DeleteIcon />
        },
        {
            member_id: "2",
            channel: "Rushi test",
            plan: "7 days",
            epaln: "CBP workout card phase 1",
            days: "7",
            icon2:<EditIcon />,
            icon3: <DeleteIcon />
        },
        {
            member_id: "3",
            channel: "mkl",
            plan: "Signature Diet Plan(3 months) dp",
            epaln: "Harsh Exercise Plan",
            days: "10",
            icon2:<EditIcon />,
            icon3: <DeleteIcon />
        },
        {
            member_id: "4",
            channel: "Harsh Program Name",
            plan: "Harsh plan",
            epaln: "6 Pack Abs Workout Plan",
            days: "3",
            icon2:<EditIcon />,
            icon3: <DeleteIcon />
        },
    ]

    return (
        <TableContainer component={Paper} className="programtable">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className="heading2">
                <TableCell className="tableCell">Program List</TableCell>
                <TableCell className="tableCell">Program Name</TableCell>
                <TableCell className="tableCell">Diet Plan</TableCell>
                <TableCell className="tableCell">Exercise Plan</TableCell>
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
                  <TableCell className="tableCell" >{row.plan}</TableCell>
                  <TableCell className="tableCell" >{row.epaln}</TableCell>
                  <TableCell className="tableCell" >{row.days}</TableCell>
                  <TableCell className="tableCell1" >
                    <div className="iconp">
                      <span className="icon1">{row.icon2}</span>
                      <span className="icon2">{row.icon3}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    );
}

export default Programtable