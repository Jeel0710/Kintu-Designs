import React from 'react';
import "./widget.scss"
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import BoyIcon from '@mui/icons-material/Boy';
import GirlIcon from '@mui/icons-material/Girl';

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 40;

    switch(type){
      case "Total Employee":
        data = {
          title: "TOTAL EMPLOYEE",
          isMoney: false,
          icon: <PeopleOutlineIcon className="icon" 
          style={{
            color: "rgb(33, 63, 129)",
            backgroundColor: "lightblue",
          }}/>,
        };
        break;
        case "Active Employee":
        data = {
          title: "ACTIVE EMPLOYEE",
          isMoney: false,
          icon: <PersonOutlineIcon className="icon"
          style={{
            color: "green",
            backgroundColor: "rgba(0, 128, 0, 0.2)",
          }}
          />,
        };
        break;
        case "Inactive Employee":
        data = {
          title: "INACTIVE EMPLOYEE",
          isMoney: false,
          icon: <PersonRemoveIcon className="icon"
          style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}/>,
        };
        break;
        case "This Month Classes":
        data = {
          title: "THIS MONTH CLASSES",
          isMoney: false,
          icon: <DateRangeIcon className="icon"
          style={{
            color: "purple",
            backgroundColor: "rgba(128, 0, 128, 0.2)",
          }}
          />,
        };
        break;
        case "This Month Appointments":
        data = {
          title: "THIS MONTH APPOINTMENTS",
          isMoney: false,
          icon: <PermContactCalendarIcon className="icon"
          style={{
            color: "goldenrod",
            backgroundColor: "rgba(218, 165, 32, 0.2)",
          }}
          />,
        };
        break;
        case "Total Clients":
        data = {
          title: "TOTAL CLIENT",
          isMoney: false,
          icon: <PeopleOutlineIcon className="icon" 
          style={{
            color: "rgb(33, 63, 129)",
            backgroundColor: "lightblue",
          }}/>,
        };
        break;
        case "Active Client":
        data = {
          title: "ACTIVE CLIENT",
          isMoney: false,
          icon: <PersonOutlineIcon className="icon" 
          style={{
            color: "green",
            backgroundColor: "rgba(0, 128, 0, 0.2)",
          }}/>,
        };
        break;
        case "Inactive Client":
        data = {
          title: "INACTIVE CLIENT",
          isMoney: false,
          icon: <PersonRemoveIcon className="icon" 
          style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}/>,
        };
        break;
        case "Male Client":
        data = {
          title: "MALE CLIENT",
          isMoney: false,
          icon: <BoyIcon className="icon" 
          style={{
            color: "purple",
            backgroundColor: "rgba(128, 0, 128, 0.2)",
          }}/>,
        };
        break;
        case "Female Client":
        data = {
          title: "FEMALE CLIENT",
          isMoney: false,
          icon: <GirlIcon className="icon" 
          style={{
            color: "goldenrod",
            backgroundColor: "rgba(218, 165, 32, 0.2)",
          }}/>,
        };
        break;
      default:
        break;
    }

  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">
              {data.isMoney && "$"} {amount}
            </span>
        </div>
        <div className="right">
            {data.icon}
        </div>
    </div>
  )
}

export default Widget