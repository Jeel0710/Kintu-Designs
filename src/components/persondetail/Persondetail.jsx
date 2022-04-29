import React from 'react';
import "./personaldetail.scss";
import EditIcon from '@mui/icons-material/Edit';

const Persondetail = ({ type }) => {
    let data;

  //temporary
  const amount1 = 1000;

    switch(type){
      case "John Doe":
        data = {
          title: "EMPLOYEE",
          isMoney: true,
          name: "John Doe",
          email: "johndoe@gmai.com",
          number: "+91 9998884441",
          img: "assets/images/entrepreneur.jpeg",
          position: "Accountant",
        };
        break;
        case "Dustin Porier":
        data = {
          title: "EMPLOYEE",
          isMoney: true,
          name: "Dustin Porier",
          email: "dustin@gmail.com",
          number: "+91 9998884441",
          img: "assets/images/persondetail/dustin.webp",
          position: "Trainer",
        };
        break;
        case "Mike Tyson":
        data = {
          title: "EMPLOYEE",
          isMoney: true,
          name: "Mike Tyson",
          email: "Mtyson@gmail.com",
          number: "+91 9998884441",
          img: "assets/images/persondetail/Mike-Tyson-1.jpg",
          position: "Trainer",
        };
        break;
        case "Conor Mcgregor":
        data = {
          title: "EMPLOYEE",
          isMoney: true,
          name: "Conor Mcgregor",
          email: "notorous@gmail.com",
          number: "+91 9998884441",
          img: "assets/images/persondetail/Conor_McGregor_2018.jpg",
          position: "Trainer",
        };
        break;
        case "Charles Olivera":
        data = {
          title: "EMPLOYEE",
          isMoney: true,
          name: "Charle Olivera",
          email: "olivera@gmail.com",
          number: "+91 9998884441",
          img: "assets/images/persondetail/images.jpg",
          position: "Trainer",
        };
        break;
        case "Kamaru Usman":
        data = {
          title: "EMPLOYEE",
          isMoney: true,
          name: "Kamaru Usman",
          email: "p4p@gmail.com",
          number: "+91 9998884441",
          img: "assets/images/persondetail/download.jpg",
          position: "Diet-Handler",
        };
        break;
      default:
        break;
    }

  return (
    <div className="persondetail">
        <div className="top">
            <div className="left">
                <h1 className="title">{data.title}</h1>
                <div className="editbutton"><EditIcon /></div>
                <div className="item">
                    <img 
                        src={data.img} 
                        alt="" 
                        className="itemImg" 
                    />
                    <div className="details">
                        <h1 className="itemTitle">{data.name}</h1>
                        <div className="detailItem">
                            <span className="itemKey">Email: </span>
                            <span className="itemValue">{data.email}</span>
                        </div>
                        <div className="detailItem">
                            <span className="itemKey">Number: </span>
                            <span className="itemValue">{data.number}</span>
                        </div>
                        <div className="detailItem">
                            <span className="itemKey">Position: </span>
                            <span className="itemValue">{ data.position }</span>
                        </div>
                        <div className="detailItem">
                            <span className="itemKey">Salary: </span>
                            <span className="itemValue">{data.isMoney && "$"} {amount1}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right"></div>
        </div>
        <div className="bottom"></div>
    </div>
  )
}

export default Persondetail