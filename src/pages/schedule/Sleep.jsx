import React from 'react';
import "./sleep.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import Sleeptable from '../../components/datatable/Sleeptable';

const Sleep = () => {
  return (
    <div className='sleep'>
        <Sidebar />
        <div className="sleepContainer">
            <Navbar />
            <div className="p-24">
                <h1 className="hometitle">USER SLEEP DETAILS</h1>
            </div>
            <br /><br />
            <div className="bottom">
              <div className="right">
                <div className='title101'>
                    <h2 className="hometitle">FILTER</h2>
                </div>
                <br/><br />
                <form>
                  <div className="formInput">
                    <label>Search</label>
                    <input type="text" placeholder=" "/>
                  </div>
                  <br />
                  <button>Search</button>
                  <button>Reset</button>
                </form>
              </div>
            </div>
            <br /><br />
            <Sleeptable />
        </div>
    </div>
  )
}

export default Sleep