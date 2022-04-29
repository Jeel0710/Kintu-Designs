import React from 'react';
import "./addsupplier.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from '../../components/navbar/Navbar';
import DriveFolderUploadoutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";



const AddSupplier = () => {
  return (
    <div className='addsupplier'>
        <Sidebar />
        <div className="addsuplierContainer">
            <Navbar />
            <div className="p-24">
                <h1 className="hometitle">Supppliers</h1>
            </div>
            <br /><br />
            <div className="top">
              <h1 className="title">CREATE SUPPLIER</h1>
            </div>
            <div className="bottom">
              <div className="left">
                <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" />
                <br /><br /><br />
                <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadoutlinedIcon className="icon" style={{cursor: "pointer"}} />
                  </label>
                  <input type="file" id="file" style={{display:"none"}}/>
                </div>
              </div>
              <div className="right">
                <form>
                  <div className="formInput">
                    <label>Company*</label>
                    <input type="text" placeholder="Kintu Design pvt lmt"/>
                  </div>
                  <div className="formInput">
                    <label>Supplier Name*</label>
                    <input type="text" placeholder="John Doe"/>
                  </div>
                  <div className="formInput">
                    <label>VAT Number*</label>
                    <input type="text" placeholder="8967893"/>
                  </div>
                  <div className="formInput">
                    <label>GST Number*</label>
                    <input type="text" placeholder="44-567"/>
                  </div>
                  <div className="formInput">
                    <label>Email Address*</label>
                    <input type="text" placeholder="john@gmail.com"/>
                  </div>
                  <div className="formInput">
                    <label>Phone*</label>
                    <input type="text" placeholder="+1 22746589"/>
                  </div>
                  <div className="formInput">
                    <label>Address*</label>
                    <input type="text" placeholder="Estl Road, Surat"/>
                  </div>
                  <div className="formInput">
                    <label>City*</label>
                    <input type="text" placeholder="Surat"/>
                  </div>
                  <div className="formInput">
                    <label>State*</label>
                    <input type="text" placeholder="Gujarat"/>
                  </div>
                  <div className="formInput">
                    <label>Postal Code*</label>
                    <input type="text" placeholder="390234"/>
                  </div>
                  <div className="formInput">
                    <label>Country*</label>
                    <input type="text" placeholder="India"/>
                  </div>
                  <br />
                  <button>Save</button>
                </form>
              </div>
          </div>
        </div>
    </div>
  )
}

export default AddSupplier