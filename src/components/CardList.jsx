import React from 'react'
import Card from './Card'
import "./CardList.css"
import {cardOne,cardTwo,cardThree,cardFour,cardFive,cardSix} from "../cardData.js"

const CardList = () => {
   
    return (
        <section className='card-list'>
            <Card image={cardOne.image} title={cardOne.title} description={cardOne.description}/>
            <Card image={cardTwo.image} title={cardTwo.title} description={cardTwo.description}/>
            <Card image={cardThree.image} title={cardThree.title} description={cardThree.description}/>
            <Card image={cardFour.image} title={cardFour.title} description={cardFour.description}/> 
            <Card image={cardFive.image} title={cardFive.title} description={cardFive.description}/> 
            <Card image={cardSix.image} title={cardSix.title} description={cardSix.description}/> 
        </section>
    )
}

export default CardList
