import React from 'react';
import "./supplier.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import Button4 from "../../components/buttoncomponent/Button4";
import Suppliertable from '../../components/supplier/Suppliertable';

const Supplier = () => {
  return (
    <div className='supplier'>
      <Sidebar />
      <div className="suppliercontainer">
        <Navbar />
        <div className="p-24">
          <h1 className="hometitle">SUPPLIER</h1>
        </div>
        <br />
        <Button4 />
        <br />
        <div className="bottom">
              <div className="right">
                <div className='title101'>
                    <h1 className="hometitle">FILTER</h1>
                </div>
                <br/><br />
                <form>
                  <div className="formInput">
                    <label>Supplier</label>
                    <input type="text" placeholder="Select a Supplier"/>
                  </div>
                  <br />
                  <button>Search</button>
                  <button>Reset</button>
                </form>
              </div>
         </div>
         <br />
        <div className="ntable">
        <div className="ntitle">SUPPLIERS LIST</div>
          <Suppliertable />
        </div>
      </div>
    </div>
  )
}

export default Supplier