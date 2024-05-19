import React from 'react';
import { useContext } from 'react';
import MyListContext from '../../Context/MyListContext';

const List = () => {
    const myBook = useContext(MyListContext)
  return (
    <div className='List container-fluid bg-body-secondary p-2 '>
        <h1 className='list-title text-center text-white bg-danger p-2 rounded shadow'>  My List </h1>
        <ul className=' list-group '>
            <li className=' list-group-item list-group-item-info'><span className='text-uppercase '>{myBook.name}</span></li>
            <li className=' list-group-item'><span className='text-uppercase '>{myBook.year}</span></li>
            <li className=' list-group-item list-group-item-info'><span className='text-uppercase '>{myBook.amount}</span></li>
        </ul>
    </div>
  )
}

export default List
