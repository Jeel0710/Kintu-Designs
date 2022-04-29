import React from 'react';
import "./plan.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import Diettable from '../../components/plantable/Diettable';
import Popup1 from '../../components/popup/Popup1';

const Plan = () => {
  return (
    <div className='plan'>
        <Sidebar />
        <div className="planContainer">
            <Navbar />
            <div className="p-24">
                <h1 className="hometitle">Create Plans</h1>
            </div>
            <br /><br />
            <div className="button2">
                <button>DIET PLAN LIST</button>
                <button>EXERCISE PLAN LIST</button>
            </div>
            <div className="ptable">
                <div className="ptitle">
                DIET PLAN LIST
                <div className="pbutton">
                    <button>CREATE DIET PLAN</button>
                    <Popup1 tigger={false}>
                        <h3>My Popup</h3>
                    </Popup1>
                    OR
                    <button>UPLOAD DIET PLAN</button>
                </div>
                </div>
                <Diettable />
            </div>
        </div>
    </div>
  )
}

export default Plan