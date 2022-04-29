import React from 'react';
import "./suppliertable.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

const Suppliertable = () => {
    const rows = [
        {
            company_name: "Fruits Supply Masters",
            supplier: "NG Lim",
            mail: "supplier2@tecdairy.com",
            phone: "123456789",
            Address: "B 406, Aagam Shopping world ,vesu ,canal road, Surat, Gujarat, India, 395007",
            status: "Active",
        },
        {
            company_name: "testE",
            supplier: "phil",
            mail: "phil@mail.com",
            phone: "9897989795",
            Address: "Enl park town, surat, gujarat, india, 395002",
            status: "Active"
        },
        {
            company_name: "Whey Protein",
            supplier: "Big Muscles",
            mail: "big@muscle.com",
            phone: "899654231",
            Address: "Adajan, Surat, Gujarat, India, 395009",
            status: "Active",
        },
        {
            company_name: "Real tiles",
            supplier: "Denish",
            mail: "admin@wesmartpost.com",
            phone: "999888754",
            Address: "Tp13 , Nizampura, Vadodara",
            status: "Inacticve",
        },
    ]

    return (
        <TableContainer component={Paper} className="suppliertable">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className="heading1">
                <TableCell className="tableCell">Company Name</TableCell>
                <TableCell className="tableCell">Supplier Name</TableCell>
                <TableCell className="tableCell">Email</TableCell>
                <TableCell className="tableCell">Phone</TableCell>
                <TableCell className="tableCell">Address</TableCell>
                <TableCell className="tableCell">Status</TableCell>
                <TableCell className="tableCell">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                >
                  <TableCell className="tableCell" > {row.company_name} </TableCell>
                  <TableCell className="tableCell" >{row.supplier}</TableCell>
                  <TableCell className="tableCell" >{row.mail}</TableCell>
                  <TableCell className="tableCell" >{row.phone}</TableCell>
                  <TableCell className="tableCell" >{row.Address}</TableCell>
                  <TableCell className="tableCell" >
                    <span className={`status ${row.status}`}>{row.status}</span>
                  </TableCell>
                  <TableCell className="tableCell" >
                      <span className="icon"><EditIcon /></span>
                      <span className="icon1"><FullscreenIcon /></span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    );
}

export default Suppliertable