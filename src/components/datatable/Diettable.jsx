import React from 'react';
import "./diettable.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';

const Diettable = () => {
    const rows = [
        {
            member_id: "1",
            channel: "Breakfast",
            mail: "08:00 AM",
            status: "Active",
            date: "09:00 AM",
            icon: <EditIcon />
        },
        {
            member_id: "2",
            channel: "Morning Snacks",
            mail: "10:00 AM",
            status: "Active",
            date: "11:00 AM	",
            icon: <EditIcon />
        },
        {
            member_id: "3",
            channel: "Lunch",
            mail: "01:00 PM",
            status: "Active",
            date: "02:00 PM	",
            icon: <EditIcon />
        },
        {
            member_id: "4",
            channel: "Evening Snacks",
            mail: "05:00 PM",
            status: "Active",
            date: "06:00 PM	",
            icon: <EditIcon />
        },
        {
            member_id: "5",
            channel: "Dinner",
            mail: "09:00 PM",
            status: "Active",
            date: "10:00 PM	",
            icon: <EditIcon />
        },
        {
            member_id: "6",
            channel: "Bedtime Snacks",
            mail: "10:30 PM",
            status: "Active",
            date: "11:00 PM	",
            icon: <EditIcon />
        },
        {
            member_id: "7",
            channel: "Pre Breakfast",
            mail: "06:30 AM",
            status: "Active",
            date: "07:00 AM	",
            icon: <EditIcon />
        },
        {
            member_id: "8",
            channel: "Post Lunch",
            mail: "03:00 PM",
            status: "Active",
            date: "03:30 PM	",
            icon: <EditIcon />
        },
    ]

    return (
        <TableContainer component={Paper} className="diettable">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className="heading1">
                <TableCell className="tableCell">No</TableCell>
                <TableCell className="tableCell">Session Name</TableCell>
                <TableCell className="tableCell">Start Time</TableCell>
                <TableCell className="tableCell">End Time</TableCell>
                <TableCell className="tableCell">Status</TableCell>
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
                  <TableCell className="tableCell" >{row.mail}</TableCell>
                  <TableCell className="tableCell" >{row.date}</TableCell>
                  <TableCell className="tableCell" >
                    <span className={`status ${row.status}`}>{row.status}</span>
                  </TableCell>
                  <TableCell className="tableCell" >
                      <span className="icon01">{row.icon}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    );
}

export default Diettable