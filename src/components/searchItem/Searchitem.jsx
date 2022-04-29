import React from 'react';
import "./searchitem.css";
import EggIcon from '@mui/icons-material/Egg';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import IcecreamIcon from '@mui/icons-material/Icecream';
import SetMealIcon from '@mui/icons-material/SetMeal';
import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';

const Searchitem = () => {
  return (
    <div className='searchItem'>
      <img src="assets/images/Eggdish.webp" alt="" className="siImg" />
      <div className="siDesc">
      <h1 className="siTitle">Egg Dish</h1>
        <span className="siDistance">by anna_strong</span>
        <span className="siTaxi0p">Ingredients: Egg, Bread</span>
        <span className="siSubtitle">
          Total Calories: 70
        </span>
        <span className="siFeatures">
          Serving: 5
        </span>
        <span className="siCancel0p">Assigned experts:  No employee Assigned </span>
        <span className="siCancel0pSubtitle">
          <br/>
          <button>View Details</button>
        </span>
      </div>
      <div className="siDetails">
        <div className='siRating'>
          <div className="icon">
            <EggIcon />Protin: 10g
          </div>
          <br />
          <div className="icon">
            <FastfoodIcon />Fats: 8g
          </div>
          <br/>
          <div className="icon">
            <IcecreamIcon />Carbs: 0g
          </div>
          <br />
          <div className="icon">
            <SetMealIcon />Fiber: 6g
          </div>
          <div className="siDetailIcon">
            <br /><br /><br />
            <div className="icon1">
              <EditIcon />
            </div>
            <div className="icon2">
              <PersonIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Searchitem