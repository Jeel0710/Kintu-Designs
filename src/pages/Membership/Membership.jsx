import React from 'react';
import "./membership.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import Table3 from '../../components/table/Table3';

const Membership = () => {
  return (
    <div className='membership'>
        <Sidebar />
        <div className="membershipContainer">
            <Navbar />
            <div className="p-24">
                <h1 className="hometitle">MEMBERSHIP</h1>
            </div>
            <br />
            <div className="mtable">
                <div className="mtitle">
                Membership List
                <div className="mbutton">
                    <button>+   ADD NEW MEMBERSHIP</button>
                </div>
                </div>
                <Table3 />
            </div>
        </div>
    </div>
  )
}

export default Membership