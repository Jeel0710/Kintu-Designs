import React from 'react';
import "./notificationbox.scss";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SyncRoundedIcon from '@mui/icons-material/SyncRounded';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import CakeRoundedIcon from '@mui/icons-material/CakeRounded';
import SmsRoundedIcon from '@mui/icons-material/SmsRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import ForwardToInboxRoundedIcon from '@mui/icons-material/ForwardToInboxRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';


const Notificationbox = ({ type }) => {
  let data;

  //temporary
  // const amount = 40;

    switch(type){
      case "Total SMS":
        data = {
          title: "Total SMS",
          isMoney: false,
          number: "3",
          icon: <ChatBubbleIcon className="icon" 
          style={{
            color: "rgb(33, 63, 129)",
            backgroundColor: "lightblue",
          }}/>,
        };
        break;
        case "Follow Up SMS":
        data = {
          title: "Follow Up SMS",
          isMoney: false,
          number: "0",
          icon: <SyncRoundedIcon className="icon"
          style={{
            color: "green",
            backgroundColor: "rgba(0, 128, 0, 0.2)",
          }}
          />,
        };
        break;
        case "Payment SMS":
        data = {
          title: "Payment SMS",
          isMoney: false,
          number: "1",
          icon: <PaymentRoundedIcon className="icon"
          style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}/>,
        };
        break;
        case "Birthday SMS":
        data = {
          title: "Birthday SMS",
          isMoney: false,
          number: "4",
          icon: <CakeRoundedIcon className="icon"
          style={{
            color: "purple",
            backgroundColor: "rgba(128, 0, 128, 0.2)",
          }}
          />,
        };
        break;
        case "Other SMS":
        data = {
          title: "Other SMS",
          isMoney: false,
          number: "1",
          icon: <SmsRoundedIcon className="icon"
          style={{
            color: "goldenrod",
            backgroundColor: "rgba(218, 165, 32, 0.2)",
          }}
          />,
        };
        break;
        case "Total Email":
        data = {
          title: "Total Email",
          isMoney: false,
          number: "5",
          icon: <EmailRoundedIcon className="icon" 
          style={{
            color: "rgb(33, 63, 129)",
            backgroundColor: "lightblue",
          }}/>,
        };
        break;
        case "Followup Emails":
        data = {
          title: "Followup Emails",
          isMoney: false,
          number: "0",
          icon: <ForwardToInboxRoundedIcon className="icon" 
          style={{
            color: "green",
            backgroundColor: "rgba(0, 128, 0, 0.2)",
          }}/>,
        };
        break;
        case "Payment Email":
        data = {
          title: "Payment Emails",
          isMoney: false,
          number: "1",
          icon: <PaymentRoundedIcon className="icon" 
          style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}/>,
        };
        break;
        case "Birthday Email":
        data = {
          title: "Birthday Email",
          isMoney: false,
          number: "0",
          icon: <CakeRoundedIcon className="icon" 
          style={{
            color: "purple",
            backgroundColor: "rgba(128, 0, 128, 0.2)",
          }}/>,
        };
        break;
        case "Other Emails":
        data = {
          title: "Other Emails",
          isMoney: false,
          number: "4",
          icon: <MailOutlineRoundedIcon className="icon" 
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
              { data.number }
            </span>
        </div>
        <div className="right">
            {data.icon}
        </div>
    </div>
  )
}

export default Notificationbox