import React from 'react';
import "./featured.scss";
import DateRangeIcon from '@mui/icons-material/DateRange';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";



const Featured = ({ type }) => {
  let data;

  switch(type){
    case "members":
      data={
        title:"MEMBERS",
      };
      break;
    case "member-age-group":
      data={
        title:"MEMBER AGE GROUP",
      };
      break;
    default:
      break;
    }


  return (
    <div className="featured">
        <div className="top">
            <h3 className="title">{data.title}</h3>
            <DateRangeIcon className="icon" fontSize='small' 
            style={{
              color: "black",
              backgroundColor: "rgba(0, 128, 0, 0.2)",
            }}
            />
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} strokeWidth={10} text={"96"}/>
            </div>
        </div>
    </div>
  )
}

export default Featured