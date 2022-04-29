import React from 'react';
import "./notification.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import Notificationbox from '../../components/notificationbox/Notificationbox';
import Notificationtable from '../../components/notificationbox/Notificationtable';

const Notification = () => {
  return (
    <div className="notification">
        <Sidebar />
        <div className="notificationContainer">
            <Navbar />
            <div className="p-24">
                <h1 className="hometitle">NOTIFICATION DETAILS</h1>
            </div>
            <br /><br />
            <div className="widgets">
                <Notificationbox type="Total SMS"/>
                <Notificationbox type="Follow Up SMS"/>
                <Notificationbox type="Payment SMS"/>
                <Notificationbox type="Birthday SMS"/>
                <Notificationbox type="Other SMS"/>
            </div>
            <div className="widgets">
                <Notificationbox type="Total Email"/>
                <Notificationbox type="Followup Emails"/>
                <Notificationbox type="Payment Email"/>
                <Notificationbox type="Birthday Email"/>
                <Notificationbox type="Other Emails"/>
            </div>
            <br/>
            <div className="bottom">
              <div className="right">
                <div className='title101'>
                    <h1 className="hometitle">FILTER</h1>
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
                  <div className="formInput">
                    <label>Response</label>
                    <input type="text" placeholder="response"/>
                  </div>
                  <br />
                  <button>Get Data</button>
                  <button>Reset</button>
                </form>
              </div>
            </div>
            <br />
            <div className="ntable">
                <div className="ntitle">ALL NOTIFICATIONS</div>
                <Notificationtable />
            </div>
        </div>
    </div>
  )
}

export default Notification