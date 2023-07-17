import React from 'react';
import "./styles.css";
import Card from "./card";
import { list } from "../Assets/crards-list";


function Cards({list}) {
  return ( <div className="cards-flex">
{list.map((card,i)=>(
<Card card={card} key={i}/>
))}

</div>
  );
}
    export default Cards;