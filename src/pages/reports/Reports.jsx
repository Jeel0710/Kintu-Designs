import React from 'react';
import "./reports.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import PersonIcon from '@mui/icons-material/Person';


const Reports = () => {
  return (
    <div className='reports'>
    <Sidebar />
        <div className="reportsContainer">
            <Navbar />
            <div className="p-24">
                <h1 className="hometitle">REPORTS</h1>
            </div>
            <br /><br />
            <div className="headding1">
              <button className='titleContainer01'>
                  MEMBERS REPORTS
              </button>
              <button className='titleContainer02'>
                  PAYMENT REPORTS
              </button>
              <button className='titleContainer03'>
                  CRM REPORTS
              </button>
              <button className='titleContainer04'>
                  ATTENDANCE REPORTS
              </button>
              </div>
            <div className="title001">
              <span className='title002'>
                <PersonIcon />
                <h2>Members Reports</h2>
              </span>
              <br />
              <div className="para01">
                <h3 className="title010">- Members Reports</h3>
                <p className="paragraph01">Report generates a list of all contract members with their contact and contract data. The report allows you to generate a list of all clients put into the system by the membership status with its start and end date and their financial status.</p>
              </div>
              <br />
              <div className="para01">
                <h3 className="title010">- Due Memberships</h3>
                <p className="paragraph01">Report allows you to monitor the members with due membership by current month. The report allows you to generate a list of all clients put into the system with the membership expiring over current month with its start and due date.</p>
              </div>
              <br />
              <div className="para01">
                <h3 className="title010">- Personal Training</h3>
                <p className="paragraph01">Report generates a list of all PT contract members with their contact, contract data and PT Trainers. The report allows you to generate a list of all clients put into the system by the PT membership status with its start and end date, and their financial status.</p>
              </div>
              <br />
              <div className="para01">
                <h3 className="title010">- Membership Mesuarements</h3>
                <p className="paragraph01">Generate a list of club members with information about last measurement done on with body stats entered to the system and next to be done on.</p>
              </div>
              <br />
              <div className="para01">
                <h3 className="title010">- Expired Membership</h3>
                <p className="paragraph01">Report allows you to monitor the members with expired membership by expiry date. The report allows you to generate a list of all clients put into the system with the membership expired till date with its start and expiry date.</p>
              </div>
              <br />
              <div className="para01">
                <h3 className="title010">- Appointment Report</h3>
                <p className="paragraph01">Generate a list of club members with information about their scheduled appointment data and consultant. The report allows you to generate a list of all clients put into the system by the scheduled appointment with its date, time and status.</p>
              </div>
              <div className="para01">
                <h3 className="title010">- Assessment Report</h3>
                <p className="paragraph01">Generate a list of club members with information about their assessment data and consultant. The report allows you to generate a list of all clients put into the system by the assessment date, time and status with consultant.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Reports