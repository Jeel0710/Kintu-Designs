import React from 'react';
import "./dietplan.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Dietplantable from '../../components/datatable/Dietplantable';

const Dietplan = () => {
  return (
    <div className='dietplan'>
        <Sidebar />
        <div className="dietplanContainer">
            <Navbar />
            <div className="p-24">
                <h1 className="hometitle">DIET PLAN</h1>
            </div>
            <br /><br />
            <div className="bottom">
              <div className="right">
                <div className='title101'>
                    <h2 className="hometitle">FILTER HERE</h2>
                </div>
                <br/><br />
                <form>
                  <div className="formInput">
                    <label>Start Date</label>
                    <input type="date" placeholder="date"/>
                  </div>
                  <div className="formInput">
                    <label>End Date</label>
                    <input type="date" placeholder="date"/>
                  </div>
                  <br />
                  <button>Search</button>
                  <button>Reset</button>
                </form>
              </div>
            </div>
            <div className="search">
              <input type="text" placeholder="   Search Here" />
              <SearchOutlinedIcon className="icon"/>
            </div>
            <br />
            <Dietplantable />
        </div>
    </div>
  )
}

export default Dietplan