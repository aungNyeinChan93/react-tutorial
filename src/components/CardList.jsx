import React from 'react'
import Card from './Card'
import "./CardList.css";
import cards from "../cardData"


const CardList = () => {

    return (
        <section className='card-list'>
            {cards.map((card) => {
                // never forget need to return mapArrayFunction that is type function;<< rendering List >>
                return <Card card={card} {...card} key={card.id} />
            })}
        </section>
    )
};

export default CardList;
