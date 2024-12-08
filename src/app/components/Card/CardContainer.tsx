'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Button from "react";
import NameCard from './NameCard';
import "./card.scss"
import jsonData from "../../scripts/pokemon.json";

interface CardContainerProps {
  height: number;
  isFirstLoop: boolean
}

const CardContainer = () => {

  interface data {
    [key: string]: string;
  }
  
  function getSurroundingStrings(data: typeof jsonData, targetNumber: number, count = 3): [string[]] {
    const sortedKeys = Object.keys(data).map(Number).sort((a, b) => a - b);
    const targetIndex = sortedKeys.indexOf(targetNumber);
  
    const lowerIndices: Array<number> = sortedKeys.slice(Math.max(0, targetIndex - count), targetIndex);
    const higherIndices: Array<number> = sortedKeys.slice(targetIndex + 1, Math.min(sortedKeys.length, targetIndex + count + 1));

    if (targetNumber === 1) {
        lowerIndices.push(sortedKeys.length, sortedKeys.length - 1, sortedKeys.length - 2)
    }
    
    if (targetNumber === sortedKeys.slice(sortedKeys.length - 1)[0]) {
      higherIndices.push(1, 2, 3);
    }

    const listOfPokemon = lowerIndices.map(key => data[key.toString()]).concat([data[(targetIndex + 1).toString()]], higherIndices.map(key => data[key.toString()])); 

    return [listOfPokemon];
  }
  const [activeNumber, setActiveNumber] = useState(1); // Initial active number
  
  let [pokemonList]: [string[]] = getSurroundingStrings(jsonData, activeNumber)


  const handleCardClick = () => {
  console.log("fucking work")  
};

  useEffect(() => {
    [pokemonList] = getSurroundingStrings(jsonData, activeNumber);
  }, [activeNumber]);
  const pokemonListUpdated = pokemonList.map((pokemon, index)=> {
    if (index === 3) {
      console.log(index, pokemon)
    }
  });
  
  return (
    <div className='card__container'>
      {pokemonList.map((pokemon, index)=>
      <NameCard key={index} pokemonName={pokemon} index={`${index}`} toggleFunction={handleCardClick()} />
      )}
    </div>
  );
};

export default CardContainer;