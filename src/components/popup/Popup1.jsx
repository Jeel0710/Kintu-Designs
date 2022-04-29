import React from 'react'

function Popup1(props) {
  return (props.trigger) ? (
    <div className='popup1'>
        <div className="popup1-inner">
            <button className="close-btn">close</button>
            {props.childern}
        </div>
    </div>
  ) : "";
}

export default Popup1