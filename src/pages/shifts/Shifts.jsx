import React from 'react';
import "./shifts.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";

const Shifts = () => {
  return (
    <div className='shifts'>
        <Sidebar />
        <div className="shiftsContainer">
            <Navbar />
            <div className="p-24">
                <h1 className="hometitle">SHIFTS</h1>
            </div>
            <br /><br />
        </div>
    </div>
  )
}

export default Shifts