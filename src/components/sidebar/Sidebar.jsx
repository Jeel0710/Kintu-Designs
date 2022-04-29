import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import FlagIcon from '@mui/icons-material/Flag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import ArticleIcon from '@mui/icons-material/Article';
import LogoutIcon from '@mui/icons-material/Logout';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import HotelIcon from '@mui/icons-material/Hotel';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { Link } from "react-router-dom";

export const Sidebar = () => {

  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{textDecoration: "none"}}>
                <img src="assets/images/Membership.jpg" alt="" className="image01" />
                <span className="logo">CBPATEL Health club</span>
            </Link>
        </div>
        <div className="center">
            <ul>
                <hr />
                <br />
                <p className="title">Applications</p>
                <Link to="/" style={{textDecoration: "none"}}>
                <li>
                    <DashboardIcon className="icon" />
                    <span className="App-title">Dashboard</span>
                </li>
                </Link>
                <Link to="/employee" style={{textDecoration: "none"}}>
                <li>
                    <AccountBoxIcon className="icon" />
                    <span className="App-title">Employee</span>
                </li>
                </Link>
                <Link to="/client" style={{textDecoration: "none"}}>
                <li>
                    <PersonIcon className="icon" />
                    <span className="App-title">Clients</span>
                </li>
                </Link>
                <Link to="/notification" style={{textDecoration: "none"}}>
                <li>
                    <NotificationsNoneIcon className="icon" />
                    <span className="App-title">Send Notifications</span>
                </li>
                </Link>
                    <p className="title-1">Program Managment</p>
                <Link to="/plan" style={{textDecoration: "none"}}>
                <li className="sub-button">
                    <CreateNewFolderIcon className="icon" />
                    <span className="App-title">Create a Plan</span>
                </li>
                </Link>
                <Link to="/program" style={{textDecoration: "none"}}>
                <li className="sub-button">
                    <AddCircleOutlineIcon className="icon" />
                    <span className="App-title">Create a Program</span>
                </li>
                </Link>
                <Link to="/tracking" style={{textDecoration: "none"}}>
                <li>
                    <DateRangeIcon className="icon" />
                    <span className="App-title">Photo tracking</span>
                </li>
                </Link>
                <p className="title-1">Schedule</p>
                <Link to="/diet" style={{textDecoration: "none"}}>
                <li className="sub-button">
                    <FastfoodIcon className="icon" />
                    <span className="App-title">Diet Session</span>
                </li>
                </Link>
                <Link to="/water" style={{textDecoration: "none"}}>
                <li className="sub-button">
                    <LocalDrinkIcon className="icon" />
                    <span className="App-title">Water Intake</span>
                </li>
                </Link>
                <Link to="/sleep" style={{textDecoration: "none"}}>
                <li className="sub-button">
                    <HotelIcon className="icon" />
                    <span className="App-title">Sleep Session</span>
                </li>
                </Link>
                <Link to="/diet-plan" style={{textDecoration: "none"}}>
                <li className="sub-button">
                    <RestaurantMenuIcon className="icon" />
                    <span className="App-title">Diet Plan</span>
                </li>
                </Link>
                <Link to="/exercise" style={{textDecoration: "none"}}>
                <li className="sub-button">
                    <FitnessCenterIcon className="icon" />
                    <span className="App-title">Exercise Schedule</span>
                </li>
                </Link>
                <Link to="/shifts" style={{textDecoration: "none"}}>
                <li>
                    <AccessTimeFilledIcon className="icon" />
                    <span className="App-title">Shifts</span>
                </li>
                </Link>
                <Link to="/reports" style={{textDecoration: "none"}}>
                <li>
                    <FlagIcon className="icon" />
                    <span className="App-title">Reports</span>
                </li>
                </Link>
                <Link to="/inventory" style={{textDecoration: "none"}}>
                <li>
                    <ShoppingCartIcon className="icon" />
                    <span className="App-title">Inventory</span>
                </li>
                </Link>
                <li>
                    <AttachMoneyIcon className="icon" />
                    <span className="App-title">Expenses</span>
                </li>
                <Link to="/bodyreports" style={{textDecoration: "none"}}>
                <li>
                    <EmojiPeopleIcon className="icon" />
                    <span className="App-title">Body Assessment Reports</span>
                </li>
                </Link>
                <Link to="/class" style={{textDecoration: "none"}}>
                <li>
                    <FitnessCenterIcon className="icon" />
                    <span className="App-title">Classes</span>
                </li>
                </Link>
                <Link to="/membership" style={{textDecoration: "none"}}>
                <li>
                    <CardMembershipIcon className="icon" />
                    <span className="App-title">Gym Membership</span>
                </li>
                </Link>
                <li>
                    <EventNoteIcon className="icon" />
                    <span className="App-title">Event</span>
                </li>
                <li>
                    <LogoutIcon className="icon" />
                    <span className="App-title">Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}
