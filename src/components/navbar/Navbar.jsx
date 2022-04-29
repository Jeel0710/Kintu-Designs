import React from 'react'
import './navbar.scss'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EventIcon from '@mui/icons-material/Event';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';


export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="icon"/>
        </div>
        <div className="items">
          <div className="item">
            <NotificationsNoneIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <EventIcon className="icon" />
          </div>
          <div className="item">
            <ForumRoundedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ShoppingBagRoundedIcon className="icon" />
          </div>
          <div className="item">
            <img className="avatar" src="assets/images/Photo-1.jpg" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  )
}
