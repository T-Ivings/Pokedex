import React from 'react';
import NameCard from './NameCard';
import "./card.scss"

interface CardContainerProps {
  height: number;
  isFirstLoop: boolean
}

const CardContainer = () => {

  return (
    <div className='card__container'>
        <NameCard pokemonName={'ABCDEF'} />
        <NameCard pokemonName={'tits'} />
        <NameCard pokemonName={'cunt'} />
    </div>
  );
};

export default CardContainer;