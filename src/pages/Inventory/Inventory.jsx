import React from 'react';
import "./inventory.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import Button5 from '../../components/buttoncomponent/Button5';
import Table2 from '../../components/table/Table2';

const Inventory = () => {
  return (
    <div className='inventory'>
        <Sidebar />
        <div className="inventoryContainer">
            <Navbar />
            <div className="p-24">
                <h1 className="hometitle">INVENTORY</h1>
            </div>
            <br />
            <Button5 />
            <br />
            <div className="bottom">
              <div className="right">
                <div className='title101'>
                    <h2 className="hometitle">FILTER HERE</h2>
                </div>
                <br/><br />
                <form>
                  <div className="formInput">
                    <label>Product Name</label>
                    <input type="text" placeholder=""/>
                  </div>
                  <br /><br />
                  <div class="col-md-5">
                    <label>Product Type</label>
                    <select class="custom-select" id="country" required>
                      <option value="">Select Product Type</option>
                      <option>Select Product Type</option>
                      <option>Vitamins, Minerals & Supplements</option>
                      <option>wear</option>
                    </select>
                  </div>
                  <div class="col-md-5">
                    <label>Brand</label>
                    <select class="custom-select" id="country" required>
                      <option value="">Select a Brand</option>
                      <option>Select a Brand</option>
                      <option>BPI Sports</option>
                      <option>Nike</option>
                      <option>Adidas</option>
                      <option>Puma</option>
                    </select>
                  </div>
                  <br /><br />
                  <div class="col-md-5">
                    <label>Category</label>
                    <select class="custom-select" id="country" required>
                      <option value="">Select a Category</option>
                      <option>Select a Category</option>
                      <option>Health & Personal Care</option>
                      <option>Sports</option>
                    </select>
                  </div>
                  <br />
                  <button>Search</button>
                  <button>Reset</button>
                </form>
              </div>
            </div>
            <br /><br />
            <Table2 />
        </div>
    </div>
  )
}

export default Inventory