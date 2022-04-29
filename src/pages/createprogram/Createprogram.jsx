import React from 'react';
import "./createprogram.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import Programtable from '../../components/plantable/Programtable';

const Createprogram = () => {
  return (
    <div className='createprogram'>
        <Sidebar />
        <div className="createprogramContainer">
            <Navbar />
            <div className="p-24">
                <h1 className="hometitle">CREATE A PROGRAM</h1>
            </div>
            <br /><br />
            <div className="ctable">
                <div className="ctitle">
                PROGRAM LIST
                <div className="cbutton">
                    <button>ADD PROGRAM</button>
                </div>
                </div>
                <Programtable />
            </div>
        </div>
    </div>
  )
}

export default Createprogram