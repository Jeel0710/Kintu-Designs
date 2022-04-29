import React from 'react';
import "./exercise.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Exercisetable from "../../components/datatable/Exercisetable";

const Exercise = () => {
  return (
    <div className='exercise'>
        <Sidebar />
        <div className="exerciseContainer">
            <Navbar />
            <div className="p-24">
                <h1 className="hometitle">EXERCISE PLAN</h1>
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
                  <div class="col-md-5">
                    <label>Select User</label>
                    <select class="custom-select" id="country" required>
                      <option value="">Select User</option>
                      <option>Aashish_lakhani</option>
                      <option>Abhay Bhingradia</option>
                      <option>Ayush_shah</option>
                      <option>Dustin_Porior</option>
                      <option>Smit_Patel</option>
                    </select>
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
            <Exercisetable />
        </div>
    </div>
  )
}

export default Exercise