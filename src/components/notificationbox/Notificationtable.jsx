import React from 'react';
import "./notificationtable.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Notificationtable = () => {
    const rows = [
        {
            member_id: "USER_PACKAGE_EXPIRE",
            channel: "Email",
            mail: "Abhinay Sharma",
            status: "Delivered",
            date: "21 Mar 2022 , 05:10 AM",
            icon: <VisibilityIcon />
        },
        {
            member_id: "Membership Renewal",
            channel: "Email",
            mail: "Swapna Rathod",
            status: "Delivered",
            date: "21 Mar 2022 , 03:40 AM",
            icon: <VisibilityIcon />
        },
        {
            member_id: "USER_PAYMENT",
            channel: "SMS",
            mail: "Mehul Desai",
            status: "Delivered",
            date: "02 Mar 2022 , 08:19 AM",
            icon: <VisibilityIcon />
        },
        {
            member_id: "USER_ATTENDANCE",
            channel: "Email",
            mail: "Mehul Desai",
            status: "Delivered",
            date: "02 Mar 2022 , 08:19 AM",
            icon: <VisibilityIcon />
        },
        {
            member_id: "USER_ATTENDANCE",
            channel: "Email",
            mail: "Abhay Bhingradia",
            status: "Delivered",
            date: "22 Feb 2022 , 03:37 PM",
            icon: <VisibilityIcon />
        },
        {
            member_id: "USER_BIRTHDAY",
            channel: "SMS",
            mail: "Abhinav Agarwal",
            status: "Delivered",
            date: "18 Sep 2019 , 07:44 AM",
            icon: <VisibilityIcon />
        },
        {
            member_id: "7748881",
            channel: "SMS",
            mail: "Neha Shah",
            status: "Failed",
            date: "07 May 2019 , 06:48 AM",
            icon: <VisibilityIcon />
        },
        {
            member_id: "7748881",
            channel: "SMS",
            mail: "Jeel Damor",
            status: "Failed",
            date: "21 Mar 2022 , 05:10 AM",
            icon: <VisibilityIcon />
        },
    ]

    return (
        <TableContainer component={Paper} className="notificationtable">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className="heading1">
                <TableCell className="tableCell">Type</TableCell>
                <TableCell className="tableCell">Channel</TableCell>
                <TableCell className="tableCell">User Name</TableCell>
                <TableCell className="tableCell">Status</TableCell>
                <TableCell className="tableCell">Sent Date</TableCell>
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
                  <TableCell className="tableCell" >
                    <span className={`status ${row.status}`}>{row.status}</span>
                  </TableCell>
                  <TableCell className="tableCell" >{row.date}</TableCell>
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

export default Notificationtable