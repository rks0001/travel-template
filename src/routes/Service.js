import React from 'react';



import Trip from "../components/Trip";

import Services from "../components/Services";
function Service() {
  return (
    <div className='mainsection'>
      <Services/>
      <div style={{textAlign:"center", padding:"0.2rem 3rem"}} className='carhead'>Discover Tours</div>
      <Trip/>
    </div>
  );
}

export default Service;
