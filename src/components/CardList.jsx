import React from 'react'
import Card from './Card'
import "./CardList.css"

const CardList = ({cardTitle,cardDescription}) => {
    return (
        <section className='card-list'>
            <Card cardDescription={cardDescription} cardTitle={cardTitle}/>
            <Card cardDescription={cardDescription} cardTitle={cardTitle}/>
            <Card cardDescription={cardDescription} cardTitle={cardTitle}/>
            <Card cardDescription={cardDescription} cardTitle={cardTitle}/>
            <Card cardDescription={cardDescription} cardTitle={cardTitle}/>
            <Card cardDescription={cardDescription} cardTitle={cardTitle}/>
          

        </section>
    )
}

export default CardList
