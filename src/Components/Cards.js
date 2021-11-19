import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.png'
              text='Post Your Thoughts'
              path='/info'
            />
            <CardItem
              src='images/img-4.png'
              text='Collab With Others'
              path='/info'
            />
            <CardItem
              src='images/img-5.png'
              text='Earn Rewards'
              path='/info'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;