import React from 'react';
import "./employee.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Button3 from '../../components/buttoncomponent/Button3';
import Persondetail from '../../components/persondetail/Persondetail';

const Employee = () => {
  return (
    <div className="employee">
        <Sidebar />
        <div className="employeeContainer">
            <Navbar />
            <div className="p-24">
              <h1 className="hometitle">EMPLOYEE</h1>
            </div>
            <br /><br />
            <div className="buttoncomponent2">
              <Button3 />
            </div>
            <br/><br/>
            <div className="widgets">
                <Widget type="Total Employee"/>
                <Widget type="Active Employee"/>
                <Widget type="Inactive Employee"/>
                <Widget type="This Month Classes"/>
                <Widget type="This Month Appointments"/>
            </div>
            <div className="employeedetail">
              <Persondetail type="John Doe"/>
              <Persondetail type="Dustin Porier"/>
              <Persondetail type="Conor Mcgregor"/>
            </div>
            <div className="employeedetail">
              <Persondetail type="Mike Tyson"/>
              <Persondetail type="Charles Olivera"/>
              <Persondetail type="Kamaru Usman"/>
            </div>
        </div>
    </div>
  )
}

export default Employee