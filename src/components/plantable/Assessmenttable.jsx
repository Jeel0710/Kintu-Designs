import React from 'react';
import "./assessment.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Assessmenttable = () => {
    const rows = [
        {
            member_id: "No Data Available",
        },
    ]

    return (
        <TableContainer component={Paper} className="assessmenttable">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className="heading2">
                <TableCell className="tableCell">No.</TableCell>
                <TableCell className="tableCell">Member ID</TableCell>
                <TableCell className="tableCell">User Name</TableCell>
                <TableCell className="tableCell">Employee Name</TableCell>
                <TableCell className="tableCell">Height</TableCell>
                <TableCell className="tableCell">Height</TableCell>
                <TableCell className="tableCell">Weight</TableCell>
                <TableCell className="tableCell">BMI</TableCell>
                <TableCell className="tableCell">BMR</TableCell>
                <TableCell className="tableCell">Assessment Date</TableCell>
                <TableCell className="tableCell">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                >
                  <TableCell className="tableCell" > {row.member_id} </TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    );
}

export default Assessmenttable