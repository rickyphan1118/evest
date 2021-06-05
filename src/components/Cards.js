import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>  
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>Check out EVEST's IPO picks!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='................................................................................'
              label='IPO'
              path='/IPO'
            />
            <CardItem
              src='images/img-9.jpg'
              text='................................................................................'
              label='IPO'
              path='/IPO'
            />
            <CardItem
              src='images/img-9.jpg'
              text='................................................................................'
              label='IPO'
              path='/IPO'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='................................................................................'
              label='IPO'
              path='/IPO'
            />
            <CardItem
              src='images/img-9.jpg'
              text='................................................................................'
              label='IPO'
              path='/IPO'
            />
            <CardItem
              src='images/img-9.jpg'
              text='................................................................................'
              label='IPO'
              path='/IPO'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='................................................................................'
              label='IPO'
              path='/IPO'
            />
            <CardItem
              src='images/img-9.jpg'
              text='................................................................................'
              label='IPO'
              path='/IPO'
            />
            <CardItem
              src='images/img-9.jpg'
              text='................................................................................'
              label='IPO'
              path='/IPO'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
