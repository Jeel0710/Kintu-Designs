import React from 'react';
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import './client.scss';
import Widget from "../../components/widget/Widget";
import Button2 from '../../components/buttoncomponent/Button2';
import Clientdetails from '../../components/clientdetails/Clientdetails';


const Client = () => {
  return (
    <div className="client">
        <Sidebar />
        <div className="classContainer">
            <Navbar />
            <div className="p-24">
              <h1 className="hometitle">CLIENT</h1>
            </div>
            <br /><br />
            <div className="buttoncomponent1">
              <Button2 />
            </div>
            <br/>
            <div className="widgets">
                <Widget type="Total Clients"/>
                <Widget type="Active Client"/>
                <Widget type="Inactive Client"/>
                <Widget type="Male Client"/>
                <Widget type="Female Client"/>
            </div>
            <div className="employeedetail">
              <Clientdetails type="Jeorge Grey"/>
              <Clientdetails type="Gina Railey"/>
              <Clientdetails type="Dave Johnson"/>
            </div>
            <br />
            <div className="employeedetail">
              <Clientdetails type="David wills"/>
              <Clientdetails type="May Mosely"/>
              <Clientdetails type="Mattew Monis"/>
            </div>
        </div>
    </div>
  )
}

export default Client