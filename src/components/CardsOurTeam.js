import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsOurTeam() {
  return (
    <div className='cards'>
      <h1>Executive Directors</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/icon.png'
              text='Sandeep is a 2x AIME Qualifier and the Executive Director'
              label='Sandeep Karjala - Co-Founder'
              path='/our-team'
            />
            <CardItem
              src='images/icon.png'
              text='Pranay is a 2x AIME Qualifier and the Director of Operations'
              label='Pranay Boreddy - Co-Founder'
              path='/our-team'
            />
            <CardItem
              src='images/icon.png'
              text='Yanzhe is a 2x AIME Qualifier and the Managing Director'
              label='Yanzhe Feng - Co-Founder'
              path='/our-team'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsOurTeam;
