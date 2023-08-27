import React from 'react'
import './DesDetails.css'
const Days = (props) => {
  return (
    <div className='daymain'>
        <div className="dayheadmain"><div className='daycircle'>{props.day}</div><div className='daytext'>{props.head}</div></div>
        <div clasName="day-list">
            <ul className='sitem'>
                <li >{props.l1}</li>
                <li>{props.l2}</li>
                <li>{props.l3}</li>
               
            </ul>
        </div>
    </div>
  )
}

export default Days