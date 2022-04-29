import React from 'react';
import "./table1.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Table1 = () => {
    const rows = [
        {
            id: 1,
            member_id: "CRM0000726",
            member_name: "ASUTOSH PATEL",
            mail: "ashutosh@test.com",
            membership_name: "Signature Queens",
            membership_price: 58999,
            date: "11-Mar-2022",
            status: "Active",
        },
        {
            id: 2,
            member_id: "CRM0000727",
            member_name: "SEETAL SHAH",
            mail: "sheetal@test.com",
            membership_name: "Signature Queens",
            membership_price: 48989,
            date: "11-Jan-2021",
            status: "Active",
        },
        {
            id: 3,
            member_id: "CRM0000730",
            member_name: "KRISIL PATEL",
            mail: "krisil@test.com",
            membership_name: "Signature Queens",
            membership_price: 8999,
            date: "19-Feb-2022",
            status: "Active",
        },
        {
            id: 4,
            member_id: "CRM0000829",
            member_name: "TIRTH PATEL",
            mail: "tirth@test.com",
            membership_name: "Life Style Kings",
            membership_price: 73999,
            date: "07-Nov-2021",
            status: "Active",
        },
        {
            id: 5,
            member_id: "CRM0000222",
            member_name: "TONY STARK",
            mail: "tony@test.com",
            membership_name: "Signature Queens",
            membership_price: 18666,
            date: "11-Nov-2020",
            status: "Inactive",
        },
        {
            id: 6,
            member_id: "CRM0000726",
            member_name: "URVI MISTRY",
            mail: "urvimistry@test.com",
            membership_name: "Life Style Kings",
            membership_price: 58999,
            date: "11-Nov-2022",
            status: "Active",
        },
        {
            id: 7,
            member_id: "CRM0000226",
            member_name: "NEHA SHAH",
            mail: "neha@test.com",
            membership_name: "Life Style Kings",
            membership_price: 5999,
            date: "11-July-2020",
            status: "Inactive",
        },
        {
            id: 8,
            member_id: "CRM0000007",
            member_name: "JEEL DAMOR",
            mail: "jeel@test.com",
            membership_name: "Signature Queens",
            membership_price: 99999,
            date: "29-Feb-2022",
            status: "Active",
        },
    ]
    return (
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className="heading">
                <TableCell className="tableCell">No</TableCell>
                <TableCell className="tableCell">Member ID</TableCell>
                <TableCell className="tableCell">Member Name</TableCell>
                <TableCell className="tableCell">E-Mail Address</TableCell>
                <TableCell className="tableCell">Membership Name</TableCell>
                <TableCell className="tableCell">Membership Price</TableCell>
                <TableCell className="tableCell">Join Date</TableCell>
                <TableCell className="tableCell">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                >
                  <TableCell className="tableCell" > {row.id} </TableCell>
                  <TableCell className="tableCell" >{row.member_id}</TableCell>
                  <TableCell className="tableCell" >{row.member_name}</TableCell>
                  <TableCell className="tableCell" >{row.mail}</TableCell>
                  <TableCell className="tableCell" >{row.membership_name}</TableCell>
                  <TableCell className="tableCell" >{row.membership_price}</TableCell>
                  <TableCell className="tableCell" >{row.date}</TableCell>
                  <TableCell className="tableCell" >
                    <span className={`status ${row.status}`}>{row.status}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    );
}

export default Table1