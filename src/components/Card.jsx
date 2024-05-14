import React from 'react';
import "./Card.css";

const Card = ({ image, title, description, id ,event }) => {
    // const {image,title,description,id} = card;
    // console.log(event);
    
    return (
        <div className='card-container'>
            <img src={image} alt="img1" />
            <h2 style={{ letterSpacing: "0.3rem" }} className='card-title'>{title}</h2>
            <p className='card-description'>{description}</p>
            <p>{id}</p>
            <button onClick={event} onMouseOver={(e)=>{e.target.style.background="blue"}} style={{ background: "red", padding: "10px 40px", borderRadius: "25px", border: "none", color: "white" }} >Click </button>
            <button onClick={()=>event(title)} style={{ background: "red",margin:"10px auto", padding: "10px 40px", borderRadius: "25px", border: "none", color: "white" }} >Click/include paraemter</button>
        </div>
    )
};

export default Card;
