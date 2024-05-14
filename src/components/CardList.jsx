import React from 'react'
import Card from './Card'
import "./CardList.css";
import cards from "../cardData"


const CardList = () => {
    const eventHandeler= (e)=>{
        console.log("event occour...",e);
    }
    return (
        /* cardList section */
        <section className='card-list'>
            {cards.map((card) => {
                
                // never forget need to return mapArrayFunction that is type function;<< rendering List >>
                return <Card card={card} {...card} key={card.id} event={eventHandeler}/>
            })}
        </section>
        
    )
};

export default CardList;
