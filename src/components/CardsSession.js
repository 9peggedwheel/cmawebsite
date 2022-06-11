import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsSession() {
  return (
    <div className='cards'>
      <h1>Upcoming Sessions</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/amc8.jpg'
              text='6/20/2022 AMC8 Learning and Practice Session'
              label='AMC8'
              path='/sessions'
            />
            <CardItem
              src='images/amc10.jpg'
              text='6/21/2022 AMC10 Learning and Practice Session'
              label='AMC10'
              path='/sessions'
            />
            <CardItem
              src='images/mock.jpg'
              text='6/28/2022 Mock Practice Session (Both AMC8 and AMC10) '
              label='Mock Practice'
              path='/sessions'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsSession;