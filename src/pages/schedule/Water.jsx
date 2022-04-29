import React from 'react';
import "./water.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";

const Water = () => {
  return (
    <div className='water'>
        <Sidebar />
        <div className="waterContainer">
            <Navbar />
            <div className="p-24">
                <h1 className="hometitle">WATER INTAKE</h1>
            </div>
            <br /><br />
            <div className="wiget">
                <h2 className="title01">WATER INTAKE SCHEDULE</h2>
                <br />
                <div class="col-md-5">
                    <select class="custom-select" id="country" required>
                      <option value="">Select User</option>
                      <option>Aashish_lakhani</option>
                      <option>Jeel_Patel</option>
                      <option>Ayush_shah</option>
                      <option>Dustin_Porior</option>
                      <option>Smit_Patel</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Water