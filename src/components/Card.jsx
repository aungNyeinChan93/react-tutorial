import React from 'react';
import "./Card.css"



const Card = ({cardTitle,cardDescription}) => {
    // const cardTitle = "Card Title";
    // const description = "this is description "

    return (
        <div className='card-container'>
            <img src="https://via.placeholder.com/150/92c952" alt="img1"  />
            <h2 style={{letterSpacing:"0.3rem" }} className='card-title'>{cardTitle}</h2>
            <p className='card-description'>{cardDescription}</p>
        </div>
    )
}

export default Card;
