import React from 'react'
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import "./class.scss";
import Datatable from '../../components/datatable/Datatable';

const Class = () => {
  return (
    <div className="class">
        <Sidebar />
        <div className="classContainer">
            <Navbar />
            <Datatable />
        </div>
    </div>
  )
}

export default Class