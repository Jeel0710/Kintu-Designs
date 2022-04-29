import React from 'react';
import "./diet.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import Diettable from "../../components/datatable/Diettable";

const Diet = () => {
  return (
    <div className='diet'>
        <Sidebar />
        <div className="dietContainer">
            <Navbar />
            <div className="p-24">
                <h1 className="hometitle">DIET SESSION</h1>
            </div>
            <br/><br />
            <div className="add">
                <button className='session'>+ ADD SESSION</button>
            </div>
            <br/><br/>
            <div className="bottom">
              <div className="right">
                <div className='title101'>
                    <h2 className="hometitle">FILTER HERE</h2>
                </div>
                <br/><br />
                <form>
                    <div className="formInput">
                    <label>Response</label>
                    <input type="text" placeholder="response"/>
                  </div>
                  <div className="formInput">
                    <label>Session Status</label>
                    <input type="search" placeholder="All"/>
                  </div>
                  <div className="button1">
                    <button>Search</button>
                    <button>Reset</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="dtable">
            <div className="dtitle">DIET PLANNING</div>
              <Diettable />
            </div>
        </div>
    </div>
  )
}

export default Diet