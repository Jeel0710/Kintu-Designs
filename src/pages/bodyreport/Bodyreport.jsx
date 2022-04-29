import React from 'react';
import "./bodyreport.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import Assessmenttable from '../../components/plantable/Assessmenttable';

const Bodyreport = () => {
  return (
    <div className='bodyreports'>
    <Sidebar />
        <div className="bodyreportsContainer">
            <Navbar />
            <div className="p-24">
                <h1 className="hometitle">BODY ASSESSMENT REPORTS</h1>
            </div>
            <br /><br />
            <div className="ctable">
                <div className="ctitle">
                BODY ASSESSMENTS
                <div className="cbutton">
                    <button className='buttonComp1'>
                      EXPORT XLSX
                    </button>
                    <span className="iconbutton">
                      <DownloadForOfflineIcon />
                    </span>
                </div>
                </div>
                <br />
                <Assessmenttable />
            </div>
        </div>
    </div>
  )
}

export default Bodyreport