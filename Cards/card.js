import React from 'react';
import "./styles.css";
import hotel from "../Assets/hotels/hotel-1.jpeg";
import StarIcon from '@mui/icons-material/Star';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


function Card({card}) {
  return (
    
    <div className="card-box">
    <Swiper
    sliderPerView={1}
    spaceBetween={15}
    loop={true}
    mousewheel={true}
    cssMode={true}
 
   
    className="swiper-container">

      {card.imgsrc.map((src,i)=>(
      <SwiperSlide key={i}>
     <img src={src} className="card-img" />
     </SwiperSlide>
  ))}
     </Swiper>
    <div className="card-info-flex">
        <h3 className="card-title">{card.title}</h3>
        <div className="card-rating">
<StarIcon />

<p>4.3</p>
</div>
    </div>

    <p style={{margin: 0,color:"var (--font-grey)"}}>Beach and sunset visualViewport</p>

<p style={{margin:0, color:"var(--font-grey)"}}>{card.date}</p>
<p style={{margin:"0.2rem",fontSize:"1rem", color:"var(--font-black)"}}><span style={{fontWeight:"600"}} >{card.price}</span>night</p>
    </div>
    
  );
}
export default Card
