import React from 'react';
import "./phototracking.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import Searchitem from '../../components/searchItem/Searchitem';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Phototracking = () => {
  return (
    <div className='phototracking'>
        <Sidebar />
        <div className="trackingContainer">
            <Navbar />
            <div className="p-24">
                <h1 className="hometitle">PHOTO TRACKING</h1>
            </div>
            <br /><br />
            <div className="search">
              <input type="text" placeholder="Search..." />
              <SearchOutlinedIcon className="icon"/>
            </div>
            <Searchitem />
        </div>
    </div>
  )
}

export default Phototracking