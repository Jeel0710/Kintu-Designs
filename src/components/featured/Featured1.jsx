import React from 'react';
import "./featured1.scss";
import DateRangeIcon from '@mui/icons-material/DateRange';

const Featured1 = ({ type }) => {
    let data;

        switch(type){
            case "inquiry":
                data={
                    title:"INQUIERY",
                };
                break;
            case "app-users":
                data={
                    title:"APP USERS",
                };
                break;
            case "month-results":
                data={
                    title:"MONTH RESULTS",
                };
                break;
            case "membership-expired":
                data={
                    title:"MEMBERSHIP EXPIRED",
                };
                break;
            case "consultants-sales":
                data={
                    title:"CONSULTANTS SALES",
                };
                break;
            case "payments-efficiency":
                data={
                    title:"PAYMENTS EFFICIENCY",
                };
                break;
            default:
                break;
        }

  return (
    <div className="featured1">
        <div className="top">
            <h3 className="title">{data.title}</h3>
            <DateRangeIcon className="icon"  fontSize='small' 
            style={{
              color: "black",
              backgroundColor: "rgba(0, 128, 0, 0.2)",
            }}
            />
        </div>
        <div className="center">
            <span className="data-available">NO DATA AVAILABLE</span>
        </div>
    </div>
  )
}

export default Featured1