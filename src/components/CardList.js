import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <Card 
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default CardList;
