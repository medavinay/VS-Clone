import React from 'react';
import "./styles.css";
import { links } from "../../components/Assets/Images-link"

function Filter(selectedFilter, setSelectedFilter) {
  

  return (
    <div className="Filter-div">
      
        {links.map((item , i) => (
     
     <div
      key={i}
       className="links-box" onclick={()=>setSelectedFilter(i)}>
      <img className='links-img' src={item.imgsrc} />
      <p className="links-label">{item.label}</p>
     </div>
        ))} 

    </div>
  );
}

export default Filter;