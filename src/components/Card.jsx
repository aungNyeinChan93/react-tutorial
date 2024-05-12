import React from 'react';
import "./Card.css";




const Card = ({image,title,description}) => {
    // console.log(props);
    return (
        <div className='card-container'>
            <img src={image} alt="img1"  />
            <h2 style={{letterSpacing:"0.3rem" }} className='card-title'>{title}</h2>
            <p className='card-description'>{description}</p>
        </div>
    )
}

export default Card;
