import React from 'react';
import "./clientdetail.scss";
import EditIcon from '@mui/icons-material/Edit';

const Clientdetails = ({ type }) => {
    let data;

  //temporary

    switch(type){
        case "Jeorge Grey":
        data = {
          title: "CLIENT",
          name: "Jeorge Grey",
          email: "grey@gmail.com",
          number: "+91 9998884441",
          address: "7 street xyz area, Delhi",
          img: "assets/images/persondetail/client/1.jpg",
        };
        break;
        case "Gina Railey":
        data = {
          title: "CLIENT",
          name: "Gina Railey",
          email: "gina@gmail.com",
          number: "+91 9998884441",
          address: "227 street xyz area, Mumbai",
          img: "assets/images/persondetail/client/2.jpg",
        };
        break;
        case "Dave Johnson":
        data = {
          title: "CLIENT",
          name: "Dave Johnson",
          email: "dave@gmail.com",
          number: "+91 9998884441",
          address: "44 street ab-xyz, London",
          img: "assets/images/persondetail/client/3.jpg",
        };
        break;
        case "David wills":
        data = {
          title: "CLIENT",
          name: "David wills",
          email: "wills@gmail.com",
          number: "+91 9998884441",
          address: "777 flats ab area, Baroda",
          img: "assets/images/persondetail/client/4.jpg",
        };
        break;
        case "May Mosely":
        data = {
          title: "CLIENT",
          name: "May Mosely",
          email: "May@gmail.com",
          number: "+91 9998884441",
          address: "14 street yz area, Pune",
          img: "assets/images/persondetail/client/5.jpg",
        };
        break;
        case "Mattew Monis":
        data = {
          title: "CLIENT",
          name: "Mattew Monis",
          email: "Monis@gmail.com",
          number: "+91 9998884441",
          address: "7 street xyz are, Surat",
          img: "assets/images/persondetail/client/6.jpg",
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
                            <span className="itemKey">Address: </span>
                            <span className="itemValue">{data.address}</span>
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

export default Clientdetails