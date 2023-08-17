import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import './Collapse.css'


function CollapseMenu(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
      className='coldiv'
        onClick={() => setOpen(!open)}
        aria-controls="collapse-text"
        aria-expanded={open}
      >
       <div>
       {props.title}
        </div>
        
        <div>
        {open?<i class="fa-solid fa-caret-right"></i>:<i class="fa-solid fa-caret-down"></i>}
        </div>  
      </div>
      <Collapse in={open}>
        <div id="collapse-text">
         {props.text}
        </div>
      </Collapse>
    </>
  );
}

export default CollapseMenu;